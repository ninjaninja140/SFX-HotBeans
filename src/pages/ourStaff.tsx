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
			<Section title='Our Developers'>
				Here at HotBeans Website Development, we hire a range of developers, Backend Developers,
				FrontEnd Developers, Designers and 3D Component Modellers. These people who make up our
				varying Developer teams give HotBeans its spectacular title, recognition and popularity.
				<br />
				<br />
				We employ people of any background and any qualifications, to us, your background and
				qualifications do not matter, we employ people based on skill. We believe that ethnicity
				and qualifications define a good developer, but rather their skill and what they can do.
			</Section>
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

