//run the gallery plug-in

baguetteBox.run('.gallery-container');

const userInput = document.querySelector('#image-search');

const searchForInput = (event) => {
  let message = event.target.value.toLowerCase();
  const images = document.querySelectorAll("a[data-caption]");
  images.forEach((element)=> {
   if (element.dataset.caption.toLowerCase().includes(message)) {
       element.style.display = 'block';
   } else {
       element.style.display = 'none';
   }
  })
}
userInput.addEventListener('keyup', searchForInput);

