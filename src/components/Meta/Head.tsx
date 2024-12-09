import { Helmet } from 'react-helmet-async';

export default () => (
	<Helmet prioritizeSeoTags>
		{/* Standard Head Meta */}
		<meta charSet='utf-8' />
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<meta httpEquiv='Content-Type' content='text/html; text/css; charset=UTF-8' />
		<link rel='canonical' href='https://hotbeans.co' />
		<meta httpEquiv='Expires' content='1y' />
		<meta httpEquiv='Pragma' content='1y' />
		<meta httpEquiv='Cache-Control' content='1y' />
		<title>HotBeans WebDev - Design like no other</title>
		<meta
			name='description'
			content='Design websites alongside professionals. Design with HotBeans website developers.'
		/>

		{/* Social Media Head Meta */}
		<meta property='og:title' content='HotBeans WebDev - Design like no other' />
		<meta
			name='og:description'
			content='Design websites alongside professionals. Design with HotBeans website developers.'
		/>
		<meta property='og:type' content='website' />
		<meta property='og:site_name' content='HotBeans Web Development' />
		<meta property='og:url' content={location.href} />
		<meta property='og:locale' content='en_US' />
		<meta property='og:image' content={''} />

		{/* Twitter Head Meta */}
		<meta name='twitter:image' content={''} />
		<meta name='twitter:card' content='summary_large_image' />
		<meta name='twitter:site' content='@ninjaninja140' />
		<meta name='twitter:title' content='HotBeans WebDev - Design like no other' />
		<meta name='twitter:alt' content='HotBeans Web Development' />

		{/* Apple Devices Head Meta */}
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
		<meta name='apple-mobile-web-app-title' content='HotBeans Web Development' />
		<link rel='mask-icon' href={''} color='#1c092d' />
		<link rel='apple-touch-icon' href={''} />

		{/* Android Devices Head Meta */}
		<meta name='theme-color' content='#1c092d' />
		<meta name='mobile-web-app-capable' content='yes' />

		{/* Windows Devices Head Meta */}
		<meta name='msapplication-TileColor' content='#1c092d' />
		<meta name='msapplication-TileImage' content={''} />
		<meta name='msapplication-tap-highlight' content='no' />
	</Helmet>
);
