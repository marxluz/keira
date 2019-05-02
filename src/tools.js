
export function makeId(length){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for(var i=0; i < length; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export function ellipsisText(el){

  let words = el.innerText.split(' ');
  
  while(el.scrollHeight > el.offsetHeight){

    words.pop();
    el.innerText = words.join(' ') + '...';
  }
}
