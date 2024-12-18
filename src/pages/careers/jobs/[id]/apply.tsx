import Route from '@components/Meta/Route';
import JobsFallback from '@components/Pages/JobsFallback';
import Required from '@components/Text/Required';
import '@css/vacancy.css';
import { Vacancy } from '@src/typings/Vacancy';
import { Vacancies } from '@utilities/LoadVacancies';
import ScrollTo from '@utilities/ScrollTo';
import _ from 'lodash';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

const ArrangementDefinitions: Record<string, string> = {
	'In-Office': 'In-Office, London, UK',
	Remote: 'Fully remote, Global',
	Hybrid: 'Hybrid (some in-office days)',
	Flexible: 'Flexible (no required in-office days)',
};

export default () => {
	const [email, setEmail] = useState<string>();
	const [first, setFirstname] = useState<string>();
	const [last, setLastname] = useState<string>();
	const [number, setPhoneNumber] = useState<string>();
	const [location, setLocation] = useState<string>();

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
									fontFamily: s === '/' ? 'GG Sans' : 'Maax',
									color: s === '/' ? '#5865f2' : '#000000',
									fontSize: s === '/' ? '1.5rem' : '1.2rem',
									pointerEvents: 'none',
								}}>
								{s}
							</p>
						))}
					</div>
					<button
						style={{ marginBottom: '2rem' }}
						onClick={() =>
							window.open(
								`${window.location.origin}/careers/jobs/${id}`,
								'_self'
							)
						}>
						View Vacancy Description
					</button>
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
						/>
						<h3>Phone Number</h3>
						<input
							style={{ borderRadius: '0.2rem', width: '100%' }}
							placeholder='Phone Number'
							type='tel'
						/>
						<h3>Location (City)</h3>
						<input
							style={{ borderRadius: '0.2rem', width: '100%' }}
							placeholder='London, United Kingdom'
							type='text'
						/>
						<button
							style={{ marginTop: '0.5rem' }}
							onClick={() => {
								//https://nominatim.openstreetmap.org/reverse?lat=<value>&lon=<value>&<params>
								window.navigator.geolocation.getCurrentPosition(
									(p) => console.log(p),
									(e) => console.error(e),
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
							onChange={(i) => {
								if (i.target.files?.length === 1) {
									return console.log('file');
								}
								console.log('no file');
							}}
							accept='.md,.rtf,.txt,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf'
						/>
						<button style={{ width: '100%', marginTop: '40px' }}>
							Submit Application
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
