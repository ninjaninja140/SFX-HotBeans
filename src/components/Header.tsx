import LinkedContent from '@components/Links/LinkedContent';
import Links from '@configuration/Header.json';
import { useEffect, useState } from 'react';
import { PiCoffeeBeanFill } from 'react-icons/pi';

interface HeaderProps {
	title: string;
	href?: string;
	target?: string;
}

const NavigationLinks: Array<HeaderProps> = Links;

const HeaderLinks = () => {
	return NavigationLinks.map((Link: HeaderProps, index: number) => {
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
	});
};

export default () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			style={{
				zIndex: '30',
				width: isScrolled ? '70%' : 'calc(100% - 16px)',
				height: isScrolled ? '55px' : '75px',
				maxWidth: 'calc(100% - 16px)',
				position: 'fixed',
				display: 'flex',
				margin: '0 auto',
				left: '0',
				right: '0',
				justifyContent: 'space-between',
				alignItems: 'center',
				color: 'white',
				backgroundColor: '#5865F2',
				borderRadius: '8px',
				transition: 'all 0.3s ease-in-out',
			}}>
			<div
				style={{
					paddingLeft: isScrolled ? '1%' : '8%',
					flex: '1',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
					textAlign: 'left',
				}}>
				<a href='/' style={{ display: 'flex', alignItems: 'center' }}>
					<PiCoffeeBeanFill
						style={{
							height: isScrolled ? '35px' : '40px',
							width: isScrolled ? '35px' : '40px',
							transition: 'all 0.3s ease-in-out',
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
			</div>
			<div
				style={{
					flex: '1',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
				}}>
				<div
					style={{
						display: 'flex',
						textAlign: 'center',
						whiteSpace: 'nowrap',
						alignItems: 'center',
					}}>
					<HeaderLinks />
				</div>
			</div>
			<div
				style={{
					flex: '1',
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'right',
					textAlign: 'left',
					paddingRight: isScrolled ? '1%' : '8%',
				}}>
				<div
					style={{
						display: 'flex',
						textAlign: 'right',
						whiteSpace: 'nowrap',
						alignItems: 'right',
					}}>
					<button>Get a Quote</button>
				</div>
			</div>
		</header>
	);
};
