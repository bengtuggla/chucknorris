const URL = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

//Using .then
/* btn.addEventListener('click', ()=> {
fetch(URL).then((data)=>data.json()).then(data=>displayData(data)).catch((err)=>console.log(err))
}) */

//Using async / await
btn.addEventListener('click', async()=> {

 try{
   const data = await fetch(URL);
   const response = await data.json();
   displayData(response);
 }
 catch(error){
  console.log(error);
 }

})


function displayData({value: theJoke}){
 //const response = data.value;
 content.textContent = theJoke
}
