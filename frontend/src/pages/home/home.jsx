import './home.css';

function Home() {
    return (
        <main className="home">
            <section className="hero">
                <h1>Bienvenue sur Mon Site</h1>
                <p>Découvrez nos services exceptionnels</p>
                <button className="cta-button">En savoir plus</button>
            </section>
            <section className="features">
                <h2>Nos Services</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Service 1</h3>
                        <p>Description du service 1</p>
                    </div>
                    <div className="feature-card">
                        <h3>Service 2</h3>
                        <p>Description du service 2</p>
                    </div>
                    <div className="feature-card">
                        <h3>Service 3</h3>
                        <p>Description du service 3</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;