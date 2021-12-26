import { dailyReport } from './entities';

export default class PredictBusiness {
    
    predict(days: number) {
        const transmissionRate: number = 1.006;
        let infecteds: number = 1;
        let reportList: dailyReport[] = [];
        let counter: number;

        if (!Number.isInteger(days)) {
            throw new Error(
                'Please, send days as an integer number.'
            );
        }

        for (
            counter = 0;
            counter < days;
            counter++
        ) {
            infecteds =
                infecteds *
                transmissionRate ** (counter + 1);
            const roundedInfecteds: number =
                Math.round(infecteds);

            const dailyReport: dailyReport = {
                day: counter + 1,
                infecteds: roundedInfecteds,
            };

            reportList.push(dailyReport);
        }

        reportList = reportList.map(
            (dailyReport, index, reportList) => {
                dailyReport = this.corrector(
                    dailyReport,
                    index,
                    reportList
                );

                return dailyReport;
            }
        );

        return reportList;
    }

    corrector(
        dailyReport: dailyReport,
        index: number,
        reportList: dailyReport[]
    ): dailyReport {
        if (index > 14) {
            dailyReport = {
                day: dailyReport.day,
                infecteds:
                    dailyReport.infecteds -
                    reportList[index - 15]
                        .infecteds,
            };
            return dailyReport;
        } else {
            return dailyReport;
        }
    }
}
