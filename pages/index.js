import Head from 'next/head';

// !!! This file doesn't need to do much in this case.
// -> Return a homepage that produces a simple access denied message.
const Homepage = ( ) => {

    return (

        <>

            <Head>

                <title>Access Denied</title>
                
            </Head>

            <tt>Access denied.</tt>

        </>

    );

}

export default Homepage;