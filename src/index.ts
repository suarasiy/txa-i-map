import { User } from './User';
import { CustomMap } from './CustomMap';

const div_map: Element = document.querySelector("#map");

const user = new User();
const customMap = new CustomMap(div_map);

customMap.addUserMarker(user);