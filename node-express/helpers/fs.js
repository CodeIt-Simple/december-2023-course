import fs from 'fs'

export const getAllUsers = () => fs.readFileSync("./users.json", "utf8");

export const changeJson = (array) => {
    fs.writeFileSync("./users.json", JSON.stringify(array));
}