const GuestForm = require('../models/guestform.model')

/*
exports.saveinfo = async (req, res) => {
    GuestForm.saveinfo(req.body)
        .then((data) => res.send(`Seems to be done ${data}`))
        .catch((err) => res.send(`There seems to be an error: ${err}`))
}
*/
exports.saveinfo = async (req, res) => {
    try {
        GuestForm.saveinfo(req.body).then((data) => res.send(`Seems to be done ${data}`)) /* does it require await? */
    } catch (err) {
        res.send(`There seems to be an error: ${err}`)
    }
}

exports.getinfo = async (req, res) => {
    const getInfo = await GuestForm.find({}, {_id: 0, __v: 0})
    res.send(getInfo)
}