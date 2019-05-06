const bcrypt = require("bcryptjs")

const getSession = (request,response) => {
    response.json(request.session.user)
}
const login = async (request,response) => {
    const db = request.app.get("db")
    const {username, password} = request.body
    const user = await db.get_user(username).catch(error => {
        console.log(error);
        response.status(401).json("Something went wrong")
    })
    if(!user[0]) {
        response.status(401).json("Incorrect username or password")
    } else {
        const authenticated = await bcrypt.compareSync(password, user[0].password)
        if (!authenticated) {
          response.status(401).json("Incorrect username or password") 
        } else {
            request.session.user = {
                id: user[0].user_id,
                username: username,
                isAdmin: user[0].is_admin
            }
            console.log(request.session.user)
            response.json(request.session.user)
        }
    }

}
const register = async (request,response) => {
    const {username , password , isAdmin} = request.body;
    const db = request.app.get("db");

    let user = await db.get_user(username).catch(error => console.log(error))

    if (user[0]) {
        response.status(403).json("Username already taken")
    } else {
        let hash = await bcrypt.hash(password,10)
        db.add_user([username,hash,isAdmin]).catch(error => console.log(error))
        
        request.session.user = {
            username,
            isAdmin: isAdmin
        }
        response.json(request.session.user)
    }
}
const logout = (request,response) => {
    request.session.destroy()
    response.json(request.session)
}



module.exports = {
    login,
    getSession,
    logout,
    register
}