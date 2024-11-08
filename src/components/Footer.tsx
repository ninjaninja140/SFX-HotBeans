import Link from '@components/Text/Link';
import Links from '@configuration/Footer.json';
import KeyLinks from '@configuration/FooterKey.json';
import Socials from '@configuration/FooterSocials.json';
import {
	IoGlobeOutline,
	IoLogoDocker,
	IoLogoFacebook,
	IoLogoGithub,
	IoLogoLinkedin,
	IoLogoNpm,
	IoLogoTwitter,
	IoMail,
} from 'react-icons/io5';
import { PiCoffeeBeanFill } from 'react-icons/pi';
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
						paddingTop: '100px',
						paddingBottom: '100px',
						paddingLeft: '100px',
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
							padding: '50px',
							paddingLeft: '50px',
							paddingBottom: '20px',
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
								paddingLeft: '20px',
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
									marginBottom: '5px',
								}}>
								<PiCoffeeBeanFill
									style={{
										height: '30px',
										width: '30px',
									}}
									fill='#ffffff'
								/>
								<span
									style={{
										marginLeft: '12px',
										fontFamily: 'FF Neuwelt',
										textDecoration: 'none',
										fontWeight: '700',
										fontSize: '17px',
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
							paddingLeft: '50px',
							justifyContent: 'flex-start',
							alignItems: 'left',
							display: 'flex',
							flexDirection: 'row',
							alignSelf: 'left',
						}}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-evenly',
								alignItems: 'left',
								backgroundColor: '#ffffff',
								borderRadius: '9999px',
								padding: '5px 15px',
								gap: '13px',
								color: '#5865f2',
							}}>
							{(Socials as Array<string>).map((link: string) => {
								const Starter = link.split(':')[0];

								switch (Starter) {
									case 'mailto':
										return (
											<IoMail
												style={{
													width: '35px',
													height: '35px',
													cursor: 'pointer',
												}}
												onClick={() =>
													window.open(
														link,
														'_blank'
													)
												}
											/>
										);
									default:
										const domain =
											getDomainWithoutSuffix(link);

										switch (domain) {
											case 'twitter':
												return (
													<IoLogoTwitter
														style={{
															width: '35px',
															height: '35px',
															cursor: 'pointer',
														}}
														onClick={() =>
															window.open(
																link,
																'_blank'
															)
														}
													/>
												);
											case 'linkedin':
												return (
													<IoLogoLinkedin
														style={{
															width: '35px',
															height: '35px',
															cursor: 'pointer',
														}}
														onClick={() =>
															window.open(
																link,
																'_blank'
															)
														}
													/>
												);
											case 'x':
												return (
													<IoLogoTwitter
														style={{
															width: '35px',
															height: '35px',
															cursor: 'pointer',
														}}
														onClick={() =>
															window.open(
																link,
																'_blank'
															)
														}
													/>
												);
											case 'facebook':
												return (
													<IoLogoFacebook
														style={{
															width: '35px',
															height: '35px',
															cursor: 'pointer',
														}}
														onClick={() =>
															window.open(
																link,
																'_blank'
															)
														}
													/>
												);
											case 'github':
												return (
													<IoLogoGithub
														style={{
															width: '35px',
															height: '35px',
															cursor: 'pointer',
														}}
														onClick={() =>
															window.open(
																link,
																'_blank'
															)
														}
													/>
												);
											case 'docker':
												return (
													<IoLogoDocker
														style={{
															width: '35px',
															height: '35px',
															cursor: 'pointer',
														}}
														onClick={() =>
															window.open(
																link,
																'_blank'
															)
														}
													/>
												);
											case 'npmjs':
												return (
													<IoLogoNpm
														style={{
															width: '35px',
															height: '35px',
															cursor: 'pointer',
														}}
														onClick={() =>
															window.open(
																link,
																'_blank'
															)
														}
													/>
												);
											default:
												return (
													<IoGlobeOutline
														style={{
															width: '35px',
															height: '35px',
															cursor: 'pointer',
														}}
														onClick={() =>
															window.open(
																link,
																'_blank'
															)
														}
													/>
												);
										}
								}
							})}
						</div>
					</div>
				</div>
				<div
					style={{
						flex: '2',
						padding: '50px',
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
