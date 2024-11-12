import Link from '@components/Text/Link';
import Links from '@configuration/Footer.json';
import KeyLinks from '@configuration/FooterKey.json';
import Socials from '@configuration/FooterSocials.json';
import React from 'react';
import { IconType } from 'react-icons';
import { BiLogoGmail } from 'react-icons/bi';
import { IoGlobeOutline, IoLogoDocker, IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoNpm } from 'react-icons/io5';
import { PiCoffeeBeanFill, PiXLogo } from 'react-icons/pi';
import { getDomainWithoutSuffix } from 'tldts';

interface HeaderProps {
	title: string;
	href: string;
	target?: string;
}

interface FooterLink {
	label: string;
	href: string;
	target?: string;
}

interface FooterProps {
	title: string;
	content: Array<FooterLink>;
}

const Definitions: Record<string, IconType> = {
	'icon-twitter': PiXLogo,
	'icon-mailto': BiLogoGmail,
	'icon-linkedin': IoLogoLinkedin,
	'icon-x': PiXLogo,
	'icon-facebook': IoLogoFacebook,
	'icon-github': IoLogoGithub,
	'icon-docker': IoLogoDocker,
	'icon-npmjs': IoLogoNpm,
	'icon-default': IoGlobeOutline,
};

export default () => {
	return (
		<footer
			style={{
				width: '80%',
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
						padding: '5%',
						paddingTop: '10%',
						paddingBottom: '10%',
						paddingLeft: '10%',
						justifyContent: 'flex-end',
						alignItems: 'center',
						justifyItems: 'center',
						flexDirection: 'column',
						alignSelf: 'center',
						textAlign: 'left',
						display: 'flex',
					}}>
					<div
						style={{
							flex: '1',
							padding: '25%',
							paddingBottom: '5%',
							justifyContent: 'flex-end',
							alignItems: 'center',
							justifyItems: 'center',
							flexDirection: 'row',
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
								paddingLeft: '5%',
								justifyContent: 'flex-start',
								alignItems: 'flex-start',
								justifyItems: 'left',
								alignSelf: 'left',
								textAlign: 'left',
								height: '100%',
							}}>
							<a
								href='/'
								style={{
									display: 'flex',
									alignItems: 'center',
									whiteSpace: 'nowrap',
									marginBottom: '3%',
								}}>
								<PiCoffeeBeanFill
									style={{
										height: '40px',
										width: '40px',
									}}
									fill='#ffffff'
								/>
								<span
									style={{
										marginLeft: '5%',
										fontFamily: 'FF Neuwelt',
										textDecoration: 'none',
										fontWeight: '700',
										fontSize: '100%',
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
							flex: '1',
							marginTop: '0',
							paddingTop: '0',
							paddingLeft: '25%',
							marginLeft: '0',
							width: '100%',
							height: '100%',
							justifyContent: 'flex-start',
							alignItems: 'left',
							display: 'flex',
							flexDirection: 'row',
							gap: '13px',
							color: '#ffffff',
							alignSelf: 'left',
						}}>
						{(Socials as Array<string>).map((link: string) => {
							const Starter = link.split(':')[0];
							const Style: React.CSSProperties = {
								width: '30px',
								height: '30px',
								cursor: 'pointer',
							};
							const Function = () => window.open(link, '_blank');

							if (Starter === 'mailto') {
								const Icn = Definitions['icon-mailto'];
								return <Icn style={Style} onClick={Function} />;
							}

							const domain = getDomainWithoutSuffix(link);
							const Default = Definitions['icon-default'];

							if (!domain) return;
							<Default style={Style} onClick={Function} />;

							const Icon = Definitions[`icon-${domain}`];

							if (Icon) return <Icon style={Style} onClick={Function} />;
							else return <Default style={Style} onClick={Function} />;
						})}
					</div>
				</div>
				<div
					style={{
						flex: '2',
						padding: '5%',
						paddingTop: '100px',
						paddingBottom: '100px',
						paddingRight: '100px',
						paddingLeft: '25px',
						justifyContent: 'flex-start',
						alignItems: 'left',
						justifyItems: 'left',
						alignSelf: 'left',
						textAlign: 'left',
						fontFamily: 'GG Sans',
						display: 'flex',
						whiteSpace: 'nowrap',
					}}>
					{(Links as Array<FooterProps>).map((FooterProps, index: number) => (
						<div
							style={{
								marginRight: '2%',
								color: '#ffffff',
								flex: '1',
								justifyContent: 'flex-start',
								alignItems: 'left',
								justifyItems: 'left',
								alignSelf: 'left',
								textAlign: 'left',
							}}
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
										<Link
											href={FooterLink.href}
											key={index}>
											{FooterLink.label}
										</Link>
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
					whiteSpace: 'nowrap',
					textAlign: 'center',
				}}>
				<span
					style={{
						display: 'flex',
						alignItems: 'center',
						marginRight: '3%',
					}}>
					<a href='https://bracketed.co.uk' style={{ marginRight: '6%' }}>
						<b
							style={{
								fontSize: '17px',
								fontFamily: 'FF Neuwelt',
								display: 'inline-flex',
								alignItems: 'center',
							}}>
							[ / ]
						</b>
					</a>
					© {new Date().getFullYear()} Eden Kneale WebDesigns.
				</span>
				{(KeyLinks as Array<HeaderProps>).map((LinkProperties: HeaderProps, index: number) => (
					<Link
						href={LinkProperties.href}
						key={index}
						style={{
							textAlign: 'center',
							marginRight: '3%',
							display: 'inline-block',
						}}>
						{LinkProperties.title}
					</Link>
				))}
			</div>
		</footer>
	);
};

