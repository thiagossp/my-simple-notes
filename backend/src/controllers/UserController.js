const dbConnection = require('../database/dbConnection');
const cryptoPassword = require('../utils/cryptoPassword');
const  { v4:uuidv4 } = require('uuid');

module.exports = {
    
    async create(request, response) {
        const { email, password } = request.body;

        const emailNotAvailable = await dbConnection('users').select('email').where('email', email).first();

        if (emailNotAvailable) {
            return response.status(400).json({error: 'This email is already in use'});
        }

        const securePassword = await cryptoPassword(password, email);
        const id = uuidv4();

        await dbConnection('users').insert({
            id,
            email,
            password:securePassword,
        });

        return response.status(200).json({
            'message': 'User created successfully',
            'id': id,
            'email': email
        });
    },

    async index(request, response) {
        const { email } = request.body;
        if (email) {
            const users = await (await dbConnection('users').where('email', email).select('id','email').first());
            return response.json(users);
        }
        const users = await dbConnection('users');
        return response.json(users);
    },
}