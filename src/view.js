
window.ce = function(){
  
  let args = Array.from(arguments);
  let tag  = args.shift();

  let clas  = '';
  let attrs = [];

  for(let item of args){

    let type = typeof item;

    if(type == 'string'){
      
      clas += ' ' + item;

    } else if(type == 'object'){

      attrs = item;
    }
  }

  let element = document.createElement(tag);

  element.className = clas;
    
  for(let attr in attrs){
    element.setAttribute(attr, attrs[attr]);
  }

  return element;
};

export default class{

  constructor(C){
  
    this.C = C;
    this.container = ce('div');
  }

  make(){
  
    return Promise.resolve();
  }

  render(){
  
    return this.make();
  }

  toString(){
    
    return this.container.innerHTML;
  }

  remove(){
    
    this.container.remove();
  }

  render(){
  
    return this.make();
  }
}
