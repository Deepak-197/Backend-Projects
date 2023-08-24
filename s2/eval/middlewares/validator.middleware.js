
const validator = (req, res, next) => {

    const {role, password} = req.query;
    console.log(req.query)

    if(password === 5567){
        if(role === 'admin'){
            next();
        }else{
            res.send("You are not authorized to do this operation.")
        }
    }else{
        res.send("Wrong Password")
    }
}

module.exports = {
    validator
}