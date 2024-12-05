import EmployeeBadge from '@components/EmployeeBadge';
import Route from '@components/Meta/Route';
import Hero from '@components/PageComponents/OurStaff/Title';
import Section from '@components/Section';
import Link from '@components/Text/Link';

export default () => {
	return (
		<div>
			<Route Location={'Our Staff'} />
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
			<Section title='Our Courses and Programs'>
				Available at our{' '}
				<Link href='/courses' icon underline>
					Courses
				</Link>{' '}
				and
				<Link href='/programs' icon underline>
					Programs
				</Link>{' '}
				pages, we have a range of courses and programmes that can help, employ and train young
				developers to be just as good as our professionals are here at HotBeans, perhaps also
				have the chance to meet them and work alongside then at your very own spot in the
				HotBeans Website Development team!
				<br />
				<br />
				<i style={{ fontSize: '16px' }}>Why do you offer courses?</i> We don't, at HotBeans we
				have a dedicated department towards finding and trial-running the best design and
				development courses so you can be just as good and if not better then our Developers
				here, so you can be offered a place on our team by the end of your course if you
				couldn't meet our requirements at first.
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
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						justifyItems: 'center',
						alignContent: 'center',
						textAlign: 'center',
					}}>
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
