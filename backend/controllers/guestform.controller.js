const GuestForm = require('../models/guestform.model')

exports.saveinfo = async (req, res) => {
    GuestForm.saveinfo(req.body)
        .then((data) => res.send(`Seems to be done ${data}`))
        .catch((err) => res.send(`There seems to be an error: ${err}`))
}

exports.getinfo = async (req, res) => {
    const getInfo = await Body.find({}, {_id: 0, __v: 0})
    res.send(getInfo)
}