
let paras=document.querySelectorAll('p');

for (let i = 0; i< paras.length; i++) 
    {
          let para = paras[i];
          para.addEventListener('click',function () {

            alert("You clicked on para : "+ (i+1));
          })
          
}