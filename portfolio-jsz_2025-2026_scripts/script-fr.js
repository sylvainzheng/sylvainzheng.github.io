const projects = document.querySelectorAll(".project");
const hoverImg = document.querySelector(".hover-img");
const modalTitle = document.getElementById("projectTitle");
const projectDetails = document.getElementById("projectDetails");
const carouselInner = document.getElementById("carouselInner");
const projectDescription = document.getElementById("projectDescription");

// Hero section and intro section DOM
const LANDING_BLOCK = document.getElementById("home-top-section");
const INTRO_BLOCK = document.getElementById("intro-section");
// Decrease landing and intro section on scroll
$(document).ready(function(){
    $(window).scroll(function(){
        $(LANDING_BLOCK).css("opacity", 1- $(window).scrollTop()/700);
        $(INTRO_BLOCK).css("opacity", 1- $(window).scrollTop()/700);
    })
})

// Page lang
document.getElementById('language').addEventListener('change', function() {
const lang = this.value;
if (lang === 'fr') {
    window.location.href = 'index-fr.html';
} else {
    window.location.href = 'index.html';
}
});

// Project data JSON as JS object
const galleries = {
    1: {
        images: [
            "img/map-1.jpg",
            "img/map-2.jpg",
            "img/map-3.jpg",
            "img/map-3gif.gif",
            "img/map-4.gif",
            "img/map-5.jpg",
            "img/map-6.png"
        ],
        details: {
            type: "Campagne pour un festival de musique",
            tools: "InDesign, Illustrator, Photoshop, Illustration",
            description: "Campagne pour Mai au Parc 2024, festival de musique à Genève. Des visuels modulables dessinés à la main ont été créés pour cette campagne, inspirée par l'énergie du festival, qui prône le rythme, la diversité et la bonne humeur."
        }
    },
    2: {
        images: [
            "img/wso-1.jpg",
            "img/wso-2.jpg",
            "img/wso-3.jpg",
            "img/wso-4.jpg",
            "img/wso-6.jpg"
        ],
        details: {
            type: "Identité visuelle, Brochure",
            tools: "Illustrator, InDesign",
            description: "L'Orchestre Symphonique Willoughby (WSO) de Sydney a mandaté une nouvelle identité visuelle pour le lancement de sa saison. Ce projet a donné lieu à la création d'une bibliothèque de formes sur mesure, épurée, polyvalente et inspirée des formes dynamiques du mouvement cubiste, afin d'assurer flexibilité et cohérence pour les communications futures. Ce projet a été réalisé en collaboration avec Alphabet Studio, une agence de graphisme basée à Sydney et à Londres."
        }
    },
    3: {
        images: [
            "img/fdnf-1.jpg",
            "img/fdnf-2.jpg",
            "img/fdnf-3.jpg",
            "img/fdnf-4.jpg",
            "img/fdnf-5.jpg",
            "img/fdnf-6.jpg"
        ],
        details: {
            type: "Création de logo",
            tools: "Illustrator",
            description: "FdnF (Frères de nos frères) est une organisation à but non lucratif qui répond aux besoins des populations vulnérables en collaborant avec des organisations locales. Elle œuvre principalement dans les domaines de l'agriculture durable, de l'écologie et de l'éducation dans 28 pays d'Asie, d'Afrique et d'Amérique du Sud. À l'occasion de son 60ème anniversaire, l'association a souhaité repenser son logo afin de mieux refléter ses valeurs."
        }
    },
    4: {
        images: [
            "img/shimmer-1.jpg",
            "img/shimmer-2.jpg",
            "img/shimmer-3.jpg",
            "img/shimmer-4.jpg"
        ],
        details: {
            type: "Emballage, design de produit",
            tools: "Illustrator, InDesign",
            description: "Shimmer est une marque naturelle sans OGM proposant des barres énergétiques saines et nutritives. Chaque barre est composée d'un mélange de trois ingrédients différents pour un goût unique. L'objectif était de proposer un design épuré et pur, reflétant ces valeurs."
        }
    },
    5: {
        images: [
            "img/mooc-fle-1.jpg",
            "img/mooc-fle-2.jpg",
            "img/mooc-fle-3.jpg",
            "img/mooc-fle-4.jpg"
        ],
        details: {
            type: "Identité visuelle",
            tools: "Photoshop, Illustrator, Premiere Pro",
            description: "Le MOOC FLE (Français Langue Étrangère) est une formation destinée à accompagner les enseignants de français du monde entier en leur proposant un apprentissage de différentes approches pédagogiques. Il est né d'une collaboration entre l'Université de Genève et l'OIF (Organisation Internationale de la Francophonie)."
        }
    },
    6: {
        images: [
            "img/louwu-1.jpg",
            "img/louwu-2.jpg",
            "img/louwu-3.jpg",
            "img/louwu-4.jpg"
        ],
        details: {
            type: "Packaging",
            tools: "Photoshop, Illustrator, Blender",
            description: "Louwu est une marque de thé inspirée de la région du Hubei, en Chine. Elle offre une saveur à la fois douce et intense, idéale pour les jours de pluie. La texture de son emballage évoque le brouillard matinal qui se dégage du fleuve Yangtze."
        }
    }
};

// Hover preview
projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
    const img = project.getAttribute("data-img");
    hoverImg.style.backgroundImage = `url(${img})`;
    hoverImg.classList.add("show");
    });

    project.addEventListener("mouseleave", () => {
    hoverImg.classList.remove("show");
    });

    project.addEventListener("mousemove", (e) => {
    hoverImg.style.top = e.clientY + "px";
    hoverImg.style.left = e.clientX + "px";
    });

    // Modal content load
    project.addEventListener("click", () => {
    const title = project.getAttribute("data-title");
    const galleryId = project.getAttribute("data-gallery");
    const gallery = galleries[galleryId];

    modalTitle.textContent = title;

    // 3-column grid
    projectDetails.innerHTML = `
        <div class="col-md-4">
        <h6 class="text-muted">TYPE</h6>
        <p class="mb-0">${gallery.details.type}</p>
        </div>
        <div class="col-md-4">
        <h6 class="text-muted">OUTILS</h6>
        <p class="mb-0">${gallery.details.tools}</p>
        </div>
        <div class="col-md-4">
        <h6 class="text-muted">DESCRIPTION</h6>
        <p class="mb-0">${gallery.details.description}</p>
        </div>
    `;

    // Image grid
    const projectImages = document.getElementById("projectImages");
    projectImages.innerHTML = "";
    gallery.images.forEach(img => {
        const col = document.createElement("div");
        col.classList.add("col-md-12", "col-lg-12"); // 2 per row on md, 3 per row on lg
        col.innerHTML = `<img src="${img}" class="img-fluid rounded shadow-sm">`;
        projectImages.appendChild(col);
    });
    });
});
