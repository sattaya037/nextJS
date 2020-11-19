//components/navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import {Grid,GridList,GridListTile,GridListTileBar,Avatar} from '@material-ui/core';
import login from './linelogin'
// async function login() {
//     if (process.browser) {
//         const liff = window.liff;
//         await liff.init({ liffId: '1653935174-baeNzNDB' }).catch(err=>{throw err});
//         if (liff.isLoggedIn()) {
//           let getProfile = await liff.getProfile();
//             console.log(getProfile);
//             return getProfile;
//         }else{
//           liff.login();
//         }
//     }    

// }
console.log(login())
const SomeComponent = () => {

    return <h1>Hello</h1>
  }



const Navbar = ()  => {

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
                <SomeComponent />


        </div>
    );
}






export default Navbar;