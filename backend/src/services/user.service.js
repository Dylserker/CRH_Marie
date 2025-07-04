const User = require('../models/user.model');
const bcrypt = require('bcrypt');

class UserService {
    async createUser(userData) {
        try {
            const user = await User.create(userData);
            return this.sanitizeUser(user);
        } catch (error) {
            throw new Error(`Erreur lors de la création de l'utilisateur: ${error.message}`);
        }
    }

    async findUserByEmail(email) {
        try {
            return await User.findOne({ email });
        } catch (error) {
            throw new Error(`Erreur lors de la recherche par email: ${error.message}`);
        }
    }

    async findUserById(id) {
        try {
            const user = await User.findById(id);
            return user ? this.sanitizeUser(user) : null;
        } catch (error) {
            throw new Error(`Erreur lors de la recherche par ID: ${error.message}`);
        }
    }

    async updateUser(id, updateData) {
        try {
            if (updateData.password) {
                updateData.password = await bcrypt.hash(updateData.password, 10);
            }
            const user = await User.findByIdAndUpdate(id, updateData, { new: true });
            return this.sanitizeUser(user);
        } catch (error) {
            throw new Error(`Erreur lors de la mise à jour: ${error.message}`);
        }
    }

    async deleteUser(id) {
        try {
            return await User.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(`Erreur lors de la suppression: ${error.message}`);
        }
    }

    async getAllUsers() {
        try {
            const users = await User.find({});
            return users.map(user => this.sanitizeUser(user));
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des utilisateurs: ${error.message}`);
        }
    }

    sanitizeUser(user) {
        const sanitized = user.toObject();
        delete sanitized.password;
        return sanitized;
    }
}

module.exports = new UserService();