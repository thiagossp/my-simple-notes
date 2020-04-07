const dbConnection = require('../database/dbConnection');
const cryptoPassword = require('../utils/cryptoPassword');

module.exports = {

    async create(request, response) {
        const { email, password } = request.body;
        const securePassword = await cryptoPassword(password, email);
        const user = await dbConnection('users')
        .where('email', email)
        .where('password', securePassword)
        .select('id','email')
        .first()

        if (!user) {
            return response.status(400).json({error: 'Email or password is wrong'})
        }

        return response.json(user);
    }
}