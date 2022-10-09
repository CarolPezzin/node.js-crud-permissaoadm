import users from "../database"

const listProfileUserService = (id) => {
  const userProfile = users.findIndex((user) => user.id === id)
  const userFilterProfile = users[userProfile]
  console.log(userFilterProfile)
}

export default listProfileUserService