const dbConnection = require('../database/dbConnection');
const  { v4:uuidv4 } = require('uuid');

module.exports = {

    async index (request,response) {

        const user_id = request.headers.authorization;
        const notes = await dbConnection('notes')
            .where('user_id', user_id)
            .select('*');
        
        return response.json(notes);
    },

    async create (request,response) {
        const { name, body } = request.body;

        const user_id = request.headers.authorization;

        const datetime = Date.now()
        const id = uuidv4();

        await dbConnection ('notes').insert({
            id,
            name,
            body,
            datetime,
            user_id,
        });

        return response.status(200).json({success: `Note ${id} created successfully`});
    },

    async delete (request, response) {
        const { id } = request.params;
        const user = request.headers.authorization;

        const note = await dbConnection('notes')
            .where('id', id)
            .select('user_id')
            .first();

        if (note.user_id ==! user) {
            return response.status(401).json({ error: 'Operation not permitted'});
        }

        await dbConnection('notes').where('id', id).delete();

        return response.status(204).send();
    }
}