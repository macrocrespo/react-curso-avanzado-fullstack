const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const connectDB = require('./config/db');

// Connect to a DB
connectDB();

// Servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        return {
            saludo: 'Hola'
        };
    }
});


// Arrancar el server
server.listen().then( ({ url }) => {
    console.log(`Server running on port: ${ url }`);
});