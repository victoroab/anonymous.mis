const User = require('../../models/users/user')

const createUserService = async (username) => {
  try {
    const newUser = await User.create({
      username,
    })
    return newUser
  } catch (e) {
    throw new Error(e)
  }
}

const createUserHandler = async (req, res) => {
  const { username } = req.body
  try {
    const user = await createUserService(username)
    res.status(200).json({ user: user.username })
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = createUserHandler
