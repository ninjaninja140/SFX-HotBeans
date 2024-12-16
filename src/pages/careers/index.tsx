import Route from '@components/Meta/Route';
import Hero from '@components/PageComponents/Careers/Hero';
import SelectionDropdown from '@components/SelectionDropdown';
import Vacancy from '@components/Vacancy';
import VacancyArray from '@src/typings/Vacancy';
import { Vacancies } from '@utilities/LoadVacancies';
import paginate from '@utilities/Pageinate';
import ScrollTo from '@utilities/ScrollTo';
import { Fragment, useMemo, useState } from 'react';
import { IoFilter, IoRefresh } from 'react-icons/io5';

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
	const [currentPage, setCurrentPage] = useState<number>(1);
	const paginatedVacancies = useMemo(() => paginate(Vacancies, 6) as Array<VacancyArray>, []);
	const totalPages = paginatedVacancies.length;
	const currentVacancies = paginatedVacancies[currentPage - 1] || [];

	const getPageRange = (): Array<number | string> => {
		const visiblePages: Array<number | string> = [];
		const rangeBefore = 2;
		const rangeAfter = 2;

		if (currentPage > rangeBefore + 2) visiblePages.push(1);
		if (currentPage > rangeBefore + 3) visiblePages.push('...');

		for (let i = Math.max(1, currentPage - rangeBefore); i < currentPage; i++) visiblePages.push(i);

		visiblePages.push(currentPage);

		for (let i = currentPage + 1; i <= Math.min(totalPages, currentPage + rangeAfter); i++)
			visiblePages.push(i);

		if (currentPage < totalPages - rangeAfter - 2) visiblePages.push('...');
		if (currentPage < totalPages - rangeAfter - 1) visiblePages.push(totalPages);

		return visiblePages;
	};

	const handlePageChange = (page: number) => setCurrentPage(page);

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
						<div
							style={{
								display: 'flex',
								alignContent: 'center',
								alignItems: 'center',
								justifyItems: 'center',
								cursor: 'pointer',
							}}
							onClick={() =>
								window.open(
									`${window.location.origin}/careers?scroll-to=vacancies`,
									'_self'
								)
							}>
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
								<IoRefresh
									style={{
										height: '100%',
										width: '100%',
									}}
								/>
							</div>
							<p>Refresh Results</p>
						</div>
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
							Showing {Vacancies.length} Results with {totalPages} Pages
						</h3>
						<div
							style={{
								justifyContent: 'left',
								textAlign: 'left',
								alignItems: 'left',
							}}>
							{currentVacancies.map((v, vid) => (
								<Vacancy vacancy={v} id={vid + 1} />
							))}
						</div>
						<div
							style={{
								marginTop: '20px',
								display: 'flex',
								gap: '5px',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							{getPageRange().map((page, idx) => (
								<div
									key={idx}
									onClick={() =>
										typeof page === 'number' &&
										handlePageChange(page)
									}
									style={{
										width: '17px',
										height: '17px',
										borderRadius: '0.2rem',
										border: '#454fbf solid 2px',
										color: '#454fbf',
										padding: '7px',
										cursor: 'pointer',
										textAlign: 'center',
										alignContent: 'center',
										justifyContent: 'center',
										alignItems: 'center',
										justifyItems: 'center',
										display: 'flex',
										pointerEvents:
											typeof page === 'number'
												? 'auto'
												: 'none',
									}}>
									{page === '...' ? '...' : page}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
