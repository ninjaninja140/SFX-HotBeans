import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';

import Footer from '@components/Footer';
import Header from '@components/Header';
import Head from '@components/Meta/Head';
import Loading from '@components/Pages/Loading';
import NotFound from '@components/Pages/NotFound';

import { AppRoutes } from '@src/Router';

import '@css/application.css';
import 'animate.css/animate.min.css';

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
			<AppRoutes loadingPage={<Loading />} notFoundPage={<NotFound />} />
		</div>
	);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HelmetProvider>
			<Head />
			<ToastContainer
				theme='dark'
				newestOnTop={true}
				draggable={true}
				style={{ marginRight: '130px' }}
				stacked
			/>
			<Header />
			<Application />
			<Footer />
		</HelmetProvider>
	</React.StrictMode>
);
