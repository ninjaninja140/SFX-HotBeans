import { IoChevronDown, IoIdCardOutline } from 'react-icons/io5';

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
				<h1>The Spectacular people who make up HotBeans</h1>
				<p>
					Here at HotBeans, we take on many professional website designers, developers and
					design, development advisors, management and more to make sure our clients can
					work alongside us to produce an efficient, smart and high-quality website whilst
					being able to uphold a pristine company image and support line between us,
					clients and potential clients.
					<br />
					We employ people from all backgrounds ethnically and skill based, we do not
					believe that qualifications or skin tone defines the skill, work power, brains
					and person of an employee, and that's our special trick behind how us and our
					products always come out on top.
				</p>
				<IoChevronDown
					style={{
						color: '#5865f2',
						height: '30px',
						width: '100%',
						marginTop: '40px',
						cursor: 'pointer',
					}}
					onClick={() => document.getElementById('employees')!.scrollIntoView({ behavior: 'smooth' })}
				/>
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
				<IoIdCardOutline
					className='icon-3d'
					fill='#5865f2'
					color='#5865f2'
					style={{ height: '100%', width: '100%' }}
				/>
			</div>
		</div>
	);
};

