import db from "../models";
// import post from "../models/post";
// import post from "../models/post";

// const post =post
export const getPostsService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true    ,
                                        //attributes: []  lấy các phần tử cần 
         post:['imagesId','price','acreage','createdAt','address','descriptionId','title','cateloryCode','userId','overviewId']
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

// export const getNewPostsService = () => new Promise(async (resolve, reject) => {
//     try {
//         const response = await db.Post.findAll({
//             raw: true  ,  
//                                         //attributes: []  lấy các phần tử cần 
//             nest : true,
//             offset:0,
//             order:[['createdAt','DESC']],
//             limit:+process.env.LIMIT,
//             // include:[
//             //     // {model: db.Post,as:'Post',attributes:[]},
//             //     // {model: db.Attibute,as:'Attibute',attributes:['price','acreage','published','hashtag']},
//             //     // {model: db.User,as:'User',attributes:['name','phone']},


//             // ],
//              post:['imagesId','price','acreage','createdAt','address','descriptionId','title','cateloryCode','userId','overviewId']
//         })
//         resolve({
//             err: resolve ? 0 : 1,
//             msg: resolve ? 'ok' : 'fail',
//             response
//         })

//     } catch (error) {
//         reject(error)
//     }
// })
