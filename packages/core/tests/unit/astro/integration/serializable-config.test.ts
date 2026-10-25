import { describe, expect, it } from "vitest";

import { buildSerializableConfig, emdash } from "../../../../src/astro/integration/index.js";

describe("buildSerializableConfig", () => {
	it("passes the update-check opt-out to the runtime config", () => {
		expect(buildSerializableConfig({ updateCheck: false }).updateCheck).toBe(false);
	});

	it("defaults imagePlaceholders to true on non-Cloudflare runtimes", () => {
		expect(buildSerializableConfig({}).imagePlaceholders).toBe(true);
	});

	it("defaults imagePlaceholders to false on Cloudflare Workers", () => {
		expect(buildSerializableConfig({}, true).imagePlaceholders).toBe(false);
	});

	it("preserves an explicit imagePlaceholders setting over the runtime default", () => {
		expect(buildSerializableConfig({ imagePlaceholders: true }, true).imagePlaceholders).toBe(true);
		expect(buildSerializableConfig({ imagePlaceholders: false }).imagePlaceholders).toBe(false);
	});
});

describe("updateCheck option", () => {
	it("rejects an invalid minimum release age during integration setup", () => {
		expect(() => emdash({ updateCheck: { minimumReleaseAge: "soon" } })).toThrow(
			/updateCheck\.minimumReleaseAge.*soon/,
		);
		expect(() => emdash({ updateCheck: { minimumReleaseAge: "48h" } })).not.toThrow();
	});
});
