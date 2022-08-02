function shoetime() {
    

let date=new Date();
console.log(date);
let gettime=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

let addtime=document.createElement('p');
  addtime.innerText=gettime;
//   console.log(addtime);
let bodyElement=document.getElementsByTagName('body');
let bodyTag=bodyElement[0];

bodyTag.appendChild(addtime);
addtime.style.color='purple';
addtime.style.fontSize='75px';
addtime.style.textAlign='center';
buttonElement.setAttribute( 'disabled','disabled');
}
let buttonElement=document.getElementById('gnana');
buttonElement.addEventListener('click', shoetime );