import { app } from './app'
import getInfectReport from './controller'
import PredictController from './controller';

const predictController = new PredictController()

app.get('/infecteds/', predictController.getInfectReport)