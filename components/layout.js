//components/layout.js
import Head from 'next/head';
import Navbar from './navbar';

var liff ;
  
    if (typeof window !== "undefined") {
         liff = window.liff;

        liff
            .init({
                liffId: "1653935174-baeNzNDB" // Use own liffId
            })
            .then(() => {
                // Start to use liff's api
                if (!liff.isLoggedIn()) {
                    liff.login();

                  }else{

                  }
            })
            .catch((err) => {
                console.log(err.code, err.message);
            });
    
    
      }



const Layout = (props) => {
    return(
        <div>
            <Head>
                <title>Hello Next.js</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
                <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}
export default Layout;