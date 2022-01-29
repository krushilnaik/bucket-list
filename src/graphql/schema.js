import { makeSchema } from "nexus";
import path from "path";
import types from "./types";

export const schema = makeSchema({
	types,
	outputs: {
		typegen: path.join(
			process.cwd(),
			"node_modules",
			"@types",
			"nexus-typegen",
			"index.d.ts"
		),
		schema: path.join(process.cwd(), "src", "graphql", "schema.graphql"),
	},
	contextType: {
		export: "Context",
		module: path.join(process.cwd(), "src", "graphql", "context.js"),
	},
});