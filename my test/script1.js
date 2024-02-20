fetch('https://hilarious-fox-flip-flops.cyclic.app/test').then((data)=>{
  return data.json();
}).then((data1)=>{
console.log(data1[0].title);
document.getElementById('root').
innerHTML=data1[0].title
})