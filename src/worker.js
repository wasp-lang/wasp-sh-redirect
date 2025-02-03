export default {
	async fetch(request, env, ctx) {
		if (!env.REDIRECT_TO_DOMAIN) {
			return new Response('REDIRECT_TO_DOMAIN is not set', {
				status: 500,
			});
		}
		const redirectToDomain = env.REDIRECT_TO_DOMAIN;
		const statusCode = 301;

		const url = new URL(request.url);
		const { pathname, search } = url;

		const destinationURL = `${redirectToDomain}${pathname}${search}`;

		return Response.redirect(destinationURL, statusCode);
	},
};
