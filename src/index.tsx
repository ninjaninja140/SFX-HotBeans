import '@css/application.css';
import Router from '@src/Router';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import Footer from '@components/Footer';
import Header from '@components/Header';
import Head from '@components/Meta/Head';

const Application = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div style={{ paddingTop: isScrolled ? '63px' : '83px' }}>
			<Router />
		</div>
	);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Head />
		<Header />
		<Application />
		<Footer />
	</React.StrictMode>
);

