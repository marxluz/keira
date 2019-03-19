import View from '../view';

export default class extends View{
  
  constructor(name){
    
    super();

    this.validators = [];

    this.name  = name;
    this.label = null;
    this.help  = null;
    this.input = null;

    this.label_text = '';
    this.help_text  = '';

    this.container = CE('div', 'form-group');
  }
  
  set_label(text){
    
    this.label_text = text;

    if(!!this.label){
      this.label.innerText = this.label_text;
    }
  }

  is_valid(extra_context){
  
    return new Promise((res, rej) => {

      let promises = [];
      let value    = this.get_value();
    
      this.validators.forEach(validator => {
      
        promises.push(validator.is_valid(value, extra_context));
      });

      Promise.all(promises).then(data => {
      
        let args = Array.prototype.slice.call(data);
        let resp = args.indexOf(false) < 0;
        res(resp);

      }, rej);
    });
  }

  set_help(text){
  
    this.help_text = text;

    if(!!this.help){
      this.help.innerText = this.help_text;
    }
  }

  make(){
  
    let group = this.container;
    
    this.label = this.make_label(this.label_text);
    group.append(this.label);

    this.input = this.make_input(this.name);
    group.append(this.input);

    this.help = this.make_help(this.help_text);
    group.append(this.help);

    return Promise.resolve();
  }

  make_label(text){
  
    let label = CE('label');
    label.innerText = !!text ? text : '';

    return label;
  }

  make_input(name){
  
    let input = CE('input', 'form-control');
    input.name = name;

    return input;
  }

  make_help(text){
  
    let small = CE('small', 'form-text text-muted');
    small.innerText = !!text ? text : '';

    return small;
  }
}
