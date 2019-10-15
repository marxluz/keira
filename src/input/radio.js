import Base from './base';

export default class extends Base {

  constructor(name) {

    super(name);
    this.list = [];
  }

  get_value(){

    return this.value;
  }

  onchange(object, value) {
    /* method for overwrite */
  }

  make_input() {

    let inputs = ce('div');

    for (let item of this.list) {

      let div = ce('div', 'mb-2');
      inputs.append(div);

      let key = item[0];
      let input = ce('input', 'float-left');
      input.type = 'radio';
      input.id = key;
      input.name = this.name;
      input.value = key;
      input.onclick = event => {
        let last_value = this.value;
        this.value     = input.value;
        if(last_value != this.value){
          this.onchange(this, this.value);
        }
      }

      div.append(input);

      if (!this.editable) {
        input.disabled = 'disabled';
      }

      if (this.value == key) {
        input.checked = 'checked';
      }

      let style = input.style;
      style.width = '24px';
      style.height = '1.4em';
      style.boder = '0px';

      let label = ce('label', 'ml-2');
      label.setAttribute('for', key);
      label.innerText = item[1];
      div.append(label);

      if(!!item[2]){
        let info = ce('span', 'material-icons float-right');
        info.innerText = 'info';
        div.append(info);
      }
    }

    return inputs;
  }

  add(key, label, help) {

    this.list.push([key, label, help]);
  }
}
