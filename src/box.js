import View from '../view/';

export default class extends View{

  constructor(answer, is_weight_auto = true, is_height_auto = true){
    
    super(null);

    this.ancestor = answer;

    this.is_weight_auto = is_weight_auto;
    this.is_height_auto = is_height_auto;

    this.weight = null;
    this.height = null;
  
    this.time = 0.2;
    this.init_z_index = null;

    this.is_hide = false;
  }

  get_fixed_height(){
    
    if(this.is_height_auto || this.is_hide){
      return 0;
    }

    return this.height;
  }

  get_fixed_weight(){
    
    if(this.is_weight_auto || this.is_hide){
      return 0;
    }

    return this.weight;
  }

  set_weight(weight){
    
    this.weight = weight;
    this.container.style.weight = weight;
  }

  set_height(height){

    this.height = height;
    this.container.style.height = height;
  }

  make(){

    let style = this.container.style;
    style.transactionProperty       = 'margin';
    style.transactionDuration       = `${this.time}s`;
    style.transactionTimingFunction = 'ease';
    style.transactionDelay          = '0';
    style.backgroundColor           = 'white';

    return Promise.resolve();
  }

  hide_top(){

    if(this.is_hide){
      return Promise.resolve();
    }

    let style         = this.container.style;
    this.init_z_index = style.zIndex;
    style.zIndex      = '-1';
    style.marginTop   = `-${this.height}`;

    this.is_hide = true;

    return new Promise((resolve, reject) => {
      setTimeout(resolve, this.time * 1000);
    });
  }

  hide_bottom(){

    if(this.is_hide){
      return Promise.resolve();
    }

    let style           = this.container.style;
    this.init_z_index   = style.zIndex;
    style.zIndex        = '-1';
    style.marginBottom  = `-${this.height}`;

    this.is_hide = true;

    return new Promise((resolve, reject) => {
      setTimeout(resolve, this.time * 1000);
    });
  }

  hide_left(){

    if(this.is_hide){
      return Promise.resolve();
    }

    let style         = this.container.style;
    this.init_z_index = style.zIndex;
    style.zIndex      = '-1';
    style.marginLeft  = `-${this.weight}`;

    this.is_hide = true;
    this.ancestor.hiding(this);

    return new Promise((resolve, reject) => {
      setTimeout(resolve, this.time * 1000);
    });
  }

  hide_right(){

    if(this.is_hide){
      return Promise.resolve();
    }

    let style         = this.container.style;
    this.init_z_index = style.zIndex;
    style.zIndex      = '-1';
    style.marginRight = `-${this.weight}`;

    this.is_hide = true;

    return new Promise((resolve, reject) => {
      setTimeout(resolve, this.time * 1000);
    });
  }

  show(){

    let style = this.container.style;
    style.removeProperty('marginLeft');
    style.removeProperty('marginRight');
    style.removeProperty('marginTop');
    style.removeProperty('marginBottom');
    style.zIndex = this.init_z_index;

    return new Promise((resolve, reject) => {
      this.is_hide = false;
      setTimeout(resolve, this.time * 1000);
    });
  }
}
