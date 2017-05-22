import { isArray } from 'lodash';

import simulados from './simulados.js';


class FilterService {
  filterBy(attr, value) {
    let results;
    if (attr === 'assuntos') {
      results = this.filterBySubject(value);
    } else {
      results = this.filterByAttr(attr, value);
    }
    return results;
  }

  filterBySubject(value) {
    let result = [];
    simulados.map((item) => {
      return item.assuntos.map((arrayValue) => {
        if (arrayValue === value) result.push(item);
      });
    });

    return result;
  }

  filterByAttr(attr, value) {
    return simulados.filter((item) => item[attr] === value);
  }
}

const filterService = new FilterService();

export default filterService;
