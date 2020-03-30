const dbConnection = require('../database/dbConnection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index (request,response) {

        const user_login = request.headers.authorization;
        const notes = await dbConnection('notes')
            .where('user_login', user_login)
            .select('*');
        
        return response.json(notes);
    },

    async create (request,response) {
        const { name, body } = request.body;

        const user_login = request.headers.authorization;

        const datetime = Date.now()
        const id = generateUniqueId();

        await dbConnection ('notes').insert({
            id,
            name,
            body,
            datetime,
            user_login,
        });

        return response.status(200).json({success: `Note ${id} created successfully`});
    }
}