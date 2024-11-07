import Link from '@components/Text/Link';
import Links from '@configuration/Header.json';
import { useEffect, useState } from 'react';
import { IoPricetag } from 'react-icons/io5';
import { PiCoffeeBeanFill } from 'react-icons/pi';

interface HeaderProps {
	title: string;
	href: string;
	target?: string;
}

export default () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		setIsScrolled(window.scrollY > 50);

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
				transition: 'all 0.3s cubic-bezier(0.76, 0, 0.24, 1)',
			}}>
			<div
				style={{
					transition: 'all 0.3s cubic-bezier(0.76, 0, 0.24, 1)',
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

							transition: 'all 0.3s cubic-bezier(0.76, 0, 0.24, 1)',
						}}
						fill='#ffffff'
					/>
					{isScrolled ? undefined : (
						<span
							style={{
								marginLeft: '12px',
								fontFamily: 'FF Neuwelt',
								textDecoration: 'none',
								fontWeight: '700',
								fontSize: '18px',
								color: '#ffffff',
								transition: 'all 0.3s cubic-bezier(0.76, 0, 0.24, 1)',
								opacity: isScrolled ? '0' : '1',
							}}>
							HotBeans WebDev
						</span>
					)}
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
					{(Links as Array<HeaderProps>).map(
						(LinkProperties: HeaderProps, index: number) => (
							<Link
								href={LinkProperties.href}
								key={index}
								style={{
									textAlign: 'center',
									marginRight: '25px',
									display: 'inline-block',
									fontWeight: '600',
									color: '#ffffff',
								}}>
								{LinkProperties.title}
							</Link>
						)
					)}
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
					<button>
						{isScrolled ? (
							<IoPricetag style={{ height: '100%', width: '100%' }} />
						) : (
							'Get a Quote'
						)}
					</button>
				</div>
			</div>
		</header>
	);
};

