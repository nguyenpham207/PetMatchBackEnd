const mongoose = require('mongoose')
const meetSchema = require('./meet')
const ratingSchema = require('./rating')


const petSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: false,
		},
		typeOfPet: {
			type: String,
			required: true,
		},
		breed: {
			type: String,
			required: true,
		},
		likes: {
			type: String,
			required: true,
		},
		available: {
			type: Boolean,
			required: true,
		},
		meets: [meetSchema],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
        	ref:'User',
		},
		rating: [ratingSchema],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Pet', petSchema)