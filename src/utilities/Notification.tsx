import { cssTransition, toast } from 'react-toastify';

interface NotificationOptions {
	message: string;
	messageId?: number;
}

class Notification {
	private readonly message: string;
	private readonly messageId: number = Math.floor(Math.random() * 2000);

	constructor(Options: NotificationOptions) {
		this.message = Options.message;
		if (Options.messageId) this.messageId = Options.messageId;

		this.sendClientNotification();
	}

	private readonly sendClientNotification = () =>
		toast(this.message, {
			toastId: this.messageId,
			icon: false,
			draggable: true,
			transition: cssTransition({
				enter: 'animate__animated animate__backInRight',
				exit: 'animate__animated animate__backOutRight',
			}),
			style: {
				backgroundColor: '#ffffff',
				color: 'black',
				fontFamily: 'FF Neuwelt',
				fontWeight: '600',
				lineHeight: '1.1',
				width: '450px',
				height: 'auto',
				padding: '1.25rem',
				borderRadius: '6px',
				cursor: 'pointer',
				display: 'flex',
				flexDirection: 'row',
				gap: '1.25rem',
				alignItems: 'center',
			},
			progressStyle: {
				backgroundColor: '#5865f2',
				height: '0.35rem',
				borderRadius: '5px',
				marginTop: 'auto',
			},

			closeButton: (
				<svg width='24' height='24' viewBox='0 0 24 24'>
					<path
						fill='currentColor'
						d='M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z'
					/>
				</svg>
			),
		});
}

export { Notification };

