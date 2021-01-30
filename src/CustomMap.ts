import { User } from './User';
import { Company } from './Company';

// Instructions on every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
}
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(div_map: Element) {
        this.googleMap = new google.maps.Map(div_map, {
            zoom: 1,
            center: {
                lat: 1,
                lng: 1,
            }
        });
    }

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        })
    }
}