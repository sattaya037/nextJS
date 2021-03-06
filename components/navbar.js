//components/navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import {Grid,GridList,GridListTile,GridListTileBar,Avatar} from '@material-ui/core';
import Login from './linelogin'
import dynamic from 'next/dynamic'
import Hello from './hello';

// login().then(function(result) {
//     console.log(result)
// })

// const isWindowContext = typeof window !== "undefined";
// const search = isWindowContext && window.location.search;

export function Navbar() {
    return(
                <div>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/about"><a>About</a></Link></li>
                        <li></li>
                        
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

// function Navbar() {
// // console.log(data)
//     return(
//         <div>
//             <ul>
//                 <li><Link href="/"><a>Home</a></Link></li>
//                 <li><Link href="/about"><a>About</a></Link></li>
//                 <li></li>
                
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
//         </div>
//     );
// }





export default Navbar;