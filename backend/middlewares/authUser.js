import jwt from 'jsonwebtoken'

// user authentification 
const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.status(401).json({ success: false, message: 'Accès non autorisé, veuillez vous reconnecter.' })
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        // S'assurer que req.body existe avant d’y ajouter userId
        if (!req.body) req.body = {}

        req.body.userId = token_decode._id || token_decode.id

        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({ success: false, message: 'Token invalide ou expiré.' })
    }
}

export default authUser

