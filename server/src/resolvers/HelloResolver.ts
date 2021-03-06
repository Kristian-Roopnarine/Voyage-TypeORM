import { Resolver, Query } from 'type-graphql';

@Resolver()
export class HelloResolver {
	@Query(() => String)
	async HelloWorld() {
		return 'Hello World';
	}
}
