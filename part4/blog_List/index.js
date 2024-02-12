const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')
const blogsRouter = require('./controller/blogs')

app.use(cors())
app.use(express.json())

const BlogList = require('./model/blog')


app.use('/api/blogs', blogsRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})