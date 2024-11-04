import LinkedContent from '@components/Links/LinkedContent';
import Links from '@configuration/Header.json';
import { CSSProperties } from 'react';
import { PiCoffeeBeanFill } from 'react-icons/pi';

interface HeaderProps {
	title: string;
	href?: string;
	target?: string;
}

const NavigationLinks: Array<HeaderProps> = Links;

export default () => {
	const sectionStyle: CSSProperties = {
		flex: '1',
		display: 'flex',
		justifyContent: 'left',
	};

	return (
		<>
			<header
				style={{
					zIndex: '30',
					width: '100%',
					position: 'fixed',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					height: '75px',
					color: 'white',
					backgroundColor: '#5865F2',
					borderRadius: '5px',
					paddingLeft: '120px',
					paddingRight: '120px',
				}}>
				<div
					style={{
						...sectionStyle,
						alignItems: 'center',
						textAlign: 'left',
						justifyContent: 'flex-start',
					}}>
					<a href='/'>
						<PiCoffeeBeanFill
							style={{ height: '40px', width: '40px' }}
							fill='#ffffff'
						/>
					</a>
					<a
						href='/'
						style={{
							marginLeft: '12px',
							fontFamily: 'FF Neuwelt',
							textDecoration: 'none',
							fontWeight: '700',
							fontSize: '18px',
							color: '#ffffff',
						}}>
						HotBeans WebDev
					</a>
				</div>
				<div
					style={{
						flex: '1',
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'right',
						textAlign: 'left',
					}}>
					<div
						style={{
							display: 'flex',
							textAlign: 'right',
							whiteSpace: 'nowrap',
							alignItems: 'right',
						}}>
						{NavigationLinks.map((Link: HeaderProps, index: number) => {
							if (Link.href)
								if (Link.href.startsWith('http'))
									return (
										<a
											href={Link.href}
											key={index}
											style={{
												textAlign: 'center',
												marginRight: '25px',
												display: 'inline-block',
												fontWeight: '600',
												color: '#ffffff',
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
												fontWeight: '600',
												color: '#ffffff',
											}}
											rel='noreferrer'
											target='_blank'>
											{Link.title}
										</a>
									);
						})}
					</div>
				</div>
			</header>
		</>
	);
};

