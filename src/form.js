import InputBase from './input/base';

export default class{

  constructor(){
  
    this.elements   = [];
    this.validators = [];
  }

  add(element){
  
    if(element instanceof InputBase){
      this.elements.push(element);
    }
  }

  get_elements(){

    let elements = [];

    for(let element of this.elements){
      elements = elements.concat(element.get_elements());
    }

    return elements;
  }

  add_validator(validator){
  
    this.validators.push(validator);
  }

  is_valid_form(extra_context){
  
    let promises = [];
    let values   = this.get_values();
    let v_clone  = [];

    this.validators.forEach(validator => v_clone.push(validator));
    v_clone.reverse();

    let v_func = function(validator){
    
      if(!validator) return Promise.resolve(true);

      return validators.is_valid(values, extra_context).then(resp => {
      
        if(!resp) return Promise.resolve(false);

        let next_validator = v_clone.pop();

        return v_func(next_validator);
      });
    }

    return v_func(v_clone.pop());
  }

  is_valid(extra_context){

    let promises = [];

    this.elements.forEach(element => {
      promises.push(element.is_valid(extra_context));
    });

    return Promise.all(promises).then((data) => {
    
      let args = Array.prototype.slice.call(data);
      let res  = args.indexOf(false) < 0;

      if(!res) return Promise.resolve(false);
        
      return this.is_valid_form(extra_context);
    });
  }

  set_values(values){
  
    this.elements.forEach(element => {
    
      let name = element.get_name();
      if(values.hasOwnProperty(name)){
        element.set_value(values[name]);
      }
    });
  }

  get_values(){
  
    let values = {};
    
    this.elements.forEach(element => {
      Object.assign(values, element.get_values());
    });

    return values;
  }
}
