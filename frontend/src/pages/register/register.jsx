import { Link } from 'react-router-dom';
import './register.css';

function Register() {
    return (
        <div className="register-container">
            <h2>Inscription</h2>
            <form className="register-form">
                <input type="text" placeholder="Nom" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Mot de passe" required />
                <input type="password" placeholder="Confirmer le mot de passe" required />
                <button type="submit">S'inscrire</button>
            </form>
            <p className="auth-redirect">
                Déjà un compte ? <Link to="/login">Se connecter</Link>
            </p>
        </div>
    );
}

export default Register;