import db from '../models'
import bcrypt from 'bcryptjs'
import { v4 } from 'uuid'

import genarateCode from '../ultis/ganerateCode'

require('dotenv').config()

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const insertService = () => new Promise(async (resolve, reject) => {
    try {
        dataBody.forEach(async (item) => {
            let postId = v4()
            let userId = v4()
            let cateloryCode = genarateCode()
            let imagesId = v4()
            let overviewId = v4()
            await db.Post.create({
                id: postId,
                title: item?.header?.post?.title
            })
            await db.Overview.create({
                id: overviewId,
                title: item?.header?.post?.title
            })
            await db.User.create({
                id: userId,
                title: item?.header?.post?.title
            })
            await db.Images.create({
                id: imagesId,
                title: item?.header?.post?.title
            })
            await db.Category.create({
                id: cateloryCode,
                title: item?.header?.post?.title
            })
        });

    } catch (error) {
        reject(error)
    }
})