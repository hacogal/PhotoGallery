const galleryImages = [
    {
        small: 'images/flowers-pink-small.jpg',
        large: 'images/flowers-pink-large.jpg',
        alt: 'Market in Münster, North Rhine-Westphalia, Germany',
        author: 'Dietmar Rabich'
    },
    {
        small: 'images/flowers-purple-small.jpg',
        large: 'images/flowers-purple-large.jpg',
        alt: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany',
        author: 'Dietmar Rabich'
    },
    {
        small: 'images/flowers-red-small.jpg',
        large: 'images/flowers-red-large.jpg',
        alt: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany',
        author: 'Dietmar Rabich'
    },
    {
        small: 'images/flowers-white-small.jpg',
        large: 'images/flowers-white-large.jpg',
        alt: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany',
        author: 'Dietmar Rabich'
    },
    {
        small: 'images/flowers-yellow-small.jpg',
        large: 'images/flowers-yellow-large.jpg',
        alt: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany',
        author: 'Dietmar Rabich'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const featuredImg = document.querySelector('figure img');
    const figcaption = document.querySelector('figcaption');
    const gallery = document.getElementById('gallery');
    
    // Create the thumbnail list
    const thumbnailList = document.createElement('ul');
    thumbnailList.id = 'thumbnails';
    
    // Dynamically build the thumbnail list
    galleryImages.forEach((image, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = image.small;
        img.alt = image.alt;
        img.width = 240;
        img.height = 160;
        li.appendChild(img);
        thumbnailList.appendChild(li);
        
        // Add click event listener to each thumbnail
        li.addEventListener('click', function() {
            updateFeaturedImage(index);
        });
    });
    
    // Append the thumbnail list to the gallery
    gallery.appendChild(thumbnailList);
    
    // Function to update the featured image and caption
    function updateFeaturedImage(index) {
        const image = galleryImages[index];
        featuredImg.src = image.large;
        featuredImg.alt = image.alt;
        figcaption.innerHTML = `<strong>${image.alt}</strong><br>Author: ${image.author}`;
        
        // Update active thumbnail
        document.querySelectorAll('#thumbnails li').forEach((li, i) => {
            if (i === index) {
                li.classList.add('active');
            } else {
                li.classList.remove('active');
            }
        });
    }
    
    // Initialize with the first image
    updateFeaturedImage(0);
});
