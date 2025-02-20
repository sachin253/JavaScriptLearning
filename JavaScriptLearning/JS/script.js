const beachRecommendations = [
    {
        name: "1. Malibu Beach",
        description: "Iconic California beach known for surfing and celebrity sightings.",
        images: ["../images/beach1_img1.jpg", "../images/beach1_img2.jpg"] 
    },
    {
        name: "2. Pink Sands Beach",
        description: "Stunning beach in the Bahamas with unique pink sand.",
        images: ["../images/beach2_img1.jpg", "../images/beach2_img2.jpg"]
    }
];

const templeRecommendations = [
    {
        name: "1. Angkor Wat",
        description: "Magnificent temple complex in Cambodia, a UNESCO World Heritage Site.",
        images: ["../images/temple1_img1.jpg", "../images/temple1_img2.jpg"] 
    },
    {
        name: "2. Golden Temple",
        description: "Spiritual center for Sikhs in Amritsar, India.",
        images: ["../images/temple2_img1.jpg", "../images/temple2_img2.jpg"] 
    }
];

const countryRecommendations = [
    {
        name: "1. India",
        description: "A blend of ancient traditions and modern technology.",
        images: ["../images/india1_img1.jpg", "../images/india2_img2.jpg"] 
    },
    {
        name: "2. Italy",
        description: "Rich in history, art, and delicious cuisine.",
        images: ["../images/italy1_img1.jpg", "../images/italy2_img2.jpg"] 
    }
];


function displayRecommendations(recommendations, sectionId) {
    const section = document.getElementById(sectionId);
    recommendations.forEach(rec => {
        const div = document.createElement("div");
        div.innerHTML = `<h2>${rec.name}</h2><p>${rec.description}</p>`;
        rec.images.forEach(image => {
            const img = document.createElement("img");
            img.src = image;  // Correct path assumed!
            img.alt = rec.name + " Image"; // Important for accessibility!
            div.appendChild(img);
        });
        section.appendChild(div);
    });
}

displayRecommendations(beachRecommendations, "beach-recommendations");
displayRecommendations(templeRecommendations, "temple-recommendations");
displayRecommendations(countryRecommendations, "country-recommendations");