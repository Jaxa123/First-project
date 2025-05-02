import Link from "next/link";
import "./style.scss"

// EN: ./  means that style.scss file os located in 
//     the same folder with index.jsx
// ----------------------------------------------
// RU: ./  означает, что style.scss файл находится 
//      в той же папке, что и index.jsx

function NavBar() {
    return (
        <nav className="main-nav-bar-wrapper">
            {/* internal links */}
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contacts">Contacts</Link>
            <Link href="/auth/login">Login</Link>
        </nav>
    );
}

export default NavBar;