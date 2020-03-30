const dbConnection = require('../database/dbConnection')

module.exports = {

    async create(request, response) {
        const { login, password } = request.body;

        const checkLogin = await dbConnection('users').select('login').where('login', login);

        if (checkLogin.length > 0) {
            return response.status(200).json({error: 'Login name is not available'});
        }

        await dbConnection('users').insert({
            login,
            password,
        });

        return response.status(200).json({success: 'User created successfully'});
    },

    async index(request, response) {
        const users = await dbConnection('users').select('login');
        
        return response.json(users);
    },
}