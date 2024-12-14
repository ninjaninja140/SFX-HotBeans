import Route from '@components/Meta/Route';
import Hero from '@components/PageComponents/Careers/Hero';
import SelectionDropdown from '@components/SelectionDropdown';
import VacanciesJSON from '@configuration/Careers.json';
import ScrollTo from '@utilities/ScrollTo';
import { IoFilter } from 'react-icons/io5';
import { Fragment } from 'react/jsx-runtime';

interface Vacancy {
	Title: string;
	Salary: number;
	About: string;
	Tags: Array<string> | undefined;
	Type: string;
	Arrangement: string;
}

const Vacancies: Array<Vacancy> = VacanciesJSON;

const Tags: Array<string> = [
	'Design',
	'Development',
	'Advisory',
	'Finance',
	'Provisional Relations',
	'Informational Relations',
	'Customer Relations',
];

const Type: Array<string> = ['Full-Time', 'Part-Time', 'Apprenticeship'];

const Arrangements: Array<string> = ['In-Office', 'Remote', 'Hybrid', 'Flexible'];

const ArrangementDefinitions: Record<string, string> = {
	'In-Office': 'In-Office',
	Remote: 'Fully remote',
	Hybrid: 'Hybrid (some in-office days)',
	Flexible: 'Flexible (no required in-office days)',
};

export default () => {
	return (
		<Fragment>
			<Route Location='Careers' />
			<ScrollTo />

			<Hero />
			<div
				id='vacancies'
				style={{
					margin: '5% auto',
					paddingLeft: '15%',
					paddingRight: '15%',

					justifyContent: 'flex-start',
					alignItems: 'left',
					justifyItems: 'center',
					alignSelf: 'center',
					textAlign: 'left',
				}}>
				<h1>Job Vacancies</h1>
				<div style={{ display: 'flex' }}>
					<div
						style={{
							flex: '1',
							gap: '5px',
							display: 'flex',
							flexDirection: 'column',
						}}>
						<h3
							style={{
								width: '100%',
								fontWeight: '600',
								display: 'flex',
								alignContent: 'center',
								alignItems: 'center',
								marginBottom: '30px',
							}}>
							Filters <IoFilter style={{ marginLeft: '15px' }} />
						</h3>
						<SelectionDropdown
							title='Discipline'
							array={Tags}
							onSelection={(a) => console.log(a)}
						/>
						<SelectionDropdown title='Arrangements' array={Arrangements} />
						<SelectionDropdown title='Career Type' array={Type} />
					</div>
					<div
						style={{
							flex: '3.5',
							display: 'flex',
							justifyContent: 'right',
							flexDirection: 'column',
							textAlign: 'right',
							alignItems: 'right',
							paddingLeft: '50px',
						}}>
						<h3
							style={{
								width: '100%',
								fontWeight: '600',
								marginBottom: '30px',
							}}>
							Showing undefined Results
						</h3>
						<div
							style={{
								justifyContent: 'left',
								textAlign: 'left',
								alignItems: 'left',
							}}>
							{Vacancies.map((v) => (
								<div
									style={{
										borderTopColor: '#5865f2',
										borderTopStyle: 'solid',
										borderTopWidth: '2px',
										padding: '1rem',
										display: 'flex',
									}}>
									<div style={{ flex: '3.5' }}>
										<h3
											style={{
												padding: '0',
												margin: '0',
												fontWeight: '600',
												fontSize: 'clamp(1.0625rem,1.0625rem + .0625 * (100vw - 480px) / 1440 * 16,1.125rem)',
												marginBottom: '1rem',
											}}>
											{v.Title}
										</h3>
										<p
											style={{
												width: '100%',
												padding: '0',
												margin: '0',
												fontSize: 'clamp(.9375rem,.9375rem + .0625 * (100vw - 480px) / 1440 * 16,1rem)',
												color: '#454fbf',
												fontFamily: 'monospace',
											}}>{`${v.Type}, ${ArrangementDefinitions[v.Arrangement]} — ${v.Tags?.join(', ')}`}</p>
									</div>
									<div
										style={{
											flex: '0.5',
											textAlign: 'center',
											justifyContent: 'center',
											alignItems: 'center',
										}}>
										<p
											style={{
												width: '100%',
												padding: '0',
												margin: '0',
												fontSize: 'clamp(.9375rem,.9375rem + .0625 * (100vw - 480px) / 1440 * 16,1rem)',
												color: '#454fbf',
												fontFamily: 'monospace',
												textAlign: 'right',
											}}>
											{v.Salary}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
