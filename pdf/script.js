const btn = document.querySelector('.c');
const form = document.querySelector('.dev');

btn.addEventListener('click', function(){
  const html = `
  <embed src="new-cheat-sheet.pdf" type="application/pdf" width="100%" height="600px allowfullscreen>">
  
  `;


  form.insertAdjacentHTML('afterend', html);
})