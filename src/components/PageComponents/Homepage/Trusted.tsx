import { FaHandshakeSimple } from 'react-icons/fa6';

export default () => {
	const defaults: React.CSSProperties = {
		flex: '1',
	};

	return (
		<div style={{ minHeight: '70vh', display: 'flex', margin: '5% auto' }}>
			<div
				style={{
					...defaults,
					paddingLeft: '15%',
					justifyContent: 'flex-end',
					alignItems: 'center',
					justifyItems: 'center',
					textAlign: 'left',
				}}>
				<FaHandshakeSimple
					className='icon-3d-left'
					fill='#5865f2'
					style={{ height: '100%', width: '100%' }}
				/>
			</div>
			<div
				style={{
					...defaults,
					flex: '2.5',
					paddingRight: '10%',
					paddingLeft: '15%',
					justifyContent: 'flex-start',
					alignItems: 'left',
					alignSelf: 'center',
					textAlign: 'left',
				}}>
				<h1>We're trustworthy...</h1>
				<p>
					In our past, HotBeans Website Developers have collaborated with many mainstream
					media, platforms and devops companies to develop and design spectacular
					websites. Recently working with Docker in recent times designing their new
					website has boosted our companies trust levels, bringing in many large names,
					such as, Roblox, Discord and many other big names in media.
					<br />
					<br />
					Being as trustworthy as possible at HotBeans is a priority in our team, we aim
					to keep communication between our designers, advisors and developers with you as
					transparent as possible so the worry of having details kept from you like hidden
					charges and cut corners is removed.
				</p>
			</div>
		</div>
	);
};

