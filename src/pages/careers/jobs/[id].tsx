import Route from '@components/Meta/Route';
import Vacancy from '@components/Vacancy';
import VacanciesJSON from '@configuration/Careers.json';
import ScrollTo from '@utilities/ScrollTo';
import { useEffect } from 'react';
import { useParams } from 'react-router';
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

export default () => {
	const defaults: React.CSSProperties = {
		flex: '1',
	};

	const { id } = useParams();

	const Vacancy: Vacancy = Vacancies[Number(id) - 1];

	useEffect(() => console.log(id, Vacancy));

	return (
		<Fragment>
			<Route Location='Jobs' />
			<ScrollTo />

			<div style={{ minHeight: '40vh', display: 'flex', margin: '5% auto' }}>
				<div
					style={{
						...defaults,
						paddingLeft: '15%',
						paddingRight: '15%',
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
						}}>
						{Vacancy.Title}
					</h1>
					<div></div>
				</div>
			</div>
		</Fragment>
	);
};
