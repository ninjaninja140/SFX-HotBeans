import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import Checkbox from './Checkbox';

export default ({
	title,
	array,
	onSelection = () => {},
}: {
	title: string;
	array: Array<string>;
	onSelection?: (selected: Array<string>) => void;
}) => {
	const [visible, setVisibility] = useState<boolean>(false);
	const [selected, setSelected] = useState<Array<string>>([]);

	const handleCheckboxChange = (item: string, isChecked: boolean) => {
		let updatedSelected;

		if (isChecked) {
			updatedSelected = [...selected, item];
		} else {
			updatedSelected = selected.filter((v) => v !== item);
		}

		setSelected(updatedSelected);
		onSelection(updatedSelected);
	};

	return (
		<div
			style={{
				width: '100%',
				padding: '1rem',
				backgroundColor: '#5865f2',
				borderRadius: '0.2rem',
			}}>
			<h3
				style={{
					padding: '0',
					margin: '0',
					color: '#ffffff',
					fontWeight: '550',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					cursor: 'pointer',
					fontSize: 'clamp(.9375rem,.9375rem + .1295 * (100vw - 480px) / 1440 * 16,1.067rem)',
				}}
				onClick={() => setVisibility(!visible)}>
				<span>{title}</span>
				<IoChevronDown
					style={{
						height: 'clamp(.9375rem,.9375rem + .1295 * (100vw - 480px) / 1440 * 16,1.067rem)',
						width: 'auto',
						cursor: 'pointer',
						rotate: visible ? '180deg' : 'none',
					}}
				/>
			</h3>
			{visible ? (
				<div
					style={{
						gap: '20px',
						display: 'flex',
						flexDirection: 'column',
						marginTop: '25px',
					}}>
					{array.map((t) => (
						<Checkbox
							value={selected.includes(t)}
							style={{ width: '100%' }}
							textColour='#ffffff'
							idleColour='#454fbf'
							idleBorder='#3c45a5'
							activeColour='#ffffff'
							checkColour='#5865f2'
							textStyle={{
								fontSize: 'clamp(.9375rem,.9375rem + .1295 * (100vw - 480px) / 1440 * 16,1.067rem)',
							}}
							onChange={(checked) => handleCheckboxChange(t, checked)}>
							{t}
						</Checkbox>
					))}
				</div>
			) : undefined}
		</div>
	);
};
