//components/navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';

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
                    initializeApp();
         

                  }
            })
            .catch((err) => {
                console.log(err.code, err.message);
            });
    
    
      }

const Navbar = () => {
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
        </div>
    );
}


function initializeApp() {

    liff.getProfile()
        .then(profile => {
            console.log(profile)
            // document.getElementById("head").innerHTML =profile.displayName;
            // document.getElementById("head").style.textAlign = "left";
            // document.getElementById("image").src = profile.pictureUrl;
         
            // document.getElementById("image").innerHTML =profile.displayName;


        })
        .catch((err) => {
            console.log('error', err);
        });
}


export default Navbar;