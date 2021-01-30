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
}