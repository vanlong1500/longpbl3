// import * as authService from '../services/auth'


export const insert = async (req, res) => {
    try {
        if (!name || !phone || !password) return res.status(400).json({
            err: 1,
            msg: 'thieu du lieu'
        })
        const response = await authService.registerService(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: ' fail at auth controller:' + error
        })
    }
}