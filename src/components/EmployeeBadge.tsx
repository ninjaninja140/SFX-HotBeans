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
				gridAutoFlow: 'column',
				gridTemplateRows: 'auto auto',
				gridTemplateColumns: 'repeat(3, 330px)',
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
						margin: '5px 5px',
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
					<i style={{ fontSize: '15px' }}>{StaffMember.Title} at HotBeans WebDev</i>
					<p style={{ fontSize: '16px' }}>{StaffMember.Description}</p>
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<img
							src={StaffMember.Image}
							alt={StaffMember.Name}
							style={{
								borderRadius: '100%',
								height: '100px',
								width: '100px',
								objectFit: 'cover',
							}}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

