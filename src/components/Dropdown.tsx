import '@css/dropdown.css';
import { IoAddCircleOutline } from 'react-icons/io5';

interface HeaderLink {
	label: string;
	href: string;
	target?: string;
}

export default ({ content, label }: { content: Array<HeaderLink>; label: string }) => {
	return (
		<nav>
			<ul className='menu'>
				<li className='dropdown'>
					<a style={{ color: '#1C092D', display: 'flex', alignItems: 'center' }}>
						<span>{label}</span>
						<IoAddCircleOutline
							className='spin-icon'
							color='#1C092D'
							style={{ height: '22px', width: '22px', marginLeft: '6px' }}
						/>
					</a>
					<ul className='dropdown-menu' style={{ zIndex: '31' }}>
						{content.map((item, index: number) => (
							<li key={index}>
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</nav>
	);
};

