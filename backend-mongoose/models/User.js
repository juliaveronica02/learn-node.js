const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    // add reference to join multiple collection by id
    jobdeskId: {
        type: Schema.Types.ObjectId,
        ref: 'jobdesk'
    },
    // add reference to join multiple collection by id
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'company'
    },
})

module.exports = mongoose.model('user', userSchema)