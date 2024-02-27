const btn = document.getElementById('chicken');

btn.addEventListener('click', () => {
  const chicken = document.getElementById('chicken1');
  const mutton1 = document.getElementById('mutton1');
  const beef1 = document.getElementById('beef1');
  const seafood1 = document.getElementById('seafood1');

  if (chicken.style.display === 'none') {
    // 👇️ this SHOWS the form
    chicken.style.display = 'flex';
    mutton1.style.display = 'none';
    beef1.style.display = 'none';
    seafood1.style.display = 'none';
  } else {
    // 👇️ this HIDES the form
 chicken.style.display = 'none';
 mutton1.style.display = 'flex';
 beef1.style.display = 'flex';
 seafood1.style.display = 'flex';
  }
});



const btn1 = document.getElementById('mutton');

btn1.addEventListener('click', () => {
  const chicken = document.getElementById('chicken1');
  const mutton1 = document.getElementById('mutton1');
  const beef1 = document.getElementById('beef1');
  const seafood1 = document.getElementById('seafood1');

  if (mutton1.style.display === 'none') {
    // 👇️ this SHOWS the form
    chicken.style.display = 'none';
    mutton1.style.display = 'flex';
    beef1.style.display = 'none';
    seafood1.style.display = 'none';
  } else {
    // 👇️ this HIDES the form
 chicken.style.display = 'flex';
 mutton1.style.display = 'none';
 beef1.style.display = 'flex';
 seafood1.style.display = 'flex';
  }
});






const btn2 = document.getElementById('beef');

btn2.addEventListener('click', () => {
  const chicken = document.getElementById('chicken1');
  const mutton1 = document.getElementById('mutton1');
  const beef1 = document.getElementById('beef1');
  const seafood1 = document.getElementById('seafood1');

  if (beef1.style.display === 'none') {
    // 👇️ this SHOWS the form
    chicken.style.display = 'none';
    mutton1.style.display = 'none';
    beef1.style.display = 'flex';
    seafood1.style.display = 'none';
  } else {
    // 👇️ this HIDES the form
 chicken.style.display = 'flex';
 mutton1.style.display = 'flex';
 beef1.style.display = 'none';
 seafood1.style.display = 'flex';
  }
});






const btn3 = document.getElementById('seafood');

btn3.addEventListener('click', () => {
  const chicken = document.getElementById('chicken1');
  const mutton1 = document.getElementById('mutton1');
  const beef1 = document.getElementById('beef1');
  const seafood1 = document.getElementById('seafood1');

  if (seafood1.style.display === 'none') {
    // 👇️ this SHOWS the form
    chicken.style.display = 'none';
    mutton1.style.display = 'none';
    beef1.style.display = 'none';
    seafood1.style.display = 'flex';
  } else {
    // 👇️ this HIDES the form
 chicken.style.display = 'flex';
 mutton1.style.display = 'flex';
 beef1.style.display = 'flex';
 seafood1.style.display = 'none';
  }
});