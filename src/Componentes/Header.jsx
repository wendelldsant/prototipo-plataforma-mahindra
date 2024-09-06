import { Link } from "react-router-dom";

function Header() {
    return ( 
        <header>
            <nav>
                <ul>
                    <li className="ml-2">
                        <Link to= '/live'>Live</Link>
                    </li>
                    <li>
                        <Link to= '/social'>Social</Link>
                    </li>
                    <li>
                        <Link to= '/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to= '/register'>Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;