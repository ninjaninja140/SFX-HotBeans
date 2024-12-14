import Checkbox from '@components/Checkbox';
import Route from '@components/Meta/Route';
import Hero from '@components/PageComponents/Careers/Hero';
import ScrollTo from '@utilities/ScrollTo';
import { IoFilter } from 'react-icons/io5';
import { Fragment } from 'react/jsx-runtime';

export default () => {
	return (
		<Fragment>
			<Route Location='Careers' />
			<ScrollTo />

			<Hero />
			<div
				id='vacancies'
				style={{
					margin: '5% auto',
					paddingLeft: '15%',
					paddingRight: '15%',

					justifyContent: 'flex-start',
					alignItems: 'left',
					justifyItems: 'center',
					alignSelf: 'center',
					textAlign: 'left',
				}}>
				<h1>Job Vacancies</h1>
				<div style={{ display: 'flex' }}>
					<div style={{ flex: '1' }}>
						<h3
							style={{
								width: '100%',
								fontWeight: '600',
								display: 'flex',
								alignContent: 'center',
								alignItems: 'center',
							}}>
							Filters <IoFilter style={{ marginLeft: '15px' }} />
						</h3>
					</div>
					<div
						style={{
							flex: '4.5',
							display: 'flex',
							justifyContent: 'right',
							flexDirection: 'column',
							textAlign: 'right',
							alignItems: 'right',
						}}>
						<h3
							style={{
								width: '100%',
								fontWeight: '600',
							}}>
							Showing undefined Results
						</h3>
						<Checkbox>Hello world!</Checkbox>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
