const jwt=require('jsonwebtoken');

module.exports=function(req,res,next) {
    const token=req.header('authtoken');
    if(!token) return res.status(401).send('Access denied');
    try {
        let val = token.replace(/^Bearer\s/, '');

        const userVerified=jwt.verify(val,'key');
        req.user = userVerified._id;
        next();
    }
    catch(err) {
        res.status(400).send('Invalid token');
    }

}

