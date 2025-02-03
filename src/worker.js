export default {
	async fetch(request, env, ctx) {
		// TODO: Change to wasp.sh when we decide to go live
		// this is now just testing the redirect from wasp.sh to wasp-lang.dev
		const redirectToBase = 'https://wasp-lang.dev';
		const statusCode = 301;

		const url = new URL(request.url);
		const { pathname, search } = url;

		const destinationURL = `${redirectToBase}${pathname}${search}`;

		return Response.redirect(destinationURL, statusCode);
	},
};
