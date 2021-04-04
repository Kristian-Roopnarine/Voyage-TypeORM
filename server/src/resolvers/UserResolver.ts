import { Resolver, Query } from 'type-graphql';
import { User } from './../entity/User';

@Resolver()
export class UserResolver {
	@Query(() => [User])
	async getAllUsers(): Promise<User[]> {
		const users: User[] | null = await User.find();
		return users;
	}
}
