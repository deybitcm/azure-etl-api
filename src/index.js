import express from 'express'
import morgan from 'morgan'
import router from './routes/index.routes.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//api routes
app.use('/api/data',router);

//iniciar servidor
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})