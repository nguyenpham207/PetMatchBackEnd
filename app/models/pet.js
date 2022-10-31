const mongoose = require('mongoose')

const petSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		profile: {
			type: String,
			required: true,
		},
        rating: {
            type: Number,
            required: true
        },
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
	},
)



module.exports = mongoose.model('Pet', petSchema)