import database from "../database"

const deleteUserService = async (id) => {
    try {
      const res = await database.query(
        "DELETE FROM users WHERE id = $1 RETURNING *",
        [id]
      )  
      if(res.rows.length === 0){
        throw "User not found"
      }
      return "User deleted"
    } catch (error) {
        throw new Error(error)
    }
    
}

export default deleteUserService