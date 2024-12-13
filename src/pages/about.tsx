import Route from '@components/Meta/Route';
import Hero from '@components/PageComponents/About/Title';
import Section from '@components/Section';
import Cloudflare from '@content/Banners/Cloudflare.svg?react';
import ScrollTo from '@utilities/ScrollTo';

const Logo = Cloudflare as React.FunctionComponent<
	React.SVGProps<SVGSVGElement> & {
		title?: string;
		titleId?: string;
		desc?: string;
		descId?: string;
	}
>;

export default () => {
	return (
		<div>
			<Route Location='About us' />
			<ScrollTo />

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
				HotBeans has come far from where it started. Originally, HotBeans was a small and
				independent software company, funded and mainly ran solely by its founder, Eden Kneale.
				The HotBeans Team was a whole lot smaller too, today, HotBeans has over a hundred
				employees globally, but before then, HotBeans was almost quite literally a garage
				project, with the founders, Eden and Garry working together, hoping to make it big with
				their startup.
				<br />
				<br />
				However, unfortunately the world of startups wasn't very welcoming of HotBeans, and the
				sudden lack of funding coming from Eden himself began to dwindle more and more to the
				point HotBeans was on the line of closing its garage doors for the first and final time.
				<br />
				<br />
				But as almost all hope was lost, our first mainstream corporation approached us in need
				of a new infrastructure for its software and systems, Cloudflare. Cloudflare's
				appearance and commission at HotBeans was enough to save the company, have it registered
				on the Companies House and allow the company to purchase servers and new computers for
				better development. Upon finishing the new software, Cloudflare once again approached
				us, this time with a proposal instead of a commission request, they asked about
				purchasing our company and making it a Cloudflare brand, to boost our sales and provide
				a constant and steady flow of funding to keep the company afloat. Surprised, the
				founders agreed, and a deal was struck, the garage doors closed for the final time, and
				the doors to a new office were opened.
				<br />
				<br />
				For a while, HotBeans was still a two man sub-company of Cloudflare, but over time we
				expanded and changed our policies to allow ourselves to hire more people of different
				skill and types of professions, our name under Cloudflare brought in new customers and
				slowly but surely, HotBeans grew to become more then just a software company, but
				pivoting to mainly a website design company too, eventually becoming the HotBeans
				Website Development we all know and love today.
				<br />
				<br />
				<b>Thank you Cloudflare, we love you! ❤︎</b>
				<Logo height='100' style={{ width: '100%', marginTop: '40px' }} />
			</Section>
			<Section title='How we operate' style={{ fontSize: '19px', paddingLeft: '13px', paddingRight: '13px' }}>
				At HotBeans, we try to create a relaxed employee environment, we try to get as many
				people we can into our London office at a time, as we have a belief people work better
				in the work place rather than at home, as for the overseas workers, we have small
				workspaces dotted about that we rent to make sure all of our employees share the same
				and if not similar experiences on a day to day basis, we attempt to be as inclusive as
				we can, connecting all our offices together via live voice and video calls and similar
				if not the same work environments.
				<br />
				<br />
				We try to listen to our employees at HotBeans, we prefer to hear the voice of everyone
				rather than just investors, shareholders and management, we try to be equal throughout
				the company, where everyone works on the same level playing field so we can eliminate
				discrimination and any sort of unfairness in the workplace.
			</Section>
		</div>
	);
};
