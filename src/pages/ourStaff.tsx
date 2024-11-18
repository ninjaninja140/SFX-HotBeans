import EmployeeBadge from '@components/EmployeeBadge';
import Route from '@components/Meta/Route';
import Hero from '@components/PageComponents/OurStaff/Title';
import Section from '@components/Section';

export default (PageConfig: { Location: string; Description?: string }) => {
	return (
		<div>
			<Route Location={PageConfig.Location} Description={PageConfig.Description} />
			<Hero />
			<EmployeeBadge />
			<Section title='Any'> </Section>
			<div
				style={{
					height: '60vh',
					justifyContent: 'center',
					alignItems: 'center',
					justifyItems: 'center',
					alignContent: 'center',
					textAlign: 'center',
					paddingLeft: '15%',
					paddingRight: '15%',
				}}>
				<h1 style={{ margin: '0' }}>You could have your picture here!</h1>
				<h2 style={{ margin: '0' }}>
					If you feel like you could be a productive member here at the HotBeans Web
					Development Team, why not try applying?
				</h2>
				<br />
				<br />
				<br />
				<div style={{ display: 'flex' }}>
					<button
						style={{ width: '350px' }}
						className='inverted-button blurple-button-border'>
						To Careers
					</button>
				</div>
			</div>
		</div>
	);
};

