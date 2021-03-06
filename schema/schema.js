import { makeExecutableSchema } from 'graphql-tools';

// Import Schema Types
import {typeDefs as User} from './types/User';
import {typeDefs as Expense} from './types/Expense';

//Import Schema Queries
import {typeDefs as Queries} from './queries/Queries';

//Import Schema Mutations
import {typeDefs as Mutations} from './mutations/Mutations';

//Import Schema Resolvers
import {resolvers} from './resolvers/Resolvers';

export const schema = makeExecutableSchema({
    typeDefs: [
        Queries, User, Expense, Mutations
    ],
    resolvers
});
