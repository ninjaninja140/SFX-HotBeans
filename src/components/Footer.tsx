export default () => {
	//padding: '40px',
	//paddingLeft: '200px',
	//paddingRight: '200px',
	return (
		<footer
			style={{
				width: 'calc(100% - 16px)',
				backgroundColor: '#5865f2',
				maxWidth: 'calc(100% - 16px)',
				borderRadius: '8px',
				display: 'flex',
				margin: '0 auto',
				left: '0',
				right: '0',
				justifyContent: 'space-between',
				alignItems: 'center',
				color: 'white',
			}}>
			<div
				style={{
					flex: '1',
					paddingLeft: '300px',
					justifyContent: 'flex-end',
					alignItems: 'center',
					justifyItems: 'center',
					alignSelf: 'center',
					textAlign: 'left',
				}}></div>
			<div
				style={{
					flex: '1',
					justifyContent: 'center',
					alignItems: 'center',
					justifyItems: 'center',
					alignSelf: 'center',
					textAlign: 'left',
				}}></div>
			<div
				style={{
					flex: '1',
					paddingRight: '300px',
					justifyContent: 'flex-end',
					alignItems: 'center',
					justifyItems: 'center',
					alignSelf: 'right',
					textAlign: 'left',
				}}></div>
		</footer>
	);
};

