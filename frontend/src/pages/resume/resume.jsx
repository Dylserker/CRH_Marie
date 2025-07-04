import './resume.css';

function Resume() {
    return (
        <div className="resume-container">
            <h2>Mon CV</h2>
            <div className="resume-content">
                <section className="resume-section">
                    <h3>Expérience professionnelle</h3>
                    <div className="experience-item">
                        <h4>Développeur Web</h4>
                        <p>Entreprise XYZ • 2020 - Présent</p>
                        <p>Description des responsabilités et réalisations...</p>
                    </div>
                </section>

                <section className="resume-section">
                    <h3>Formation</h3>
                    <div className="education-item">
                        <h4>Master en Informatique</h4>
                        <p>Université ABC • 2018 - 2020</p>
                    </div>
                </section>

                <section className="resume-section">
                    <h3>Compétences</h3>
                    <div className="skills-list">
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">CSS</span>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Resume;