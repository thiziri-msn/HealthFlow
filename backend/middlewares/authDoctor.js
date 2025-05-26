import jwt from 'jsonwebtoken'

// doctor authentification 
const authDoctor = async (req, res, next) => {
    try {
        const { dtoken } = req.headers
        if (!dtoken) {
            return res.status(401).json({ success: false, message: 'Accès non autorisé, veuillez vous reconnecter.' })
        }

        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)

        // S'assurer que req.body existe avant d’y ajouter userId
        if (!req.body) req.body = {}

        // token_decode._id || si ya un erreur ajoute cela au req.body.docId

        req.body.docId = token_decode.id
        next()

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authDoctor