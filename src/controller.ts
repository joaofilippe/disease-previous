import { Response, Request } from 'express';
import PredictBusiness from './business';
import { dailyReport } from './entities';

export default class PredictController {

    async getInfectReport(
        req: Request,
        res: Response
    ) {
        const predictBusiness = new PredictBusiness()
        const days = Number(req.query.days);
    
        try {
            const list: dailyReport[] = await predictBusiness.predict(days)
    
            res.status(200).send({ list });
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

}


