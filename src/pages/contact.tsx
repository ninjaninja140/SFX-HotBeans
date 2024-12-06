import Route from '@components/Meta/Route';
import Hero from '@components/PageComponents/Contact/Title';
import Section from '@components/Section';
import { Notification } from '@utilities/Notification';
import { useSearchParams } from 'react-router';

export default () => {
	const [searchParams] = useSearchParams();

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
						<button onClick={() => new Notification({'message': 'HELLO!!'})}>Submit</button>
					</div>
				</form>
			</Section>
		</div>
	);
};
