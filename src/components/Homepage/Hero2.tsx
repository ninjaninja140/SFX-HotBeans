import { IoCardSharp } from 'react-icons/io5';

export default () => {
	const defaults: React.CSSProperties = {
		flex: '1',
	};

	return (
		<div style={{ height: `70vh`, display: 'flex' }}>
			<div
				style={{
					...defaults,
					paddingLeft: '15%',
					justifyContent: 'flex-end',
					alignItems: 'center',
					justifyItems: 'center',
					textAlign: 'left',
				}}>
				<IoCardSharp
					className='icon-3d-left'
					fill='#5865f2'
					style={{ height: '100%', width: '100%' }}
				/>
			</div>
			<div
				style={{
					...defaults,
					paddingRight: '15%',
					paddingLeft: '15%',
					justifyContent: 'flex-start',
					alignItems: 'left',
					alignSelf: 'center',
					textAlign: 'left',
				}}>
				<h1>We're Fair...</h1>
				<p>
					Working with us at HotBeans, we won't make you overpay any more then what price
					can be agreed on. Pricing here at HotBeans is bespoke, based on the components,
					design, developers and the functionality. We will not make you overpay, even by
					a penny. When working with HotBeans, you pay exactly how much you need to pay,
					no absurd fees, no crazy VAT, no monthly costs*, the way you pay is one payment,
					all in one go and for exactly how much you want.
				</p>
				<i>*Monthly billing only applicable to clients with hosting plans.</i>
			</div>
		</div>
	);
};
