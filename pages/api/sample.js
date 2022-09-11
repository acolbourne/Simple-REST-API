import connectMongoDB from '../../utils/connectMongoDB';
import Sample from '../../models/sample.model';

// -> Connect to the database.
connectMongoDB ( );

export default async ( req, res ) => {

    // -> Take the request type and route it around a loop called 'method'.
    const { method } = req;

    // -> For each request type, take the action prescribed. If anything unexpected happens, return an error.
    // -> Loop all of the processes through a try/catch block.
    switch ( method ) {

        // -> Get the results from the database.
        case 'GET':

            try {
                
                const Results = await Sample.find ( { } );

                const Results_Array = Object.values ( Results );

                res.status ( 200 ).json ( { success: true, payload: Results_Array } );

            } catch ( error ) {

                res.status ( 400 ).json ( { success: false, "case": "get failed" } );

            }

        break;

        // -> Add a new result to the database.
        // -> To keep things simple, this just accepts the key:value pairs from the model.
        case 'POST':

            try {
                
                const Results = await Sample.create ( req.body );

                res.status ( 200 ).json ( { success: true, payload: Results } );

            } catch ( error ) {
                
                res.status ( 400 ).json ( { success: false, "case": "post failed" } );

            }

        break;

        // -> Remove a result by ID.
        case 'DELETE':

            try {
                
                const Results = await Sample.findByIdAndDelete ( req.query.id );

                res.status ( 200 ).json ( { success: true } );

            } catch ( error ) {

                res.status ( 400 ).json ( { success: false, "case": "delete failed" } );

            }

        break;

        // -> By default, do nothing.
        default:

            res.status ( 400 ).json ( { success: false, "case": "default" } );

        break;

    }

}