document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector(".gallery");

    // Replace 'images/' with the path to your images folder
    const imagePath = "../assets/images/";

    // List your image filenames here
    const imageList = [
        "berlin-1.jpg",
        "berlin-2.jpg",
        "berlin-3.jpg",
        "charlestonchews.jfif",
        // Add more filenames as needed
    ];

    imageList.forEach((imageName) => {
        const imgElement = document.createElement("img");
        imgElement.src = imagePath + imageName;
        imgElement.alt = "Artwork";
        galleryContainer.appendChild(imgElement);
    });
});
