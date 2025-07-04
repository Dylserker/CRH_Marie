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
        </div>
    );
}

export default Login;