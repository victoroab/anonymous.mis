const User = require('../../models/users/user')

const createUserService = async (name) => {
  try {
    const newUser = await User.create({
      name,
    })
    return newUser
  } catch (e) {
    throw new Error(e)
  }
}

const createUserHandler = async (req, res) => {
  const { name } = req.body
  try {
    createUserService(name)
    res.sendStatus(200)
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = createUserHandler
