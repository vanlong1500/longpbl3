import db from '../models'

//get CURRent
export const getOne = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { id },
            raw: true,
            user: ['id','name','phone','createdAt','updatedAt']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'ok' : ' faill to get categories',
            response
        })
    } catch (error) {
        reject(error)
    }
})