let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
]

const getUsers = (req, res) => {
  res.json(users);
}

const createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    address: req.body.address,
  };

  users.push(newUser);
  res.status(201).json(newUser);
}

module.exports = {
  getUsers,
  createUser,
}