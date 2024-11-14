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
			};
		});

	return Staff.map((StaffMember) => (
		<div
			style={{
				height: '200px',
				width: '100px',
				backgroundColor: '#5865f2',
				borderRadius: '20px',
			}}>
			<h1>{StaffMember.Name}</h1>
		</div>
	));
};

