const { Schema, model } = require('mongoose')

const guestFormSchema = new Schema(
    {
        name: { type: String, required: true },
        attendance: { type: Boolean, required: true },
        companion: { type: Boolean, required: false },
        compname: { type: String, required: false },
        staynight: { type: Boolean, required: true },
        foodpref: { type: String, required: true },
        compfoodpref: { type: String, required: false},
        party: { type: String, required: true }
    }
)

guestFormSchema.statics.saveinfo = async ({ name, attendance, companion, compname, staynight, foodpref, compfoodpref, party }) => {
    return new Promise(async (resolve, reject) => {
        const newForm = new GuestForm({
            name, 
            attendance, 
            companion, 
            compname, 
            staynight, 
            foodpref, 
            compfoodpref, 
            party
        })
        console.log(await newForm.save());
    })
}

const GuestForm = model('GuestFormModel', guestFormSchema)

module.exports = GuestForm