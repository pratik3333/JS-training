
// let paras=document.querySelectorAll('p');

// fetching all p tag one by one
// for (let i = 0; i< paras.length; i++) 
//     {
//           let para = paras[i];
//           para.addEventListener('click',function () {

//             alert("You clicked on para : "+ (i+1));
//           })
          
// }

function alertpara(event) {

    alert("You have clicked on para: "+event.target.textContent);
    
}


// for (let i = 0; i < paras.length; i++) {
    
//     let para=paras[i];
//     para.addEventListener('click',alertpara);
    
// }



//catching wrapper id
let mydiv=document.getElementById('wrapper');
document.addEventListener('click',alertpara)