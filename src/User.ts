import faker from 'faker';
import { Mappable } from './CustomMap';

// Prevent to use default export as possible
// in TypeScript

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
        <p>
            User Name :
            <span style="padding: 3px 6px; border: 1px solid lightblue;">
            ${this.name}
            </span>
        </p>
    </div>
    `;
  }
}
