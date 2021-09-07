const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* Start Controllers Here */
const usersController = require('./controllers/Users') // add users controller path './controllers/FILE_NAME'
app.use('/api/users', usersController)

const ticketsController = require('./controllers/Tickets') // add tickets controller path './controllers/FILE_NAME'
app.use('/api/tickets', ticketsController)
/* End Controllers Here */

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
