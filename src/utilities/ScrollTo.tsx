import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

export default () => {
	const [searchParams] = useSearchParams();
	const ID = searchParams.get('scroll-to');

	useEffect(() => {
		if (ID !== null)
			document.getElementById(ID)!.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'center',
			});
	}, []);
	return undefined;
};
