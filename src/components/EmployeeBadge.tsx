import Workers from '@configuration/Workers.json';

function importAll(r: __WebpackModuleApi.RequireContext): string[] {
	return Array.from(new Map((r.keys().map(r) as string[]).map((path) => [path.split('/').pop(), path])).values());
}

const images: string[] = importAll(require.context('@content/Workers', false, /\.(png|jpe?g)$/));

export default () => {
	const Staff = images
		.filter((image) => Workers.find((Worker) => image.startsWith(`/static/media/${Worker.name}`)))
		.map((Image) => {
			const WorkerDetails = Workers.find((Worker) =>
				Image.startsWith(`/static/media/${Worker.name}`)
			);
			return {
				Name: WorkerDetails?.name + ' ' + WorkerDetails?.surname,
				Description: WorkerDetails?.About,
				Image: Image,
				Title: WorkerDetails?.title,
			};
		});

	return (
		<div
			style={{
				height: 'auto',
				display: 'grid',
				gridAutoFlow: 'dense',
				gridTemplateRows: 'auto',
				justifyContent: 'center',
				alignItems: 'center',
				justifyItems: 'center',
				alignContent: 'center',
				textAlign: 'center',
				paddingLeft: '15%',
				paddingRight: '15%',
				gridTemplateColumns: 'repeat(4, minmax(auto, 1fr))',
				margin: '0 auto',
				marginTop: '10px',
				marginBottom: '140px',
				gap: '25px',
				width: 'calc(100% - 30%)',
			}}>
			{Staff.map((StaffMember) => (
				<div
					style={{
						height: 'auto',
						width: 'auto',
						backgroundColor: '#5865f2',
						borderRadius: '20px',
						color: 'white',
						alignContent: 'left',
						alignItems: 'left',
						textAlign: 'left',
						justifyContent: 'left',
						padding: '20px 25px',
						minWidth: '280px',
						maxWidth: '280px',
						minHeight: '420px',
					}}>
					<div
						style={{
							width: '40%',
							margin: '0 auto',
							height: '20px',
							backgroundColor: 'white',
							borderRadius: '9999px',
						}}></div>
					<h1
						style={{
							color: 'white',
							fontSize: '35px',
							marginTop: '40px',
							marginBottom: '0',
						}}>
						{StaffMember.Name}
					</h1>
					<i style={{ fontSize: '15px' }}>{StaffMember.Title}</i>
					<p style={{ fontSize: '16px' }}>{StaffMember.Description}</p>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							flexDirection: 'column',
						}}>
						<img
							src={StaffMember.Image}
							alt={StaffMember.Name}
							style={{
								borderRadius: '100%',
								height: '100px',
								width: '100px',
								objectFit: 'cover',
								alignSelf: 'flex-end',
								marginTop: 'auto',
							}}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

