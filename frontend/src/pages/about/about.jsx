import './about.css';

function About() {
    return (
        <div className="about-container">
            <h2>À propos de nous</h2>
            <div className="about-content">
                <section className="about-section">
                    <h3>Notre Mission</h3>
                    <p>Connecter les talents avec les meilleures opportunités professionnelles</p>
                </section>

                <section className="about-section">
                    <h3>Nos Services</h3>
                    <div className="services-grid">
                        <div className="service-card">
                            <h4>Recherche d'emploi</h4>
                            <p>Trouvez le job qui vous correspond</p>
                        </div>
                        <div className="service-card">
                            <h4>Gestion de CV</h4>
                            <p>Créez et gérez votre CV en ligne</p>
                        </div>
                        <div className="service-card">
                            <h4>Mise en relation</h4>
                            <p>Connectez-vous avec des recruteurs</p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h3>Contact</h3>
                    <div className="contact-info">
                        <p>Email: contact@example.com</p>
                        <p>Téléphone: 01 23 45 67 89</p>
                        <p>Adresse: 123 rue Example, 75000 Paris</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;