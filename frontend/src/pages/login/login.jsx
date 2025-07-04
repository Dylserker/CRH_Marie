import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    return (
        <div className="login-container">
            <h2>Connexion</h2>
            <form className="login-form">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Mot de passe" required />
                <button type="submit">Se connecter</button>
            </form>
            <p className="auth-redirect">
                Pas encore de compte ? <Link to="/register">S'inscrire</Link>
            </p>
        </div>
    );
}

export default Login;