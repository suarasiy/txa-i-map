import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>${this.name}</h1>
        <p>
            <span style="font-weight: bold">
            Catch phrase :
            </span>
            ${this.catchPhrase}
        </p>
    </div>
      `;
  }
}
