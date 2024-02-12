const logger = require('../utils/logger') 
const mongoose = require('mongoose')
const url = process.env.MONGODB_URI
mongoose.connect(url).then(res => logger.info('Database connected'))

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

// personSchema.set("toJSON", {
//     transform: (document, returnObj) => {
        
//         delete returnObj._id;
//         delete returnObj.__v;
//     },
// });

module.exports = mongoose.model('Blogs', blogSchema)
