import View from '../view';

export default class Base extends View{
  
  constructor(name){
    
    super();

    this.validators      = [];
    this.child_elements  = [];
    this.child_container = null;

    this.name   = name;
    this.label  = null;
    this.help   = null;
    this.input  = null;
    this.value  = null;

    this.editable = true;

    this.label_text = null;
    this.help_text  = '';

    this.container = ce('div', 'form-group');
  }

  get_name(){
  
    return this.name;
  }

  get_value(){
  
    this.value = this.input.value;
    return this.value;
  }

  edit(flag){

    this.editable = flag;
  }
  
  set_label(text){
    
    this.label_text = text;
  }

  set_value(value){

    this.value = value;

    if(!!this.input){
      return this.make();
    }

    return Promise.resolve();
  }

  add_validator(validator){

    this.validators.push(validator);
  }

  set_errors(errors){

    this.clear_errors();
    let promises = [];

    for(let error of errors){
      let div = ce('div');
      this.error.append(div);
      promises.push(new Promise((resolve, reject) => {

        error.then(resp => { 
          div.innerText = resp;
          this.error.style.display = 'block';
          resolve();

        }, reject);
      }));
    }

    return Promise.all(promises);
  }

  clear_errors(){
    if(!!this.error){
      this.error.innerHTML = '';
      this.error.style.display = 'none';
    }
  }

  async is_valid(extra_context){

    this.clear_errors();

    let promises = [];
    let value    = this.get_value();
    let errors   = [];

    for(let validator of this.validators){
    
      promises.push(validator.is_valid(value, extra_context).then(resp => {

        if(!resp){
          let msg_error = validator.get_error();
          errors.push(msg_error);
        }

        return Promise.resolve(resp);
      }));
    };

    for(let child of this.child_elements){
      promises.push(child.is_valid(extra_context));
    }

    let data = await Promise.all(promises);
    let args = Array.prototype.slice.call(data);
    let resp = args.indexOf(false) < 0;

    await this.set_errors(errors);

    return Promise.resolve(resp);
  }

  set_help(text){
  
    this.help_text = text;
  }

  make(){
  
    let group = this.container;
    group.innerHTML = '';

    if(!!this.label_text){
      this.label = this.make_label(this.label_text);
      group.append(this.label);
    }
    
    this.input = this.make_input(this.name);
    group.append(this.input);

    this.error = this.make_error();
    group.append(this.error);

    if(!!this.help_text){
      this.help = this.make_help(this.help_text);
      group.append(this.help);
    }

    return Promise.resolve();
  }

  make_error(){
    
    let error = ce('div', 'invalid-feedback');
    return error;
  }

  make_label(text){
  
    let label = ce('label');
    label.innerText = !!text ? text : '';

    return label;
  }

  make_input(name){
  
    let input = ce('input', 'form-control');
    input.name = name;

    if(!!this.value){
      input.value = this.value;
    }

    if(!this.editable){
      input.disabled = true;
    }

    return input;
  }

  make_help(text){
  
    let small = ce('small', 'form-text text-muted');
    small.innerText = !!text ? text : '';

    return small;
  }

  remove_children(){

    if(!!this.child_container){
      this.child_container.remove();
      this.child_container = null;
    }

    this.child_elements = [];

    return Promise.resolve();
  }

  append(child){

    if(!this.child_container){
      this.child_container = ce('div');
      this.container.after(this.child_container);
    }

    if(child instanceof Base){
      this.child_elements.push(child);
      this.child_container.append(child.container);

    }else{

      this.child_container.append(child);
    }
  }
}
