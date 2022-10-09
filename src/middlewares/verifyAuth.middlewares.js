import users from "../database"

const verifyAuthMiddleware = (request, response, next) => {
    const {isAdmin} = request.query

    if(isAdmin === false){
        return response
        .status(400)
        .json({
            message: "This email address is already being used"
        })
    }
    next();
   
}

export default verifyAuthMiddleware