import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header className="main-header">
            <nav>
                <div className="logo">Mon Site</div>
                <ul className="nav-links">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/profile">Profil</Link></li>
                    <li><Link to="/resume">CV</Link></li>
                    <li><Link to="/job_offer">Offres</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/login">Connexion</Link></li>
                    <li><Link to="/register">Inscription</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;