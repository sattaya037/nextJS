//components/navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import {Grid,GridList,GridListTile,GridListTileBar,Avatar} from '@material-ui/core';



// const Navbar = (profile) => {

//     return(
//         <div>
//             <ul>
//                 <li><Link href="/"><a>Home</a></Link></li>
//                 <li><Link href="/about"><a>About</a></Link></li>
//             </ul>
// <style jsx>{`
//                 ul {
//                     background: #333;
//                     color: #fff;
//                     list-style: none;
//                     display: flex;
//                 }
// ul li {
//                     font-size: 22px;
//                     margin-right: 50px;
//                 }
// ul li a {
//                     color: #fff;
//                     text-decoration: none;
//                 }
//             `}</style>
//                 <Grid container spacing={3}>
//                 <Grid item xs={2}>
//                     <Avatar id="image" alt="Remy Sharp" src="" />
//                 </Grid>
//                 <Grid item xs={10}>
//                     <h2 id="head">{profile}</h2>
//                 </Grid>

//                 </Grid>

//         </div>
//     );
// }
// var liff ;
// if (typeof window !== "undefined") {
//      liff = window.liff;

//     liff
//         .init({
//             liffId: "1653935174-baeNzNDB" // Use own liffId
//         })
//         .then(() => {
//             // Start to use liff's api
//             if (!liff.isLoggedIn()) {
//                 liff.login();

//               }else{
//                 createmyElements()

//               }
//         })
//         .catch((err) => {
//             console.log(err.code, err.message);
//         });


//   }

function Navbar({Profile}) {

    console.log(Profile)
    return (
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
                <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Avatar id="image" alt="Remy Sharp" src="" />
                </Grid>
                <Grid item xs={10}>
                    <h2 id="head"></h2>
                </Grid>

                </Grid>

        </div>
    );
  }

  if (typeof window !== "undefined") {
    Navbar.getInitialProps = async () => {
        await liff.init({ liffId: "1653935174-baeNzNDB" }).catch(err=>{throw err});
        if (!liff.isLoggedIn()) {
            liff.login();

     
        }else{
            let getProfile = await liff.getProfile();
            return { Profile: getProfile }

        }
      }
    

  }





function createmyElements() {
  
    
    // liff.getProfile()
    //     .then(profile => {
    //         console.log(profile)
    //         // document.getElementById("head").innerHTML =profile.displayName;
    //         // document.getElementById("head").style.textAlign = "left";
    //         // document.getElementById("image").src = profile.pictureUrl;
         
    //         // document.getElementById("image").innerHTML =profile.displayName;
    //         Navbar.getInitialProps = async function(profile) {
    //             // const response = await fetch(`https://www.what-song.com/api/recent-movies`);
    //             // const result = await response.json();
    //             console.log(profile);
    //             return { musicData: profile}
                
    //         }


    //     })
    //     .catch((err) => {
    //         console.log('error', err);
    //     });
}


export default Navbar;