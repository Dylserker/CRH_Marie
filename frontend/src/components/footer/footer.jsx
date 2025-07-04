import './footer.css';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <p>&copy; 2024 Mon Site. Tous droits réservés.</p>
                <div className="footer-links">
                    <a href="/mentions-legales">Mentions légales</a>
                    <a href="/confidentialite">Politique de confidentialité</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;