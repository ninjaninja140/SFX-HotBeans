import React from 'react';

interface Props {
	children: React.ReactNode;
	title: string;
}

export default (props: Props) => {
	return (
		<div
			id={props.title
				.toLowerCase()
				.replace(/[^\w ]/g, '')
				.replace(/\ /g, '-')}
			style={{
				height: 'auto',
				justifyContent: 'center',
				alignItems: 'center',
				justifyItems: 'center',
				alignContent: 'center',
				textAlign: 'center',
				paddingLeft: '15%',
				paddingRight: '15%',
				margin: '0 auto',
				marginTop: '10px',
				marginBottom: '40px',
				width: 'calc(100% - 30%)',
			}}>
			<div
				style={{
					height: 'auto',
					width: '100%',
					backgroundColor: '#5865f2',
					borderRadius: '20px',
					color: 'white',
					alignContent: 'left',
					alignItems: 'left',
					textAlign: 'left',
					justifyContent: 'left',
					padding: '20px 25px',
				}}>
				<h1
					style={{
						color: 'white',
						fontSize: '35px',
						marginTop: '20px',
						marginBottom: '20px',
					}}>
					{props.title}
				</h1>
				<p style={{ fontSize: '16px' }}>{props.children}</p>
			</div>
		</div>
	);
};
