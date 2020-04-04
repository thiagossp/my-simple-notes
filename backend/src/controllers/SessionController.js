const dbConnection = require('../database/dbConnection');
const cryptoPassword = require('../utils/cryptoPassword');

module.exports = {

    async create(request, response) {
        const { login, password } = request.body;
        const securePassword = await cryptoPassword(password, login);
        const user = await dbConnection('users')
        .where('login', login)
        .where('password', securePassword)
        .select('login')
        .first()

        if (!user) {
            return response.status(400).json({error: 'User or password is wrong'})
        }

        return response.json(user);
    }
}