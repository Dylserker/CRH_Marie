import './header.css';

function Header() {
    return (
        <header className="main-header">
            <nav>
                <div className="logo">Mon Site</div>
                <ul className="nav-links">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about">À propos</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;