const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobdeskSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('jobdesk', jobdeskSchema)