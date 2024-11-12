import { IoIdCardOutline } from 'react-icons/io5';

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
					justifyContent: 'flex-end',
					alignItems: 'center',
					justifyItems: 'center',
					alignSelf: 'center',
					textAlign: 'left',
				}}>
				<h1>Our Developers at HotBeans</h1>
				<p>
					Here at HotBeans, we take on many professional website designers, developers and
					design & development advisors to make sure our clients can work alongside us to
					produce an efficient, smart and high-quality website.
					<br />
					We employ people from all backgrounds, ethnically and skill based, we do not
					believe that qualifications defines the skill of an employee, and that's our
					special trick behind how our website usually end up the best.
				</p>
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

