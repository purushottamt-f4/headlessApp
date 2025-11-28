import  queryExe  from '../../helper/dbconnection.js'

export async function checkUserExist(email){
const sql = "SELECT id,first_name,last_name,email,salt,password FROM users where email=?";
    const existingUser = await queryExe(sql,[email]);
return existingUser;

}

export async function createUser(saveData) {
    return await queryExe('INSERT INTO users SET ?',[saveData]);
}