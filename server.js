import express from 'express'
import path from 'path'
import { print } from './print'

const app = express()
const port = 3000

print(`This is the port number:${port}`)

app.use(express.static(path.join(__dirname, '../dist')))

app.listen(3000, function () {
	console.log(`Listening on port ${port}...`)
})
