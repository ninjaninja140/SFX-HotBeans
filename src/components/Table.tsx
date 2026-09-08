import SelectionDropdown from '@components/SelectionDropdown';
import { Vacancies } from '@utilities/LoadVacancies';
import paginate from '@utilities/Pageinate';
import { useMemo, useState } from 'react';
import { IoFilter, IoRefresh } from 'react-icons/io5';
import Vacancy from './Vacancy';

interface Component {
	id: string;
	title: string;
	dropdowns: Array<{
		title: string;
		content: Array<string>;
	}>;
	content: Array<any>;
}

export default (props: Component) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const paginatedVacancies = useMemo(() => paginate(props.content, 6) as Array<typeof props.content>, []);
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
		<div
			id={props.id}
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
			<h1>{props.title}</h1>
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
					{props.dropdowns.map((d) => (
						<SelectionDropdown title={d.title} array={d.content} />
					))}
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
								`${window.location.origin + window.location.pathname}?scroll-to=${props.id}`,
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
						{currentVacancies.map((v) => (
							<Vacancy vacancy={v} id={v.VacancyId} />
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
	);
};
