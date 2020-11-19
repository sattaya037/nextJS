//components/layout.js
import Head from 'next/head';
import Navbar from './navbar';
import dynamic from 'next/dynamic'

// const DynamicComponent = dynamic(() =>
//   import('./hello').then((mod) => mod.Hello)
// )


const Layout = (props) => {
    return(
        <div>
            <Head>
                <title>Hello Next.js</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
                <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
            </Head>
            <Navbar/>
            {/* <DynamicComponent /> */}

            <div className="container">
                {props.children}
            </div>
        </div>
    );
}
export default Layout;