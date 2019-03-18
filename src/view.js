
window.CE = function(tag, clas, attrs){

  let element = document.createElement(tag);

  if(typeof clas == 'object'){
    attrs = clas;
    clas  = null;
  }

  if(!!clas) element.className = clas;
  if(!!attrs){
    
    for(let attr in attrs){
      element.setAttribute(attr, attrs[attr]);
    }
  }

  return element;
};

export default class View{

  constructor(C){
  
    this.C = C;
    this.container = CE('div');
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
}
