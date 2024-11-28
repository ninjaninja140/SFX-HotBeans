/// <reference types="vite/client" />

declare module '*.css' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.svg' {
	const content: React.FC<React.SVGProps<SVGElement>>;
	export default content;
}
