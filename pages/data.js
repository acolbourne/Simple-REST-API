import Head from 'next/head';

// -> Return a homepage that produces a simple access denied message.
const Data = ( { data } ) => {

    // -> Return the data. The payload is returned as an object.
    const Results = Object.values ( data );

    // -> Get the first result as an example.
    const getExampleResult = ( Results [ 1 ][ 0 ] );
    
    return (

        <>

            <Head>

                <title>Return Data</title>
                
            </Head>

            <h3>Result: {getExampleResult._id}</h3>

            <p>Message: {getExampleResult.sampleMessage}</p>

            <p>Example number: {getExampleResult.sampleNumber}</p>

        </>

    );

}

// -> Request the test data from the API.
export async function getServerSideProps ( ) {

    // -> Get the data from the API.
    const response = await fetch ( 'http://127.0.0.1:3000/api/sample' );

    // -> Convert the data to JSON.
    const data = await response.json ( );

    // -> Return the data.
    return { props: { data } };

}

export default Data;