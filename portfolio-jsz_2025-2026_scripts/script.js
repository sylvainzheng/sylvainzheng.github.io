const projects = document.querySelectorAll(".project");
const hoverImg = document.querySelector(".hover-img");
const modalTitle = document.getElementById("projectTitle");
const projectDetails = document.getElementById("projectDetails");
const carouselInner = document.getElementById("carouselInner");
const projectDescription = document.getElementById("projectDescription");

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
        type: "Campaign",
        tools: "InDesign, Illustrator, Photoshop, Illustration",
        description: "Campaign for Mai au Parc 2024, a music festival in Geneva. Hand-drawn modulable visuals were made for this campaign inspired by the energy of the festival which encourages rythm, diversity and good vibes."
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
        type: "Visual identity, Editorial",
        tools: "Illustrator, InDesign",
        description: "The Willoughby Symphony Orchestra (WSO) of Sydney commissioned a new visual identity to launch their season. This resulted in the creation of a custom-built shape library—clean, versatile, and inspired by the dynamic forms of the Cubist movement—created to ensure flexibility and cohesion across future communications. This project was realized in collaboration with Alphabet Studio, a leading creative agency with studios in Sydney and London."
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
        type: "Logo design",
        tools: "Illustrator",
        description: "FdnF (Frères de nos frères) is a non-profit organization that addresses the needs of vulnerable populations by collaborating with local organizations. The organization works primarily in the areas of sustainable agriculture, ecology, and education in 28 different countries across Asia, Africa, and South America. For the association's 60th anniversary, the organization requested a redesign of its logo to better reflect its values."
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
        type: "Packaging",
        tools: "Illustrator, InDesign",
        description: "Shimmer is a natural ogm-free brand that delivers healthy and nutritious energy bars. Each bar comes with a mix of three different ingredients that give an unique taste. The objective was to deliver a clean and pure design that reflects those values."
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
        type: "Visual identity",
        tools: "Photoshop, Illustrator, Premiere Pro",
        description: "The FLE (Français Langue Étrangère) MOOC is a course that aims to support worldwide french teachers by offering a course on learning different teaching perspectives. It is born from a collaboration between the University of Geneva and the OIF (Organisation Internationale de la Francophonie)."
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
        <h6 class="text-muted">TOOLS</h6>
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