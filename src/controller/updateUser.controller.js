import updateUserService from "../services/updateUser.services";

const updateUserController = async (request, response) => {
    const {id} = request.params
    const {name,email} = request.body

    try {
        const updateUser = await updateUserService(id, name, email)
        return response.json(updateUser)
        
    } catch (error) {
        return response.status(400).json(error.message)
    }

}

export default updateUserController