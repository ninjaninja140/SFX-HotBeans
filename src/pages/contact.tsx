import Route from '@components/Meta/Route';
import Hero from '@components/PageComponents/Contact/Title';
import Section from '@components/Section';
import { useSearchParams } from 'react-router';

export default () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const AutofillSubject = searchParams.get('subject-ref');

	return (
		<div>
			<Route Location='Contact us' />
			<Hero />
			<Section title='Contact us here'>
				<form action='' style={{ paddingLeft: '10px', paddingRight: '35px' }}>
					<input
						name='email'
						id='email'
						type='email'
						placeholder='Your email: example@example.com'
						style={{ width: '100%', marginBottom: '12px' }}
					/>
					<input
						name='subject'
						id='subject'
						type='text'
						placeholder='Subject (e.g. Application Enquiry, Question, Complaint, Quote request)'
						style={{ width: '100%', marginBottom: '12px' }}
						value={AutofillSubject || ''}
					/>
					<textarea
						name='description'
						id='description'
						placeholder='Description'
						style={{
							width: '100%',
							height: '200px',
							marginBottom: '5px',
						}}
					/>
					<input
						name='extra'
						id='extra'
						type='text'
						placeholder='Other Information'
						style={{ width: '100%' }}
					/>
					<p
						style={{
							fontStyle: 'italic',
							lineHeight: '17px',
							fontSize: '16px',
							marginBottom: '0',
						}}>
						Upon submitting and sending the email this will prompt, a member of our
						customer support team will be able to guide your query to the relative
						department to continue further with your query. On average, our support
						team should be with you within 24 hours.
					</p>
					<i style={{ fontSize: '15px', marginTop: '10px' }}>
						Do NOT submit sensitive information through this form.
					</i>
					<div
						style={{
							justifyContent: 'right',
							alignItems: 'right',
							alignContent: 'right',
							justifyItems: 'right',
							display: 'flex',
						}}>
						<button>Submit</button>
					</div>
				</form>
			</Section>
			<div
				style={{
					height: '60vh',
					justifyContent: 'center',
					alignItems: 'center',
					justifyItems: 'center',
					alignContent: 'center',
					textAlign: 'center',
					paddingLeft: '15%',
					paddingRight: '15%',
				}}>
				<h1 style={{ margin: '0' }}>You could have your picture here!</h1>
				<h2 style={{ margin: '0' }}>
					If you feel like you could be a productive member here at the HotBeans Web
					Development Team, why not try applying?
				</h2>
				<br />
				<br />
				<br />
				<div style={{ display: 'flex' }}>
					<button
						style={{ width: '350px' }}
						className='inverted-button blurple-button-border'>
						To Careers
					</button>
				</div>
			</div>
		</div>
	);
};

