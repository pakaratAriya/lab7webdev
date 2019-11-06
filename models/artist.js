let db = require('../util/database')
const username = 'a01010730'
const password = 'password'

let getAllArtist = () => {
    return db.execute('SELECT * FROM artists')
}

let addArtist = artistBody => {
    const {name, about, url} = artistBody
    let sql = "Insert into artists (name, about, url) values ('" + name+ "','"+ about+ "','" + url + "')";
    return db.execute(sql)
}

let searchArtist = searchName => {
    console.log(searchName)
    let sql = `SELECT * FROM artists WHERE name LIKE '%${searchName}%'`
    return db.execute(sql)
}

let deleteArtist = index => {
    let sql = "DELETE FROM artists WHERE id=" + index;
    return db.execute(sql);
}

let authentication = (inputName,inputPassword) => {
    if(inputName.toLowerCase()==username && inputPassword == password){
        return 200
    }else{
        return 400
    }
}

module.exports = {
    getAllArtist: getAllArtist,
    addArtist: addArtist,
    deleteArtist: deleteArtist,
    search: searchArtist,
    auth:authentication
}