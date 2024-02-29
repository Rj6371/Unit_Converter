let foot=document.querySelector('#foot');

let inch=document.querySelector('#inch');

let cm=document.querySelector('#cm');

let f;
let i;
let c;

foot.addEventListener('input',()=>{
  f=foot.value;
  i=f*12;
  c=i*2.54;
    if (!Number.isInteger(i,c)) {
      i=i.toFixed(2);
      c=c.toFixed(2);
  }
  inch.value=i;
  cm.value=c;
})

inch.addEventListener('input',()=>{
  i=inch.value;
  f=i/12;
  c=i*2.54;
    if (!Number.isInteger(f,c)) {
      f=f.toFixed(2);
      c=c.toFixed(2);
  }
  foot.value=f;
  cm.value=c;
})

cm.addEventListener('input',()=>{
  c=cm.value;
  f=c*0.0328;
  i=c*0.3937;
  if (!Number.isInteger(f,i)) {
    f=f.toFixed(2);
    i=i.toFixed(2);
  }
  foot.value=f;
  inch.value=i;
})