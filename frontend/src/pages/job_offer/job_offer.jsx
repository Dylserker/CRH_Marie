import './job_offer.css';

function JobOffer() {
    return (
        <div className="job-offer-container">
            <h2>Offres d'emploi</h2>
            <div className="job-filters">
                <input type="text" placeholder="Rechercher un poste..." />
                <select>
                    <option>Tous les types</option>
                    <option>CDI</option>
                    <option>CDD</option>
                    <option>Stage</option>
                </select>
            </div>
            <div className="job-list">
                <div className="job-card">
                    <h3>Développeur Full-Stack</h3>
                    <p className="company">Entreprise ABC</p>
                    <p className="location">Paris, France</p>
                    <p className="type">CDI</p>
                    <button className="apply-btn">Postuler</button>
                </div>
                <div className="job-card">
                    <h3>Développeur Frontend React</h3>
                    <p className="company">Startup XYZ</p>
                    <p className="location">Lyon, France</p>
                    <p className="type">CDD</p>
                    <button className="apply-btn">Postuler</button>
                </div>
            </div>
        </div>
    );
}

export default JobOffer;