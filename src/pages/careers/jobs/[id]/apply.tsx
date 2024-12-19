import Route from '@components/Meta/Route';
import JobsFallback from '@components/Pages/JobsFallback';
import Required from '@components/Text/Required';
import Underline from '@components/Text/Underline';
import '@css/vacancy.css';
import { Vacancy } from '@src/typings/Vacancy';
import { Vacancies } from '@utilities/LoadVacancies';
import { Notification } from '@utilities/Notification';
import ScrollTo from '@utilities/ScrollTo';
import axios from 'axios';
import _ from 'lodash';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import validator from 'validator';

const ArrangementDefinitions: Record<string, string> = {
	'In-Office': 'In-Office, London, UK',
	Remote: 'Fully remote, Global',
	Hybrid: 'Hybrid (some in-office days)',
	Flexible: 'Flexible (no required in-office days)',
};

export default () => {
	const [email, setEmail] = useState<boolean>(false);
	const [first, setFirstname] = useState<boolean>(false);
	const [last, setLastname] = useState<boolean>(false);
	const [number, setPhoneNumber] = useState<boolean>(false);
	const [location, setLocation] = useState<string>();
	const [loadingLocation, setLoadingLocation] = useState<boolean>(false);
	const [cv, setCV] = useState<boolean>(false);
	const [cvValue, setCVValue] = useState<string>('');

	const defaults: React.CSSProperties = {
		flex: '1',
	};

	const { id } = useParams();

	const Vacancy: Vacancy | undefined = Vacancies.find((v) => v.VacancyId === Number(id));

	if (!Vacancy) return <JobsFallback />;

	return (
		<Fragment>
			<Route Location={`Jobs - ${Vacancy.Title}`} />
			<ScrollTo />

			<div style={{ minHeight: '40vh', display: 'flex', margin: '5% auto' }}>
				<div
					style={{
						...defaults,
						paddingLeft: '20%',
						paddingRight: '20%',
						justifyContent: 'center',
						alignItems: 'center',
						justifyItems: 'center',
						alignSelf: 'center',
						textAlign: 'center',
					}}>
					<div style={{ marginTop: '10rem', marginBottom: '10rem' }}>
						<h1
							style={{
								fontSize: 'clamp(2.5rem,2.5rem + 1 * (100vw - 480px) / 1440 * 16,3.5rem)',
								lineHeight: '1.24',
								margin: 0,
								padding: 0,
							}}>
							{Vacancy.Title}
						</h1>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
								textAlign: 'center',
								alignItems: 'center',
								justifyItems: 'center',
								marginBottom: '25px',
							}}>
							{_.flatMap(
								[
									`ID: ${id}`,
									Vacancy.Type,
									ArrangementDefinitions[Vacancy.Arrangement],
								],
								(v, i, a) => (a.length - 1 !== i ? [v, '/'] : v)
							).map((s) => (
								<p
									style={{
										paddingLeft: '25px',
										fontWeight: s === '/' ? '700' : '400',
										fontFamily:
											s === '/' ? 'GG Sans' : 'Maax',
										color:
											s === '/'
												? '#5865f2'
												: '#000000',
										fontSize:
											s === '/' ? '1.5rem' : '1.2rem',
										pointerEvents: 'none',
									}}>
									{s}
								</p>
							))}
						</div>
						<button
							onClick={() =>
								window.open(
									`${window.location.origin}/careers/jobs/${id}`,
									'_self'
								)
							}>
							View Vacancy Description
						</button>
					</div>
					<hr />
					<div className='vacancy' style={{ width: '100%' }}>
						<div
							style={{
								display: 'flex',
								alignContent: 'center',
								alignItems: 'center',
							}}>
							<h1 style={{ flex: '3' }}>Apply for this Vacancy</h1>
							<p style={{ flex: '1', textAlign: 'right', fontWeight: '500' }}>
								Required: <Required />
							</p>
						</div>
						<h3>
							First Name <Required />
						</h3>
						<input
							style={{ borderRadius: '0.2rem', width: '100%' }}
							placeholder='First Name'
							type='text'
						/>
						<h3>
							Last Name <Required />
						</h3>
						<input
							style={{ borderRadius: '0.2rem', width: '100%' }}
							placeholder='Last Name'
							type='text'
						/>
						<h3>
							Email <Required />
						</h3>
						<input
							style={{ borderRadius: '0.2rem', width: '100%' }}
							placeholder='Email'
							type='email'
							onChange={(i) => {
								if (!(i.target.value === ''))
									validator.isEmail(i.target.value) === true
										? (() => setEmail(true))()
										: (() => setEmail(false))();
								else setEmail(false);
							}}
						/>
						{email ? undefined : (
							<div style={{ marginBottom: '12px' }}>
								<i style={{ color: '#FEE75C', fontSize: '14px' }}>
									Invalid form of input, please make sure this is
									an <Underline>Email</Underline>.
								</i>
							</div>
						)}
						<h3>Phone Number</h3>
						<i style={{ fontSize: '14px', marginBottom: '0.2rem' }}>
							If the system incorrectly marks your phone number, try another
							way of typing it.
						</i>
						<input
							style={{ borderRadius: '0.2rem', width: '100%' }}
							placeholder='Phone Number'
							type='tel'
							onChange={(i) => {
								if (
									i.target.value.match(
										/(?<=[ ])[\d \-+()]+$|(?<=[ ])[\d \-+()]+(?=[ ]\w)/
									)
								)
									return setPhoneNumber(true);

								return setPhoneNumber(false);
							}}
						/>
						{number ? undefined : (
							<div style={{ marginBottom: '12px' }}>
								<i style={{ color: '#FEE75C', fontSize: '14px' }}>
									Invalid form of input, please make sure this is
									a form of <Underline>Phone Number</Underline>.
								</i>
							</div>
						)}
						<h3>Location (City)</h3>
						<input
							style={{ borderRadius: '0.2rem', width: '100%' }}
							placeholder='Example: London, United Kingdom'
							type='text'
							readOnly={loadingLocation}
							value={location}
							onChange={(i) => setLocation(i.target.value)}
						/>
						<button
							style={{ marginTop: '0.5rem' }}
							onClick={() => {
								setLoadingLocation(true);
								setLocation('');
								new Notification({
									message: 'Loading from current location...',
								});

								window.navigator.geolocation.getCurrentPosition(
									(p) => {
										axios.get(
											`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${p.coords.latitude}&lon=${p.coords.longitude}`,
											{
												headers: {
													Accept: 'application/json',
												},
											}
										)
											.then((d) => {
												const data = d.data;

												setLocation(
													data.address
														.city +
														', ' +
														data
															.address
															.country
												);
												setLoadingLocation(
													false
												);
												new Notification({
													message: 'Loaded location successfully!',
												});
											})
											.catch(() => {
												setLoadingLocation(
													false
												);
												return new Notification(
													{
														message: 'Unable to get live location, location services access was denied.',
													}
												);
											});
									},
									() => {
										setLoadingLocation(false);
										return new Notification({
											message: 'Unable to get live location, location services access was denied.',
										});
									},
									{ maximumAge: Infinity }
								);
							}}>
							Locate Me
						</button>
						<h3>
							Resume/CV <Required />
						</h3>
						<input
							type='file'
							style={{ borderRadius: '0.2rem', width: '100%' }}
							value={cvValue}
							onChange={(i) => {
								setCVValue(i.target.value);
								if (i.target.files?.length === 1) return setCV(true);
								return setCV(false);
							}}
							accept='.md,.rtf,.txt,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf'
						/>
						{cv ? (
							<button
								style={{ marginTop: '0.5rem' }}
								onClick={() => {
									setCVValue('');
									setCV(false);
								}}>
								Remove CV
							</button>
						) : (
							<div style={{ marginBottom: '12px' }}>
								<i
									style={{
										color: '#FEE75C',
										fontSize: '14px',
									}}>
									Please make sure you have a{' '}
									<Underline>CV</Underline> attached to continue.
								</i>
							</div>
						)}

						<h3>Extra Information</h3>
						<textarea
							style={{
								borderRadius: '0.2rem',
								width: '100%',
								minHeight: '7rem',
							}}
							placeholder='Extra information to submit on your application'></textarea>
						<button style={{ width: '100%', marginTop: '40px' }}>
							Submit Application
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
