import Route from '@components/Meta/Route';
import Hero from '@components/PageComponents/Careers/Hero';
import SelectionDropdown from '@components/SelectionDropdown';
import Vacancy from '@components/Vacancy';
import VacanciesJSON from '@configuration/Careers.json';
import ScrollTo from '@utilities/ScrollTo';
import { Fragment } from 'react';
import { IoFilter } from 'react-icons/io5';

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
							Showing {Vacancies.length} Results
						</h3>
						<div
							style={{
								justifyContent: 'left',
								textAlign: 'left',
								alignItems: 'left',
							}}>
							{Vacancies.map((v, vid) => (
								<Vacancy vacancy={v} id={vid + 1} />
							))}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
