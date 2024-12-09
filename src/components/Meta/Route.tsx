import { Helmet } from 'react-helmet-async';

interface PageConfig {
	Location: string;
	Description?: string;
}

export default (RouteConfig: PageConfig) => {
	let RouteDesc = 'Design websites alongside professionals. Design with HotBeans website developers.';
	if (RouteConfig.Description) RouteDesc = RouteConfig.Description;

	return (
		<Helmet>
			<title>{`${RouteConfig.Location} | HotBeans WebDev`}</title>
			<meta charSet='utf-8' />
			<meta itemProp='description' content={RouteDesc} />
			<meta itemProp='og:description' content={RouteDesc} />
			<meta property='og:title' content={`${RouteConfig.Location} | HotBeans WebDev`} />
			<meta name='apple-mobile-web-app-title' content={`${RouteConfig.Location} | HotBeans WebDev`} />
			<meta name='twitter:title' content={`${RouteConfig.Location} | HotBeans WebDev`} />
		</Helmet>
	);
};
