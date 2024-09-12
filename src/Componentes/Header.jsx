import { Link } from "react-router-dom";

function Header() {
    return ( 
        <header className="text-lg flex items-center min-h-16 justify-start bg-emerald-500 w-full p-3 font-medium">
            <h1>Logo</h1>
            <nav className="w-full mr-2.5">
                <ul className="flex justify-end gap-8 ">
                    <li>
                        <Link to= '/live'>Live</Link>
                    </li>
                    <li>
                        <Link to= '/social'>Social</Link>
                    </li>
                    <li>
                        <Link to= '/market'>Market</Link>
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