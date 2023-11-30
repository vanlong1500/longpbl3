import db from "../models";
// import post from "../models/post";
// import post from "../models/post";

// const post =post
export const getPostsService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            //attributes: []  lấy các phần tử cần 
            post: ['imagesId', 'price', 'acreage', 'createdAt', 'address', 'descriptionId', 'title', 'cateloryCode', 'userId', 'overviewId']
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

export const getPostsLimitService = (page, { limmitPost, ...query }) => new Promise(async (resolve, reject) => {
    try {
        let offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const queries = {...query}
        const limit = +limmitPost || +process.env.LIMIT
        queries.limit=limit
        const response = await db.Post.findAndCountAll({
            where:query,
            raw: true,
            //attributes: []  lấy các phần tử cần 
            nest: true,

            ...queries,
            offset: offset * (+process.env.LIMIT) || 0,
            limit: +process.env.LIMIT,

            post: ['imagesId', 'price', 'acreage', 'createdAt', 'address', 'descriptionId', 'title', 'cateloryCode', 'userId', 'overviewId']
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
