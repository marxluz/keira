
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

  if(!Element.prototype.append){
    Element.prototype.append = Element.prototype.appendChild;
  }

  element.className = clas;
    
  for(let attr in attrs){
    element.setAttribute(attr, attrs[attr]);
  }

  element.append = function(child){
    Element.prototype.append.call(this, child);
    return this;
  }

  element.text = function(text){
    element.innerText = text;
    return this;
  }

  element.html = function(html){
    element.innerHTML = html;
    return this;
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

  toString(){
    
    return this.container.innerHTML;
  }

  remove(){
    
    this.container.remove();
  }

  append(content){
    
    this.container.append(content);
  }

  async render(){
  
    await this.make();
    return Promise.resolve(this.container);
  }
}
