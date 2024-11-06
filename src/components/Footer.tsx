import KeyLinks from '@configuration/FooterKey.json';
import LinkedContent from './Links/LinkedContent';

interface HeaderProps {
	title: string;
	href?: string;
	target?: string;
}

const FooterKeyLinks: Array<HeaderProps> = KeyLinks;

const KeyFooterLinks = () => {
	return FooterKeyLinks.map((Link: HeaderProps, index: number) => {
		if (Link.href)
			if (!Link.href.startsWith('/'))
				return (
					<a
						href={Link.href}
						key={index}
						style={{
							textAlign: 'center',
							marginRight: '25px',
							display: 'inline-block',
						}}
						rel='noreferrer'
						target='_blank'>
						{Link.title}
						<LinkedContent />
					</a>
				);
			else
				return (
					<a
						href={Link.href}
						key={index}
						style={{
							textAlign: 'center',
							marginRight: '25px',
							display: 'inline-block',
						}}
						rel='noreferrer'
						target='_blank'>
						{Link.title}
					</a>
				);
	});
};

export default () => {
	return (
		<footer
			style={{
				width: '70%',
				backgroundColor: '#5865f2',
				borderRadius: '8px',
				margin: '0 auto',
				left: '0',
				right: '0',
				color: 'white',
			}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<div
					style={{
						flex: '1',
						padding: '50px',
						paddingLeft: '100px',
						justifyContent: 'flex-end',
						alignItems: 'center',
						justifyItems: 'center',
						alignSelf: 'center',
						textAlign: 'left',
					}}>
					<button>Get a Quote</button>
					<button>Contact Us</button>
				</div>
				<div
					style={{
						flex: '4',
						padding: '50px',
						paddingRight: '100px',
						justifyContent: 'flex-start',
						alignItems: 'center',
						justifyItems: 'center',
						alignSelf: 'center',
						textAlign: 'left',
					}}></div>
			</div>
			<div
				style={{
					backgroundColor: '#363e98',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderBottomLeftRadius: '8px',
					borderBottomRightRadius: '8px',
					padding: '20px',
					margin: 'auto',
					fontFamily: 'SegoeUI',
					textDecoration: 'none',
					fontSize: '12px',
					textAlign: 'center',
				}}>
				<span
					style={{
						display: 'flex',
						alignItems: 'center',
						marginRight: '25px',
					}}>
					<b
						style={{
							fontSize: '17px',
							fontFamily: 'FF Neuwelt',
							marginRight: '5px',
							display: 'inline-flex',
							alignItems: 'center',
						}}>
						[ / ]
					</b>{' '}
					© 2024 Eden Kneale WebDesigns & Partners.
				</span>
				<KeyFooterLinks />
			</div>
		</footer>
	);
};
