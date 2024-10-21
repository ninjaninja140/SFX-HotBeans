import Dropdown from '@components/Dropdown';
import LinkedContent from '@components/Links/LinkedContent';
import Links from '@configuration/Header.json';
import { CSSProperties } from 'react';
import { BiSolidCoffeeBean } from 'react-icons/bi';

interface HeaderLink {
	label: string;
	href: string;
	target?: string;
}

interface HeaderProps {
	title: string;
	content?: Array<HeaderLink>;
	href?: string;
	target?: string;
}

const NavigationLinks: Array<HeaderProps> = Links;

export default () => {
	const sectionStyle: CSSProperties = {
		flex: '1',
		display: 'flex',
		justifyContent: 'left',
		marginRight: '10px',
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
					backgroundColor: 'white',
					borderBottomColor: '#1C092D',
					borderBottomWidth: '3px',
					borderBottomStyle: 'solid',
				}}>
				<div
					style={{
						...sectionStyle,
						alignItems: 'center',
						textAlign: 'left',
						justifyContent: 'flex-start',
						paddingLeft: '27px',
					}}>
					<a href='/'>
						<BiSolidCoffeeBean
							style={{ height: '50px', width: '50px' }}
							fill='#492A13'
						/>
					</a>
					<a href='/' style={{ marginLeft: '20px' }}>
						HotBeans WebDev
					</a>
					<div
						style={{
							marginLeft: '27px',
							display: 'flex',
							textAlign: 'left',
							whiteSpace: 'nowrap',
							alignItems: 'center',
						}}>
						{NavigationLinks.map((Link: HeaderProps, index: number) => {
							if (Link.href)
								if (Link.href.startsWith('http')) {
									return (
										<a
											href={Link.href}
											key={index}
											style={{
												textAlign: 'center',
												marginLeft: '25px',
												display: 'inline-block',
												fontWeight: '600',
												color: '#1c092d',
											}}
											rel='noreferrer'
											target='_blank'>
											{Link.title}
											<LinkedContent />
										</a>
									);
								} else {
									return (
										<a
											href={Link.href}
											key={index}
											style={{
												textAlign: 'center',
												marginLeft: '25px',
												display: 'inline-block',
												fontWeight: '600',
												color: '#1c092d',
											}}
											rel='noreferrer'
											target='_blank'>
											{Link.title}
										</a>
									);
								}

							if (Link.content && !Link.href)
								return (
									<Dropdown
										content={Link.content}
										label={Link.title}
									/>
								);
						})}
					</div>
				</div>
			</header>
		</>
	);
};

