
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
 const routerUser = require('./routers/user.router');
 const routerRelative = require('./routers/relative.router');
 const routerAdmin = require('./routers/admin.router');
 const middlewareJwt = require('./middlewares/jwt.middleware');

//var CronJob = require('cron').CronJob;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//mongoose
mongoose.connect('mongodb://localhost/doancuoi', {useNewUrlParser: true,
useUnifiedTopology: true});
//test mongoose 
console.log(mongoose.connection.readyState);
//mongo set
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//cors
app.use(cors());

//use routerUser

app.use('/admin',routerAdmin)
app.use('/relative',routerRelative)
app.use('/user',routerUser)


app.get('/', (req, res) => {
    res.send('haivlk')
  })

//   var job = new CronJob('*/5 * * * * *', function() {
//     console.log('You will see this message every second');
//   }, null, true, 'America/Los_Angeles');
//   job.start();
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} ${new Date}`)
})