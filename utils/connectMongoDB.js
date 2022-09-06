import mongoose from 'mongoose';

// -> Prepare a connection object to store the connection state.
const Connection = { isConnected: false, connections: '' };

async function connectMongoDB ( ) {
    
    // ??? Are we already connected? If so, we don't need a duplicate. Return.
    if ( Connection.isConnected ) return;

    // -> Connect to the database using the URI.
    const Database = await mongoose.connect ( process.env.MONGO_CONNECTION_URI, { useNewUrlParser: true } );
    
    // -> Store the connection state.
    Connection.isConnected = Database.connections [ 0 ].readyState;

}

export default connectMongoDB;