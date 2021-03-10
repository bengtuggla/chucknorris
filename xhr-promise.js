/* THIS CODE IS FOR REFERENCE. HOW TO DO IT OLDSCHOOL WAY */



const URL = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

btn.addEventListener('click', ()=> {
 getData(URL).then((response)=>{
  displayData(response)
 }).catch((err)=>{console.log(err);});

})

function getData(url){
 return new Promise((resolve, reject)=>{
  const xhr = new XMLHttpRequest();
 xhr.open("GET", url);
 xhr.send();
 xhr.onreadystatechange = function(){
  if(xhr.readyState !== 4){
   return;
  }
  if(xhr.status === 200){
   resolve(xhr.responseText);
  }else{
   reject({status: xhr.status, text: xhr.statusText});
  }
 }
 })
 
}

function displayData(data){
 const response = JSON.parse(data);
   content.textContent = response.value

}
