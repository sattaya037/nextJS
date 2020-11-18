//components/navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

// var liff ;
//     if (typeof window !== "undefined") {
//          liff = window.liff;

//         liff
//             .init({
//                 liffId: "1653935174-baeNzNDB" // Use own liffId
//             })
//             .then(() => {
//                 // Start to use liff's api
//                 if (!liff.isLoggedIn()) {
//                     liff.login();

//                   }else{
//                     initializeApp();

//                   }
//             })
//             .catch((err) => {
//                 console.log(err.code, err.message);
//             });
    
    
//  }

//  function initializeApp() {

//     liff.getProfile()
//         .then(profile => {
//             names = profile
//             console.log(names)
//         })
//         .catch((err) => {
//             console.log('error', err);
//         });
// }



export default function Navbar() {
    var liff ,data;
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
                             liff.getProfile()
                                .then(profile => {
                                    data = profile
                                    console.log(data)
                                })
                                .catch((err) => {
                                    console.log('error', err);
                                });
                        
                          }
                    })
                    .catch((err) => {
                        console.log(err.code, err.message);
                    });
    }else{
        console.log(false)
    }
    console.log(data)
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={async (e) => {
            // const { value } = e.currentTarget
            // Dynamically load fuse.js
            // const Fuse = (await import('fuse.js')).default
            // const fuse = new Fuse(names)
  
            // setResults(fuse.search(value))
          }}
        />
        {/* <pre>{names}</pre> */}
      </div>
    )
  }



// const Navbar = () => {

    

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
//               <script    type="text/javascript">
//                 {/* console.log("test") */}
//              </script>
//         </div>
//     );
// }






// export default Navbar;