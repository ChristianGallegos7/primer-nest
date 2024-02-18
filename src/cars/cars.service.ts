import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {


    private cars = [
        {
            id: 1,
            brand: 'TOYOTA',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'FERRARI',
            model: 'La Ferrari'
        },
        {
            id: 3,
            brand: 'KIA',
            model: 'KIA MODELO M16'
        },

    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {
        return this.cars.find(car => car.id === id)
    }

}
