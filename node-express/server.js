import express from "express";
import cors from "cors";
import { changeJson, getAllUsers } from "./helpers/fs.js";
const port = 3000;

const app = express();

app.use(express.json());
// dangerous
app.use(cors());

// GET
// get all users from json
app.get('/', (req, res) => {
    const allUsers = JSON.parse(getAllUsers())
    res.status(200).send(allUsers)
})

// GET
// get a single user by id from the params
app.get('/users/:id', (req, res) => {
    const allUsers = JSON.parse(getAllUsers())
    const id = req.params.id
    const user = allUsers.find(usr => usr.id === +id)
    res.status(200).send(user)

})

// POST
// create user 
app.post('/createUser/', (req, res) => {
    const allUsers = JSON.parse(getAllUsers())
    const userForm = {...req.body}
    allUsers.push(userForm)
    changeJson(allUsers)
    res.status(200).send(allUsers)


})

//PUT
// updates a user
app.put('/updateUser', (req, res) => {
    const allUsers = JSON.parse(getAllUsers());
    const userUpdatesForm = {...req.body}
    const userToBeUpdatedIndex = allUsers.findIndex(user => user.id === userUpdatesForm.id)
    allUsers.splice(userToBeUpdatedIndex, 1, userUpdatesForm)
    changeJson(allUsers)
    res.status(200).send(allUsers)

})

//DELETE
// DELETES a user

app.delete('/deleteUser/:id', (req, res) => {
    const allUsers = JSON.parse(getAllUsers());
    const id = req.params.id

    const allUsersAfterDeletion = allUsers.filter(user => user.id !== +id)
    changeJson(allUsersAfterDeletion)
    res.status(200).send(allUsersAfterDeletion)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
