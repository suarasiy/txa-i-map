import { User } from './User';
import { Company } from './Company';

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

    addUserMarker(user: User): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng,
            }
        })
    }

    addCompanyMarker(company: Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: company.location.lat,
                lng: company.location.lng,
            }
        });
    }
}