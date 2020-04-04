const dbConnection = require('../database/dbConnection')
const cryptoPassword = require('../utils/cryptoPassword');

module.exports = {

    async create(request, response) {
        const { login, password } = request.body;

        const loginNotAvailable = await dbConnection('users').select('login').where('login', login).first();

        if (loginNotAvailable) {
            return response.status(400).json({error: 'Login name is not available'});
        }

        const securePassword = await cryptoPassword(password, login);

        await dbConnection('users').insert({
            login,
            password:securePassword,
        });

        return response.status(200).json({success: 'User created successfully'});
    },

    async index(request, response) {
        const { login } = request.body;
        if (login) {
            const users = await (await dbConnection('users').where('login', login).select('login').first());
            return response.json(users);
        }
        const users = await dbConnection('users');
        return response.json(users);
    },
}