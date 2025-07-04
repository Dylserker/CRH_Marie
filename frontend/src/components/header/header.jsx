import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header className="main-header">
            <nav>
                <Link to="/" className="logo">
                    <i className="fas fa-code logo-icon"></i>
                    <span>Mon Site</span>
                </Link>
                <ul className="nav-links">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/profile">Profil</Link></li>
                    <li><Link to="/resume">CV</Link></li>
                    <li><Link to="/job_offer">Offres</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                </ul>
                <div className="nav-auth">
                    <Link to="/login">
                        <i className="fas fa-user-circle profile-icon"></i>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;