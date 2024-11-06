import { ExternalLink, TargetLink } from '@components/Links/Link';
import LinkedContent from '@components/Links/LinkedContent';
import Links from '@configuration/Footer.json';
import KeyLinks from '@configuration/FooterKey.json';
import { PiCoffeeBeanFill } from 'react-icons/pi';

interface HeaderProps {
	title: string;
	href?: string;
	target?: string;
}

const FooterKeyLinks: Array<HeaderProps> = KeyLinks;

interface FooterLink {
	label: string;
	href: string;
	target?: string;
}

interface FooterProps {
	title: string;
	content: Array<FooterLink>;
}

const NavigationLinks: Array<FooterProps> = Links;

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
						display: 'flex',
					}}>
					<div
						style={{
							flex: '1',
							justifyContent: 'flex-start',
							alignItems: 'center',
							justifyItems: 'center',
							alignSelf: 'center',
							textAlign: 'left',
						}}>
						<button style={{ width: '100%' }}>Get a Quote</button>
						<button style={{ width: '100%' }}>Contact Us</button>
					</div>
					<div
						style={{
							flex: '3',
							display: 'flex',
							flexDirection: 'column',
							paddingLeft: '30px',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
							justifyItems: 'left',
							alignSelf: 'left',
							textAlign: 'left',
							height: '100%',
						}}>
						<a href='/' style={{ display: 'flex', alignItems: 'center' }}>
							<PiCoffeeBeanFill
								style={{
									height: '40px',
									width: '40px',
								}}
								fill='#ffffff'
							/>
							<span
								style={{
									marginLeft: '12px',
									fontFamily: 'FF Neuwelt',
									textDecoration: 'none',
									fontWeight: '700',
									fontSize: '18px',
									color: '#ffffff',
								}}>
								HotBeans WebDev
							</span>
						</a>
						<i style={{ fontSize: '100%' }}>
							Professional Web Developers, at your arsenal!
						</i>
					</div>
				</div>
				<div
					style={{
						flex: '1.5',
						padding: '50px',
						paddingRight: '100px',
						justifyContent: 'flex-start',
						alignItems: 'center',
						justifyItems: 'center',
						alignSelf: 'center',
						textAlign: 'left',
						fontFamily: 'GG Sans',
						display: 'flex',
					}}>
					{NavigationLinks.map((FooterProps, index: number) => (
						<div
							style={{ marginRight: '2%', color: '#ffffff', flex: '1' }}
							key={index}>
							<span style={{ fontWeight: '500' }}>{FooterProps.title}</span>
							<ul
								style={{
									marginTop: '40px',
									listStyleType: 'none',
									margin: '0',
									padding: '0',
									paddingTop: '20px',
								}}>
								{FooterProps.content.map((FooterLink, index) => (
									<li key={index} style={{ marginBottom: '8px' }}>
										<ExternalLink
											label={FooterLink.label}
											href={FooterLink.href}
											target={
												(FooterLink.target as TargetLink) ??
												TargetLink.SELF
											}
											key={index}
										/>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div
				style={{
					backgroundColor: '#434dbe',
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
							marginRight: '25px',
							display: 'inline-flex',
							alignItems: 'center',
						}}>
						[ / ]
					</b>
					Copyright © {new Date().getFullYear()} Eden Kneale WebDesigns and Partners.
				</span>
				<KeyFooterLinks />
			</div>
		</footer>
	);
};
