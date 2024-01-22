# Redirect Cloudflare Worker

This is a repo with a simple Cloudflare Worker that redirects all requests to a single URL. It is used to redirect the `wasp-lang.dev` domain to the `wasp.sh` domain.

Make sure you have Wrangler (Cloudflare dev tools) installed globaly.

```bash
npm install -g wrangler
```

### Running it locally

1. `npm install`
2. `npm run dev`

Edit the `worker.js` file and test it out locally on `localhost:8787`.

### Deploying

0. Login with `wrangler login` into the Wasp Cloudflare account 
1. `npm run deploy`