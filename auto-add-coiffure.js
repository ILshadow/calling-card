const imageContainer = document.getElementById('image-container-coiffure');

// Assuming your images are in a subfolder called "images"
const imagePath = "media/extracted-coiffure/";

// Function to create and add an image element
function createImage(index) {
  const img = document.createElement('img');
  const link = document.createElement('a');
  link.href = "https://raw.githubusercontent.com/ILshadow/calling-card/main/media/extracted-coiffure/(" + (index) + ")/" + (index) + ".jpg";
  link.target = "_blanck";
  img.src = imagePath + "(" + index + ")" + "/" + index + ".jpg"; 
  link.appendChild(img);
  imageContainer.appendChild(link);
}

// Loop to create 100 images (adjust the number as needed)
for (let i = 0; i < 25; i++) {
  createImage(i + 1); // Add a prefix to image names
}
