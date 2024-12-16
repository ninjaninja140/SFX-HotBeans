import Route from '@components/Meta/Route';
import JobsFallback from '@components/Pages/JobsFallback';
import '@css/vacancy.css';
import { Vacancy } from '@src/typings/Vacancy';
import { Vacancies } from '@utilities/LoadVacancies';
import ScrollTo from '@utilities/ScrollTo';
import _ from 'lodash';
import { IoChevronBack } from 'react-icons/io5';
import { useParams } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

const ArrangementDefinitions: Record<string, string> = {
	'In-Office': 'In-Office',
	Remote: 'Fully remote',
	Hybrid: 'Hybrid (some in-office days)',
	Flexible: 'Flexible (no required in-office days)',
};

export default () => {
	const defaults: React.CSSProperties = {
		flex: '1',
	};

	const { id } = useParams();
	const Vacancy: Vacancy = Vacancies[Number(id) - 1];

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
					<button>Apply Now</button>
					<div style={{ marginTop: '40px' }}>
						<div
							style={{
								display: 'flex',
								alignContent: 'center',
								alignItems: 'center',
								justifyItems: 'center',
								cursor: 'pointer',
							}}
							onClick={() => {
								window.open(
									`${window.location.origin}/careers?scroll-to=vacancies`,
									'_self'
								);
							}}>
							<div
								style={{
									width: '17px',
									height: '17px',
									borderRadius: '0.2rem',
									border: '#454fbf solid 2px',
									color: '#454fbf',
									padding: '7px',
									marginRight: '10px',
								}}>
								<IoChevronBack
									style={{
										height: '100%',
										width: '100%',
									}}
								/>
							</div>
							<p>Back to search results</p>
						</div>
					</div>
					<div className='vacancy' style={{ width: '100%' }}>
						{Vacancy.About}
						<hr />
						<h2>Annual Salary Range</h2>
						<h1>
							<span style={{ fontFamily: 'FF Neuwelt', fontWeight: '900' }}>
								£
							</span>
							{Intl.NumberFormat('en-US', {
								notation: 'compact',
								maximumFractionDigits: 1,
							}).format(Vacancy.Salary)}{' '}
							—{' '}
							<span style={{ fontFamily: 'FF Neuwelt', fontWeight: '900' }}>
								£
							</span>
							{Intl.NumberFormat('en-US', {
								notation: 'compact',
								maximumFractionDigits: 1,
							}).format(Vacancy.Salary + 12000)}{' '}
							GBP
						</h1>
						<hr />
						<p>
							Roles that are based in our London, UK Headquarters are
							in-office 5-days a week (Monday to Friday) unless the role is
							specifically stated to have Flexible or Hybrid office days,
							Remote working is fully exempt from this as roles with this
							arrangement do not come into the office unless required.
						</p>
						<h3>In our offices, you will love:</h3>
						<ul>
							<li>5 free lunches per week from the in-office canteen</li>
							<li>
								Discounted prices from food shops in the surrounding
								area
							</li>
							<li>
								Discounted travel costs or fully company paid (depending
								on distance)
							</li>
							<li>Industry-leading compensation packages</li>
							<li>Free company-paid private healthcare</li>
						</ul>
						<p>
							At HotBeans, we strive to provide equal employment opportunities
							to all existing employees and new applicants for employment
							positions, we prohibit discrimination and harassment of any type
							without regard to race, colour, religion, age, sex, national
							origin, disability status, genetics, sexual orientation, gender
							identify or expression or any characteristics protected by laws.
							For applicants applying to office-based roles in our London
							office, HotBeans is able to give reasonable accommodations
							during interview or trial stages of applications.
						</p>
						<button style={{ width: '100%', marginTop: '40px' }}>Apply Now</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
