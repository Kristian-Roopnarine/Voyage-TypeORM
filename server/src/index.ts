import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { UserResolver } from './resolvers/UserResolver';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

const main = async () => {
	const PORT = process.env.PORT || 4000;
	await createConnection();

	const app = express();
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [UserResolver],
			validate: false,
		}),
	});

	apolloServer.applyMiddleware({ app });
	app.listen(PORT, () => {
		console.log(`Connected to port ${PORT}`);
	});
};

main();
