import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

// creates table name with lowercase class name
@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Field((type) => String)
	@Column()
	firstName!: string;

	@Field()
	@Column()
	lastName!: string;

	@Field()
	@Column()
	googleId!: string;

	@Field()
	@Column()
	email!: string;
}
