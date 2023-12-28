const con = require('./db');
class messageController {

     static saveMessage = async (req, res) => {
        let name = req.body.name;
        let email = req.body.email;
        let subject = req.body.subject;
        let message = req.body.message;
        let sql = `INSERT INTO messages (name, email, subject, message) VALUES ('${name}', '${email}', '${subject}', '${message}')`;
    
        const result = await con.execute(sql, function (err, result, fields) {
            if (err){
                console.log(err.message);
                return res.status(200).json({
                    "status": "Error Occurred "
                });
            };
            console.log(result.affectedRows);
            return res.status(200).json({
                "status": "Saved "
            });
        });
        // next();
    }

}
module.exports = {
    messageController
}