// Password Hashing

// "salt" rounds

// "supersecretpass" => "8fu34982hrjouhq3e908dyn9c8ay98dyhudan9p8y"

const bcrypt = require('bcrypt')

const plainTextPassword = "supersecrepass"
const saltRounds = 10

const init = async () => {
  // TODO: Hash password when a new user is created...
  const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds)
  console.log(hashedPassword)

  // TODO: Login logic
  // compare login form password with hash password
  const isCorrectPassword = await bcrypt.compare("supersecrepass", hashedPassword)
  console.log(`Is correct pw: ${isCorrectPassword}`)
}

init()