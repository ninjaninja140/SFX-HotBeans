export default () => {
	return (
		<div style={{ height: '60vh', display: 'flex' }}>
			<div
				style={{
					display: 'flex',
					flex: '1',
					justifyContent: 'flex-end',
					alignItems: 'right',
					textAlign: 'left',
				}}></div>
			<div
				style={{
					display: 'flex',
					flex: '1',
					justifyContent: 'flex-start',
					alignItems: 'left',
					textAlign: 'left',
				}}></div>
		</div>
	);
};
