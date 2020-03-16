import View from '../view'; 
import Box from './box';

export default class extends View{

  constructor(C){

    super(C);
    this.container.classList.add('box');
    this.boxes = [];
  }

  calc(){

    let fixed_size = 0;
    let auto_boxes = [];

    for(let box of this.boxes){
      fixed_size += box.get_fixed_height();
      if(box.is_height_auto && !box.is_hide){
        auto_boxes.push(box);
      }
    }

    let each_fixed_height = fixed_size / auto_boxes.length;
    let style_height = `calc(100% - ${each_fixed_height}px)`;
    for(let box of auto_boxes){
      box.set_height(style_height);
    }
  }

  hiding(box){

    this.calc();
  }

  make_box(height = 'auto'){

    let box = new Box(this, true, height == 'auto' ? true : false);
    this.boxes.push(box);
    
    if(height != 'auto'){
      box.set_height(height);
    }

    return box;
  }
}
