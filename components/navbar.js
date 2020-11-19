//components/navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import {Grid,GridList,GridListTile,GridListTileBar,Avatar} from '@material-ui/core';

async function login() {
    if (process.browser) {
        const liff = window.liff;
        await liff.init({ liffId: '1653935174-baeNzNDB' }).catch(err=>{throw err});
        if (liff.isLoggedIn()) {
          let getProfile = await liff.getProfile();
            console.log(getProfile);
            return getProfile;
        }else{
          liff.login();
        }

        // const liff = window.liff;
        // liff
        //     .init({
        //         liffId: "1653935174-baeNzNDB" // Use own liffId
        //     })
        //     .then(() => {
        //         // Start to use liff's api
        //         if (!liff.isLoggedIn()) {
        //             liff.login();
    
        //           }else{
        //             a = "hello";
    
        //           }
        //     })
        //     .catch((err) => {
        //         console.log(err.code, err.message);
        //     });
    }    

}


const SomeComponent = () => {
 
    var getProfile = login();
    console.log(login())

return <h1>{getProfile.displayName}</h1>
  }

const Navbar = ()  => {
    console.log(login());
    
    return(
        <div>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
            </ul>
<style jsx>{`
                ul {
                    background: #333;
                    color: #fff;
                    list-style: none;
                    display: flex;
                }
ul li {
                    font-size: 22px;
                    margin-right: 50px;
                }
ul li a {
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>
                {/* <SomeComponent /> */}


        </div>
    );
}



    if (typeof window !== "undefined") {
        var getheader =document.getElementById("header");
            // console.log(getheader)
            // getheader.innerHTML ="<Avatar alt='Remy Sharp' src='' /> "

    }






export default Navbar;