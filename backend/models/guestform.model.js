const { Schema, model } = require('mongoose')

const bodySchema = new Schema(
    {
        name: { type: String, required: true },
        attendance: { type: Boolean, required: true },
        companion: { type: Boolean, required: true },
        compname: { type: String, required: true },
        staynight: { type: Boolean, required: true },
        foodpref: { type: String, required: true },
        compfoodpref: { type: String, required: true},
        party: { type: String, required: true }
    }
)

formSchema.statics.saveinfo = async ({ name, attendance, companion, compname, staynight, foodpref, compfoodpref, party }) => {
    return new Promise(async (resolve, reject) => {
        const newForm = new Form({
            name, 
            attendance, 
            companion, 
            compname, 
            staynight, 
            foodpref, 
            compfoodpref, 
            party
        })

        newForm.save((err) => {
            if (err) return reject(err)
            resolve(newForm)
        })
    })
}

const GuestForm = model('BodyTrackModel', bodySchema)

module.exports = GuestForm