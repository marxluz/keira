import Base from './base';

export default class extends Base{

  is_valid(value, extra){

    if(!value || value == ''){
      return Promise.resolve(false);
    }

    return Promise.resolve(true);
  }
} 