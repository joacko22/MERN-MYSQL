import  express  from 'express';
import {PORT} from './config.js';
import cors from 'cors';
import indexRoutes from '../routes/index.routes.js';
import taskRoutes from '../routes/task.routes.js';
const app = express();
app,use(cors());// cors es un middleware que permite que una aplicacion se pueda comunicar con otra a traves de una API REST
app.use(express.json());
app.use(indexRoutes);
app.use(taskRoutes);

 

app.listen(PORT)



