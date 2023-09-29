import { postgraphile  } from 'postgraphile';
import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector'; '@graphile-contrib/pg-simplify-inflector'
import PgAggregatesPlugin from "@graphile/pg-aggregates";
import PgManyToManyPlugin from "@graphile-contrib/pg-many-to-many"
// import PgOmitArchivedPlugin from "@graphile-contrib/pg-omit-archived"
// import PgPubsubPlugin from "@graphile/pg-pubsub";

/**
 * Additional install plugins
 * * [pg-simplify-inflector]()
 * * [postgraphile-plugin-connection-filter](https://github.com/graphile-contrib/postgraphile-plugin-connection-filter)
 * * [@graphile/pg-aggregates](https://github.com/graphile/pg-aggregates)
 * * [@graphile-contrib/pg-many-to-many](https://github.com/graphile-contrib/pg-many-to-many)
 * * [@graphile-contrib/pg-order-by-related](https://github.com/graphile-contrib/pg-order-by-related)
 *
 * and uninstalled...
 * * [@graphile-contrib/pg-omit-archived](https://github.com/graphile-contrib/pg-omit-archived)
 * * [@graphile/pg-pubsub](https://www.npmjs.com/package/@graphile/pg-pubsub)
 */

export const middleware = postgraphile(
	process.env.DATABASE_URL!,
	'public',
	{
		subscriptions: true,
		watchPg: true,
		dynamicJson: true,
		setofFunctionsContainNulls: false,
		ignoreRBAC: false,
		showErrorStack: 'json',
		extendedErrors: [
			'hint', 'detail', 'errcode'
		],
		exportGqlSchemaPath: './schema/schema.graphql', // -> /packages/graphql/
		graphiql: true,
		enhanceGraphiql: true,
		enableQueryBatching: true,
		legacyRelations: 'omit',
		// plugins
		appendPlugins: [
			PgSimplifyInflectorPlugin,
			PgAggregatesPlugin,
			PgManyToManyPlugin,
		],
	}
);