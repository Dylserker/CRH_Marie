const UserService = require('../services/user.service');
const { generateToken } = require('../utils/token');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserService.findUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.json({ token: generateToken(user) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { login };