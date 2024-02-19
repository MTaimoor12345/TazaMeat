fetch('http://localhost:3000/test').then((data)=>{
  return data.json();
}).then((data1)=>{
console.log(data1)
})