const root = '/users';

module.exports = {
    getAllUsers: `${root}`,
    getUserById: `${root}/:id`,
    createUser: `${root}/create`,
    updateUser: `${root}/:id`,
    deleteUser: `${root}/:id`,
}