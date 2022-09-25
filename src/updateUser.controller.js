import updateUserService from "../services/updateUser.services";

const updateUserController = (request, response) => {
    const {id, updated_at} = request.params
    const {name,email} = request.body

    const updateUser = updateUserService(id, name, email, updated_at)
    console.log(updateUser)
    return response.json(updateUser)
}

export default updateUserController