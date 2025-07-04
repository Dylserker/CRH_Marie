import './profile.css';

function Profile() {
    return (
        <div className="profile-container">
            <h2>Mon Profil</h2>
            <div className="profile-info">
                <div className="profile-avatar">
                    <img src="https://via.placeholder.com/150" alt="Avatar" />
                </div>
                <div className="profile-details">
                    <h3>Nom d'utilisateur</h3>
                    <p>email@exemple.com</p>
                    <button className="edit-profile">Modifier le profil</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;