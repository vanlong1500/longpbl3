import db from "../models";


export const getPostsService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true    
                                        //attributes: []  lấy các phần tử cần 
        })
        resolve({
            err: resolve ? 0 : 1,
            msg: resolve ? 'ok' : 'fail',
            response
        })

    } catch (error) {
        reject(error)
    }
})