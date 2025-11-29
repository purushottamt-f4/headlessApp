import queryExe from '../../helper/dbconnection.js'

export async function checkUrlExistByUrl(urls) {
    const sql = "SELECT id,code,target_url,user_id FROM urls where target_url=?";
    const existingRedirection = await queryExe(sql, [urls]);
    return existingRedirection;
}
export async function checkUrlExistByShortUrl(urls) {
    const sql = "SELECT id,code,target_url,user_id FROM urls where code=?";
    const existingRedirection = await queryExe(sql, [urls]);
    return existingRedirection;
}
export async function checkUrlExistByUser(user) {
    const sql = "SELECT id,code,target_url,user_id FROM urls where user_id=?";
    const existingUserRedir = await queryExe(sql, [user]);
    return existingUserRedir;

}

export async function checkUrlExistByUserShort(user, code) {
    const sql = "SELECT id,code,target_url,user_id FROM urls where user_id=? and code=?";
    const existingUserRedir = await queryExe(sql, [user, code]);
    return existingUserRedir;

}


export async function removeUrl(user, code) {
    const sql = "delete FROM urls where user_id=? and code=?";
    const existingUserRedir = await queryExe(sql, [user, code]);
    return existingUserRedir;

}

export async function createshortUrl(saveData) {
    return await queryExe('INSERT INTO urls SET ?', [saveData]);
}