import users from "../database"

const verifyAuthMiddleware = (request, response, next) => {
    const {isAdmin} = request.body

    const isAdminUser = users.find(user => user.isAdmin === isAdmin )
    
    if(isAdminUser === false){
        return response
            .status(400)
            .json({
                message: "Access Denied"
            }) 
    }
    next();     
   
}

export default verifyAuthMiddleware