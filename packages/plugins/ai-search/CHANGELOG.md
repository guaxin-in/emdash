# @emdash-cms/plugin-ai-search

## 0.1.0

### Minor Changes

- [#4071](https://github.com/emdash-cms/emdash/pull/4071) [`772838d`](https://github.com/emdash-cms/emdash/commit/772838d20a748a42d9e1c03ad94a992006745bef) Thanks [@ttmx](https://github.com/ttmx)! - Adds `@emdash-cms/plugin-ai-search`, a plugin that indexes published content and author profiles into Cloudflare AI Search and keeps the index current as content changes. Set it up from the admin wizard, then add the `AiSearch` Astro component to a layout for a search button and modal. Requires EmDash 1.0.1 or later, Cloudflare Workers, and an `ai_search_namespaces` binding. See the [AI Search plugin guide](https://docs.emdashcms.com/plugins/ai-search/).
  
  It replaces `aiSearch` from `@emdash-cms/cloudflare/plugins`; the guide covers switching.

- [#4310](https://github.com/emdash-cms/emdash/pull/4310) [`080036e`](https://github.com/emdash-cms/emdash/commit/080036ed8e36300355a6ce2064846107d0726077) Thanks [@ttmx](https://github.com/ttmx)! - The AI Search plugin now runs on Node.js and on Workers without an AI Search binding, by connecting through the Cloudflare REST API. Set `EMDASH_AI_SEARCH_ACCOUNT_ID` and `EMDASH_AI_SEARCH_API_TOKEN`, or enter the account ID and API token on the plugin's settings page, which stores the token encrypted and requires `EMDASH_ENCRYPTION_KEY`. `EMDASH_AI_SEARCH_NAMESPACE` selects a namespace other than `default`. A Workers binding, when present, is still used first. To protect the API token's Cloudflare rate limit, indexing through the REST API uses at most half of it, and each visitor can search 30 times a minute, counted per IP address. Self-hosted sites behind a reverse proxy need `trustedProxyHeaders` for the search limit to apply.
