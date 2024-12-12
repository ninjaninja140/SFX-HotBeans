import Route from '@components/Meta/Route';
import Hero from '@components/PageComponents/Contact/Title';
import Section from '@components/Section';
import Underline from '@components/Text/Underline';
import { createMailtoLink } from '@utilities/MailTo';
import { Notification } from '@utilities/Notification';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import validator from 'validator';

export default () => {
	const [email, setEmail] = useState<string>();
	const [body, setBody] = useState<string>();
	const [subject, setSubject] = useState<string>();
	const [extras, setExtras] = useState<string>();

	const [emailInvalid, setEmailInvalid] = useState<boolean>(false);

	const [searchParams] = useSearchParams();

	const AutofillSubject = searchParams.get('subject-ref');

	useEffect(() => {
		if (AutofillSubject) setSubject(AutofillSubject);
	}, []);

	return (
		<div>
			<Route Location='Contact us' />
			<Hero />
			<Section title='Contact us here'>
				<div style={{ paddingLeft: '10px', paddingRight: '35px' }}>
					<input
						name='email'
						id='email'
						type='email'
						placeholder='Your email: example@example.com'
						style={{ width: '100%', marginBottom: '12px' }}
						onChange={(i) => {
							if (!(i.target.value === ''))
								validator.isEmail(i.target.value) === true
									? (() => {
											setEmailInvalid(false);
											setEmail(i.target.value);
										})()
									: (() => {
											setEmailInvalid(true);
											setEmail(undefined);
										})();
							else {
								setEmailInvalid(false);
								setEmail(undefined);
							}
						}}
					/>
					{emailInvalid ? (
						<div style={{ marginBottom: '12px' }}>
							<i style={{ color: '#FEE75C', fontSize: '14px' }}>
								Invalid form of input, please make sure this is an{' '}
								<Underline>Email</Underline>.
							</i>
						</div>
					) : undefined}
					<input
						name='subject'
						id='subject'
						type='text'
						placeholder='Subject (e.g. Application Enquiry, Question, Complaint, Quote request)'
						style={{ width: '100%', marginBottom: '12px' }}
						value={AutofillSubject || undefined}
						onBlur={(e) => setSubject(e.target.value)}
					/>
					<textarea
						name='description'
						id='description'
						placeholder='Body, describe your issue or write your quote or question here'
						onBlur={(e) => setBody(e.target.value)}
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
						onBlur={(e) => setExtras(e.target.value)}
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
						<button
							onClick={() => {
								if (email === '' || email === undefined || emailInvalid)
									return new Notification({
										message: `You have entered an invalid email or your email is missing, please add one or fix your mistake.`,
									});

								if (subject === '' || subject === undefined)
									return new Notification({
										message: 'Please add a subject to your email.',
									});

								if (body === '' || body === undefined)
									return new Notification({
										message: 'Please add a body to your email.',
									});

								new Notification({ message: 'Creating email...' });
								return (window.location.href = createMailtoLink(
									'ninjaninja140@jadevelopment.co.uk',
									{
										body: [body, extras].join('\n\n'),
										subject: subject,
									}
								));
							}}>
							Submit
						</button>
					</div>
				</div>
			</Section>

			<Section title='Visit us in person'>
				<p>Our London offices are open from 9:30 AM until 5:30 PM or until 1:40 on a Friday, come visit us if you feel like you'd rather talk to us in person!</p>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6203580973543!2d-0.11807139999999999!3d51.50183390000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603530e92fa39%3A0xf872835bbffc7170!2sCloudflare!5e0!3m2!1sen!2suk!4v1734009026858!5m2!1sen!2suk"
					height="450"
					style={{ border: '0', width: '100%', borderRadius: '20px', }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
				<p>Our Offices are always open for clients to come talk to their team in-person and for potential clients to come get their quotas sorted in-office then rather over email.</p>
			</Section>
		</div>
	);
};
