import '@css/application.css';
import Router from '@src/router';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Head from '@components/Meta/Head';
import '@css/application.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Router />
		<Head />
	</React.StrictMode>
);

