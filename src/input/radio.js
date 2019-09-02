
import Base from './base';

export default class extends Base{

  constructor(name){

    super(name);
    this.list   = [];
  }

  make_input(){

    let inputs = ce('div');

    for(let item of this.list){

        let div = ce('div', 'mb-2');
        inputs.append(div);

        let key = item[0];
        let input = ce('input', 'float-left');
        input.type = 'radio';
        input.name = this.name;
        input.value = key;
        
        div.append(input);

        if(!this.editable){
            input.disabled = 'disabled';
        }

        if(this.value == key){
            input.checked = 'checked';
        }

        let style = input.style;
        style.width = '24px';
        style.height = '1.4em';
        style.boder = '0px';

        let label = ce('label', 'ml-2');
        label.innerText = item[1];

        div.append(label);
    }

    return inputs;
  }

  add(key, label){

    this.list.push([key, label]);
  }
}
