//components/navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';



const Navbar = () => {
    console.log("test")
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
              <script    type="text/javascript">
                {/* console.log("test") */}
             </script>
        </div>
    );
}






export default Navbar;