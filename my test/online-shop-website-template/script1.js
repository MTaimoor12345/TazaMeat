fetch('https://hilarious-fox-flip-flops.cyclic.app/test').then((data)=>{
  return data.json();
}).then((compeletShow)=>{

let data1="";
compeletShow.map((item)=>{
  data1+=` <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
  <a class="text-decoration-none" href="">
      <div class="cat-item d-flex align-items-center mb-4">
          <div class="overflow-hidden" style="width: 100px; height: 100px;">
              <img class="img-fluid" src=${item.img} alt="">
          </div>
          <div class="flex-fill pl-3">
              <h6>${item.title}</h6>
              <small class="text-body">${item.price}</small>
          </div>
      </div>
  </a>
</div>`
});
document.getElementById("dards").innerHTML=data1;

}).catch((err)=>{
console.log(err)
});







fetch('https://hilarious-fox-flip-flops.cyclic.app/test/1').then((data)=>{
  return data.json();
}).then((compeletShow)=>{

let data1="";
compeletShow.map((item)=>{
  data1+=` <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
  <a class="text-decoration-none" href="">
      <div class="cat-item d-flex align-items-center mb-4">
          <div class="overflow-hidden" style="width: 100px; height: 100px;">
              <img class="img-fluid" src=${item.img} alt="">
          </div>
          <div class="flex-fill pl-3">
              <h6>${item.title}</h6>
              <small class="text-body">${item.price}</small>
          </div>
      </div>
  </a>
</div>`
});
document.getElementById("dards1").innerHTML=data1;

}).catch((err)=>{
console.log(err)
});




fetch('https://hilarious-fox-flip-flops.cyclic.app/test/2').then((data)=>{
  return data.json();
}).then((compeletShow)=>{

let data1="";
compeletShow.map((item)=>{
  data1+=` <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
  <a class="text-decoration-none" href="">
      <div class="cat-item d-flex align-items-center mb-4">
          <div class="overflow-hidden" style="width: 100px; height: 100px;">
              <img class="img-fluid" src=${item.img} alt="">
          </div>
          <div class="flex-fill pl-3">
              <h6>${item.title}</h6>
              <small class="text-body">${item.price}</small>
          </div>
      </div>
  </a>
</div>`
});
document.getElementById("dards2").innerHTML=data1;

}).catch((err)=>{
console.log(err)
});







fetch('https://hilarious-fox-flip-flops.cyclic.app/test/3').then((data)=>{
  return data.json();
}).then((compeletShow)=>{

let data1="";
compeletShow.map((item)=>{
  data1+=` <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
  <a class="text-decoration-none" href="">
      <div class="cat-item d-flex align-items-center mb-4">
          <div class="overflow-hidden" style="width: 100px; height: 100px;">
              <img class="img-fluid" src=${item.img} alt="">
          </div>
          <div class="flex-fill pl-3">
              <h6>${item.title}</h6>
              <small class="text-body">${item.price}</small>
          </div>
      </div>
  </a>
</div>`
});
document.getElementById("dards3").innerHTML=data1;

}).catch((err)=>{
console.log(err)
});