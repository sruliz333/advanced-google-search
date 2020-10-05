let selector, search;
let forms = [];


let translation = {
  'search websites for specific text in a url': 'inurl',
'search websites for specific file types': 'filetype',
'Search websites for specific text': 'intext',
  'Search websites for specific title': 'intitle',
  'Search for specific website': 'site',
}
function setup() {
  createCanvas(windowWidth, windowHeight);
   push() 
    textAlign(CENTER);
  // rectMode(LEFT);
  background(200);
  selector = createSelect();
  selector.size(250, 50);
  selector.center();
  // selector.position(width/2-selector.width/2, 10);
  selector.option('--- Select ---');
  for(var t in translation){
    selector.option(t)
  }
  // selector.option('search websites for specific text in a url');
  // selector.option('search websites for specific file types');
  // selector.option('Search websites for specific text');
  // selector.option('');
  selector.elt.style.textAlignLast = CENTER;
  selector.position(selector.x, 10);
  selector.changed(addInput);
  
  search = createButton('Search!');
  search.size(75, 30);
  search.elt.onclick = dorkIt;
  search.position(selector.x+selector.width+search.width/11, 10)
  
  clearPage = createButton('Clear!');
  clearPage.size(75, 30);
  clearPage.elt.onclick = cls;
  clearPage.position(selector.x-clearPage.width*1.1, 10)
  pop()
}

function cls(){
  // forms = [];
  window.location.reload();
}

function dorkIt(){
  let path = '';
  for(let i of forms){
    path += translation[i.elt.placeholder].replace(' ', '%20').toString() + ':' + i.value()+'%20';
  }
  console.log(path)
  
  window.open('https://google.com/search?q='+path)
}
function addInput(e){
  let value = e.target.value;


  
  
  if (forms.length){
          forms[forms.length] = createInput();
  forms[forms.length-1].elt.placeholder = value;
  forms[forms.length-1].size(250, 30);
  forms[forms.length-1].center();
  forms[forms.length-1].position(forms[0].x, forms[forms.length-2].y+65);
    
  }else{
      forms[forms.length] = createInput();
  forms[forms.length-1].elt.placeholder = value;
  forms[forms.length-1].size(250, 30);
  forms[forms.length-1].center();
  forms[forms.length-1].position(forms[0].x, 125);
  }
  textAlign(LEFT)
      let div1= createDiv(forms[forms.length-1]);
  // div1.center();
  div1.position(forms[0].x, forms[forms.length-1].y-25);
  div1.html(value);
  
  
  selector.selected('--- Select ---');
}

function draw() {
  background(220);
}
