import Workers from '@configuration/Workers.json';

function importAll(r: __WebpackModuleApi.RequireContext): string[] {
	return Array.from(new Map((r.keys().map(r) as string[]).map((path) => [path.split('/').pop(), path])).values());
}

const images: string[] = importAll(require.context('@content/Workers', false, /\.(png|jpe?g|gif)$/));

function GetImage(Name: string) {
	if (!Workers.find((Worker) => Worker.name === Name)) return undefined;
	const Image = images.find((Image) => Image.startsWith(`/static/media/${Name}`));

	if (Image) return Image;
	else return images.find((Image) => Image.startsWith(`/static/media/Empty`));
}

function GetEmployees() {
	return Workers.map((Worker) => {
		return {
			Name: Worker?.name + ' ' + Worker?.surname,
			Description: Worker?.About,
			Image: GetImage(Worker.name),
			Title: Worker?.title,
		};
	});
}

export default () => {
	const Staff = GetEmployees();

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
				paddingLeft: '10%',
				paddingRight: '10%',
				gridTemplateColumns: 'repeat(3, minmax(auto, 1fr))',
				margin: '0 auto',
				marginTop: '10px',
				marginBottom: '140px',
				gap: '20px 20px',
				width: 'calc(100% - 20%)',
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
						maxWidth: '450px',
						minWidth: '250px',
						minHeight: '400px',
					}}>
					<div
						style={{
							width: '30%',
							margin: '0 auto',
							height: '25px',
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
					<i style={{ fontSize: '14px' }}>{StaffMember.Title}</i>
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
								height: '120px',
								width: '120px',
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

