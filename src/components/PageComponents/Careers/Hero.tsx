import ClickToScroll from '@components/ClickToScroll';
import { IoBriefcase } from 'react-icons/io5';

export default () => {
	const defaults: React.CSSProperties = {
		flex: '1',
	};

	return (
		<div style={{ minHeight: '70vh', display: 'flex', margin: '5% auto' }}>
			<div
				style={{
					...defaults,
					flex: '2.5',
					paddingLeft: '15%',
					justifyContent: 'flex-start',
					alignItems: 'left',
					justifyItems: 'center',
					alignSelf: 'center',
					textAlign: 'left',
				}}>
				<h1>Careers</h1>
				<p>
					Ever wanted to work at HotBeans? Well, you've come to the right page, on our
					careers page we have listings for all our current open positions, our job
					descriptions of all positions we have and below that, our programmes and
					courses.
					<br />
					You can use the arrows below to locate the page section of your choice.
				</p>
				<div style={{ display: 'flex' }}>
					<ClickToScroll id='vacancies' styles={{ flex: '1' }}>
						Vacancies
					</ClickToScroll>
					<ClickToScroll id='jobs' styles={{ flex: '1' }}>
						Descriptions
					</ClickToScroll>
					<ClickToScroll id='jobs' styles={{ flex: '1' }}>
						Programmes
					</ClickToScroll>
					<ClickToScroll id='jobs' styles={{ flex: '1' }}>
						Courses
					</ClickToScroll>
				</div>
			</div>
			<div
				style={{
					...defaults,
					paddingRight: '15%',
					paddingLeft: '10%',
					justifyContent: 'flex-start',
					alignItems: 'left',
					textAlign: 'left',
				}}>
				<IoBriefcase
					className='icon-3d'
					fill='#5865f2'
					color='#5865f2'
					style={{ height: '100%', width: '100%' }}
				/>
			</div>
		</div>
	);
};
