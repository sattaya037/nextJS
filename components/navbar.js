//components/navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import {Grid,GridList,GridListTile,GridListTileBar,Avatar} from '@material-ui/core';
import liff from '@line/liff';

liff.init({ 
    liffId: '1653935174-baeNzNDB' 
    }) 
    .then(() => {
    // start to use LIFF's api
        if (!liff.isLoggedIn()) {
            liff.login();
        }else{
            // initializeApp();
            console.log("loged")
        }
    })
    .catch((err) => {

    });

const Navbar = () => {
    console.log(liff.isLoggedIn())
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
              <div id="header">
                {/* console.log("test") */}
             </div>

        </div>
    );
}



    if (typeof window !== "undefined") {
        var getheader =document.getElementById("header");
            // console.log(getheader)
            // getheader.innerHTML ="<Avatar alt='Remy Sharp' src='' /> "

    }






export default Navbar;