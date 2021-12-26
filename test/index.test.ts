import predict from '../src/business';
import PredictController from '../src/controller';
import { Request } from 'express';
import PredictBusiness from '../src/business';

const predictController = new PredictController()
const predictBusiness = new PredictBusiness()

describe('Testando a função predict', () => {
    test('Testando se retorna uma lista', () => {
        expect(predictBusiness.predict(1)).toEqual([
            {
                day: 1,
                infecteds: 1,
            },
        ]);
    });
    test('Testando se retorna um lista corrigida a partir do dia 15', () => {
        expect(predictBusiness.predict(20)).toEqual([
            {
              day: 1,
              infecteds: 1
            },
            {
              day: 2,
              infecteds: 1
            },
            {
              day: 3,
              infecteds: 1
            },
            {
              day: 4,
              infecteds: 1
            },
            {
              day: 5,
              infecteds: 1
            },
            {
              day: 6,
              infecteds: 1
            },
            {
              day: 7,
              infecteds: 1
            },
            {
              day: 8,
              infecteds: 1
            },
            {
              day: 9,
              infecteds: 1
            },
            {
              day: 10,
              infecteds: 1
            },
            {
              day: 11,
              infecteds: 1
            },
            {
              day: 12,
              infecteds: 2
            },
            {
              day: 13,
              infecteds: 2
            },
            {
              day: 14,
              infecteds: 2
            },
            {
              day: 15,
              infecteds: 2
            },
            {
              day: 16,
              infecteds: 1
            },
            {
              day: 17,
              infecteds: 1
            },
            {
              day: 18,
              infecteds: 2
            },
            {
              day: 19,
              infecteds: 2
            },
            {
              day: 20,
              infecteds: 3
            }
          ]);
    });

    test('Testando se a verificação de número inteiro está sendo feitas no predict', () => {

        try {
          predictBusiness.predict(2.5)
        } catch (error:  any) {
            expect(error.message).toEqual("Please, send days as an integer number.")
        }
       
    })
});

