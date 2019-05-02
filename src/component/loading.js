import View from '../view';

export default class extends View{

  constructor(){

    this.container = CE('div', 'spinner-grow text-info');
  }

  make(){

    let span = CE('spinner-grow text-info');
    this.container.container(span);

    return Promise.resolve();
  }
}

