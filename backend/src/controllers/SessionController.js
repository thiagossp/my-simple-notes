const dbConnection = require('../database/dbConnection');

module.exports = {

    async create(request, response) {
        const { login, password } = request.body;
        const user = await dbConnection('users')
        .where('login', login)
        .where('password', password)
        .select('login')
        .first()

        if (!user) {
            return response.status(400).json({error: 'User or password is wrong'})
        }

        return response.json(user);
    }
}