const imageContainer = document.getElementById('image-container-coffee');

// Assuming your images are in a subfolder called "images"
const imagePath = "media/extracted/";

// Function to create and add an image element
function createImage(index) {
  const img = document.createElement('img');
  img.src = imagePath + "(" + index + ")" + "/" + index + ".jpg"; 
  imageContainer.appendChild(img);
}

// Loop to create 100 images (adjust the number as needed)
for (let i = 0; i < 56; i++) {
  createImage(i + 1); // Add a prefix to image names
}