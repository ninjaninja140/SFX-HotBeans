import Route from '@components/Meta/Route';
import Hero from '@components/PageComponents/About/Title';
import Section from '@components/Section';

export default () => {
	return (
		<div>
			<Route Location='About us' />
			<Hero />

			<Section
				title='Who are we?'
				style={{ fontSize: '19px', paddingLeft: '13px', paddingRight: '13px' }}>
				HotBeans Website Development is a British software development company, however, not
				your average run-of-the-mill Web Dev company, as in a single development package,
				HotBeans will provide the services you would never think to see when you come to a
				software development company.
				<br />
				<br />
				Here at HotBeans, we try to give out customers the best service and package deals
				possible, to retain our current customer-base and entice new customers into joining our
				ever-growing customer-base with our spectacular service and great deals, with our
				software development packages and our hosting packages.
				<br />
				<br />
				As well as designing and building software, HotBeans also develop websites, its part of
				our name since its what we are mostly known for. Our company ranges from developing and
				designing software, hardware tailoring, hosting, and all the way to website design and
				development. We make sure to keep a broad spectrum of what out company does to allow our
				customers to always be satisfied with our services, and so that they know if they need
				something being done, and done well, they can come to HotBeans.
			</Section>
			<Section
				title='Where are we based?'
				style={{ fontSize: '19px', paddingLeft: '13px', paddingRight: '13px' }}>
				HotBeans are primarily situated in London as a smaller department of the large
				networking company, CloudFlare. Our offices are located inside of the CloudFlare
				building which can be found on the maps embed below.
				<br />
				<br />
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6203580973543!2d-0.11807139999999999!3d51.50183390000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603530e92fa39%3A0xf872835bbffc7170!2sCloudflare!5e0!3m2!1sen!2suk!4v1734009026858!5m2!1sen!2suk'
					height='450'
					style={{ border: '0', width: '100%', borderRadius: '20px' }}
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				/>
				<i style={{ fontSize: '17px' }}>
					This map is also available on our <a href='/contact'>Contact Us</a> page,
					alongside other details.
				</i>
				<br />
				<br />
				Alongside this, we also employ people remotely from all around the world, so even when
				our main offices are closed, our company still operates around the clock as people go to
				sleep, others wake up to start their day, we like to describe this as "HotBeans never
				looses a minute" in our meetings as a bit of a play on words to how our company never
				stops working, apart from seasonal holidays.
			</Section>
			<Section
				title='Are we reliable?'
				style={{ fontSize: '19px', paddingLeft: '13px', paddingRight: '13px' }}>
				Of corse we are! HotBeans have worked with large names in the Information Technology
				sector, as well as big names in Social media too, an example of some of our proudest to
				name clients are shown on our homepage on a scrolling banner, our favourite and most
				proud clients we have worked for are Roblox, Discord, Microsoft and jaDevelopment who
				have all come to become partnered companies here at HotBeans.
				<br />
				<br />
				We aim to produce the best possible results for our clients, our various developers
				based all around the world work together all around the clock to make sure our clients
				are given the best possible result, exactly in their image.
			</Section>
			<Section
				title='What we stand for as a company'
				style={{ fontSize: '19px', paddingLeft: '13px', paddingRight: '13px' }}>
				We have observed the functions of other website and software companies, and taken note
				of how customers always overpay for tiny packages which more then often end up too
				complicated for the customer or are unable to provide enough if they are budgeting.
				HotBeans aim to to create an equal pricing strategy where our clients pay for exactly
				how much they are required to pay for, and if they are budgeting, we understand it and
				we work with it and aim to provide as much of a good product for them as possible, we
				always aim for maximum customer satisfaction no matter how much is paid or is available
				to be paid. Here at HotBeans we reject the idea of making customers overpay for minimum
				effort software, websites and package deals, we aim to provide the customer with their
				moneysworth.
			</Section>
			<Section
				title='Our History'
				style={{ fontSize: '19px', paddingLeft: '13px', paddingRight: '13px' }}>
				HotBeans has come far from where it started. Originally, HotBeans was a very small and
				independent software company.
			</Section>
		</div>
	);
};
