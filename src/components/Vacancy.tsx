import { Vacancy } from '@src/typings/Vacancy';
import { Notification } from '@utilities/Notification';
import { IoShareOutline } from 'react-icons/io5';
import { useCopyToClipboard } from 'react-use';

const ArrangementDefinitions: Record<string, string> = {
	'In-Office': 'In-Office',
	Remote: 'Fully remote',
	Hybrid: 'Hybrid (some in-office days)',
	Flexible: 'Flexible (no required in-office days)',
};

export default ({ vacancy, id }: { vacancy: Vacancy; id: number }) => {
	const [state, copyToClipboard] = useCopyToClipboard();

	return (
		<div
			id={String(id)}
			style={{
				borderTopColor: '#5865f2',
				borderTopStyle: 'solid',
				borderTopWidth: '2px',
				padding: '1rem',
				display: 'flex',
			}}>
			<div style={{ flex: '3.5' }}>
				<a
					style={{
						padding: '0',
						margin: '0',
						fontWeight: '600',
						fontSize: 'clamp(1.0625rem,1.0625rem + .0625 * (100vw - 480px) / 1440 * 16,1.125rem)',
						cursor: 'pointer',
						color: '#5865f2',
						userSelect: 'none',
					}}
					href={`${window.location.origin}/careers/jobs/${id}`}>
					{vacancy.Title} —{' '}
					<span
						style={{
							padding: '0',
							margin: '0',
							fontSize: 'clamp(.9375rem,.9375rem + .0625 * (100vw - 480px) / 1440 * 16,1rem)',
							color: '#454fbf',
							fontFamily: 'monospace',
						}}>
						£
						{Intl.NumberFormat('en-US', {
							notation: 'compact',
							maximumFractionDigits: 1,
						}).format(vacancy.Salary)}
					</span>
				</a>
				<p
					style={{
						width: '100%',
						padding: '0',
						margin: '0',
						marginTop: '0.6rem',
						fontSize: 'clamp(.9375rem,.9375rem + .0625 * (100vw - 480px) / 1440 * 16,1rem)',
						color: '#000000',
						fontFamily: 'GG Sans',
						fontWeight: '500',
					}}>{`${vacancy.Type}, ${ArrangementDefinitions[vacancy.Arrangement]} — ${vacancy.Tags?.join(', ')}`}</p>
			</div>
			<div
				style={{
					flex: '0.5',
					textAlign: 'center',
					justifyContent: 'center',
					alignItems: 'center',
					alignContent: 'center',
					justifyItems: 'center',
					display: 'flex',
				}}>
				<div
					style={{
						width: '17px',
						height: '17px',
						borderRadius: '0.2rem',
						border: '#454fbf solid 2px',
						color: '#454fbf',
						padding: '7px',
						cursor: 'pointer',
					}}
					onClick={() => {
						copyToClipboard(`${window.location.origin}/careers/jobs/${id}`);

						if (state.error)
							return new Notification({
								message: 'Error: Could not copy Job page to clipboard.',
							});

						return new Notification({
							message: 'Copied Job share link to clipboard!',
						});
					}}>
					<IoShareOutline
						style={{
							height: '100%',
							width: '100%',
						}}
					/>
				</div>
			</div>
		</div>
	);
};
