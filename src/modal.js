import View from './view';

export default class extends View{

  constructor(C){
  
    super(C);

    this.titleText  = null;
    this.header     = null;
    this.body       = null;
    this.footer     = null;
    this.opacity    = null;

    this.backdropClose = false;
  }

  set_title(title){
  
    this.titleText = title;
  }

  render(){

    this.container  = CE('div', 'modal fade show');
    this.container.onclick = (e) => {
      if(!!this.backdropClose && e.target == e.currentTarget) this.remove();
    };

    let dialog = CE('div', 'modal-dialog');
    this.container.append(dialog);

    let content = CE('div', 'modal-content');
    dialog.append(content);

    this.header = CE('div', 'modal-header');
    content.append(this.header);

    this.body = CE('div', 'modal-body');
    content.append(this.body);

    this.footer = CE('div', 'modal-footer');
    content.append(this.footer);

    return this.make().then(() => {
    
      if(!!this.titleText){
        let title = CE('h5', 'modal-title');
        this.header.append(title);
        title.innerText = this.titleText;

      }

      let button = CE('button', 'close');
      this.header.append(button);
      button.onclick = this.remove.bind(this);

      let span = CE('span');
      button.append(span);
      span.style.fontSiza = '16px';
      span.innerText = 'x';

      this.show();
      document.body.append(this.container);
      return Promise.resolve();
    });
  }

  show(){
    
    this.opacity = CE('div', 'modal-backdrop fade show');
    document.body.append(this.opacity);

    this.container.style.display = 'block';
  }

  hide(){
    
    this.opacity.remove();
    this.container.style.display = 'none';
  }

  remove(){
  
    super.remove();
    this.opacity.remove();
  }
}
