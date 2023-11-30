//run the gallery plug-in
baguetteBox.run('.gallery-container');

//target the search input
const userInput = document.querySelector('#image-search');

const searchForInput = (event) => {
  //get the user input
  let message = event.target.value.toLowerCase();
  //target all images that have a data-caption attribute
  const images = document.querySelectorAll("a[data-caption]");
  //loop through images and check if the caption contains the user input
  //display the image if it matches the input
  //else hide the image
  images.forEach((thumbnail)=> {
    let captionText = thumbnail.dataset.caption.toLowerCase();
   if (captionText.includes(message)) {
       thumbnail.style.display = 'block';
   } else {
       thumbnail.style.display = 'none';
   }
  })
}
//add event listener to the input element
userInput.addEventListener('keyup', searchForInput);

