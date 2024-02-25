const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
pst = [
	{		
	name:"mohammed"
	},
	{
	name:"simo"
	}
]

router.post('/login', (req, res) => {
	const username = req.body.username
	const user = {name: username}
	// const usr = pst.filter(x => x.name == username)
	// if (user[0])
	// console.log(usr)
	// console.log(user)
	const token = jwt.sign(user, "my_scrt")
	res.json({Token:token})
});

module.exports = router;