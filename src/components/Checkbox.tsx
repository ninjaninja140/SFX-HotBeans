import { CSSProperties, ReactNode, useState } from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { useEffectOnce } from 'react-use';

interface Params {
	value?: boolean;
	onChange?: (value: boolean) => void;
	style?: CSSProperties;
	children?: ReactNode;
	colour?: string;
	activeColour?: string;
	idleColour?: string;
	textColour?: string;
	textStyle?: CSSProperties;
}

export default ({
	value = false,
	onChange = () => {},
	style = {},
	children,
	activeColour = '#5865f2',
	idleColour = '#ffffff',
	textColour = '#5865f2',
	textStyle = {},
}: Params) => {
	const [background, setColour] = useState<string>('#ffffff');
	const [border, setBorder] = useState<string>('#cccccc');
	const [checkBoxEnabledState, setCheckBoxEnabledState] = useState<number>(0);

	function setColours() {
		if (value === true) {
			setColour(activeColour);
			setBorder(activeColour);
			setCheckBoxEnabledState(1);
		} else {
			setColour(idleColour);
			setBorder('#cccccc');
			setCheckBoxEnabledState(0);
		}
	}

	useEffectOnce(() => setBorder(style.borderColor || (value ? activeColour : '#cccccc')));
	useEffectOnce(() => setColour(idleColour));
	useEffectOnce(() => setColours());

	return (
		<div
			style={{
				cursor: 'pointer',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				alignContent: 'center',
				margin: '0',
				padding: '0',
				...style,
			}}
			onClick={() => {
				value = !value;
				setColours();
				onChange(value);
			}}>
			<div
				style={{
					width: '12px',
					height: '12px',
					borderRadius: '0.2rem',
					backgroundColor: background,
					padding: '2px',
					borderColor: border,
					borderStyle: 'solid',
					borderWidth: '1px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					alignContent: 'center',
					justifyItems: 'center',
					transition: 'background-color 0.3s ease',
					...style,
				}}>
				<IoCheckmarkSharp
					style={{
						opacity: checkBoxEnabledState,
						transition: 'opacity 0.3s ease',
						color: '#ffffff',
						width: '100%',
						height: '100%',
					}}
				/>
			</div>
			{children ? (
				<p
					style={{
						margin: '0',
						padding: '0',
						marginLeft: '10px',
						color: textColour,
						fontWeight: '400',
						pointerEvents: 'none',
						...textStyle,
					}}>
					{children}
				</p>
			) : undefined}
		</div>
	);
};
