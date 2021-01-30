import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const div_map: Element = document.querySelector('#map');

const user = new User();
const company = new Company();
const customMap = new CustomMap(div_map);

customMap.addMarker(user);
customMap.addMarker(company);
