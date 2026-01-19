// Project section DOM
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
/*
$(document).ready(function(){
    $(window).scroll(function(){
        $(LANDING_BLOCK).css("opacity", 1- $(window).scrollTop()/700);
        $(INTRO_BLOCK).css("opacity", 1- $(window).scrollTop()/700);
    })
})*/

/*
// Page lang
document.getElementById('language').addEventListener('change', function() {
const lang = this.value;
if (lang === 'fr') {
    window.location.href = 'index-fr.html';
} else {
    window.location.href = 'index.html';
}
});
*/

// Project data JSON as JS object
const galleries = {
    1: {
        images: [
            "img/map-1.webp",
            "img/map-2.webp",
            "img/map-3.webp",
            "img/map-3gif.gif",
            "img/map-4.gif",
            "img/map-5.webp",
            "img/map-6.webp"
        ],
        details: {
            type: "Campaign, Visual identity",
            tools: "InDesign, Illustrator, Photoshop, Illustration",
            description: "Campaign for Mai au Parc 2024, a music festival in Geneva. Hand-drawn modulable visuals were made for this campaign inspired by the energy of the festival which encourages rythm, diversity and good vibes."
        },
        casestudy: {
            overview: "Mai au Parc is a festival held every year in Geneva at the Bernasconi Park, which honors live music, rhythm, and cultural diversity. A wide range of music enthusiasts, young adults, and families looking for an inclusive, lively, and open cultural experience are the target audience of this festival.",
            challenge: "Creating a visual campaign that embodies the joyous spirit of the occasion while being adaptable enough to work with various media and communication platforms.",
            methodology: "The raw energy of live music serves as the inspiration for the campaign's hand-drawn, modulable visuals. The graphic system, which uses strong shapes and rhythmic compositions to convey movement, diversity, and positive vibes, is influenced by Keith Haring's dynamic characters. Because of the illustrations’ adaptability, they can be used in digital assets and on-site applications.",
            result: "The resultant campaign offers a vibrant and expressive visual identity that captures the essence of the festival, makes it more identifiable, and forges a deep emotional bond with its viewers."
        }
    },
    2: {
        images: [
            "img/wso-1.webp",
            "img/wso-2.webp",
            "img/wso-3.webp",
            "img/wso-4.webp",
            "img/wso-5.webp",
            "img/wso-6.webp"
        ],
        details: {
            type: "Visual identity, Print",
            tools: "Illustrator, InDesign",
            description: "The Willoughby Symphony Orchestra (WSO) of Sydney commissioned a new visual identity to launch their season. This resulted in the creation of a custom-built shape library—clean, versatile, and inspired by the dynamic forms of the Cubist movement—created to ensure flexibility and cohesion across future communications. This project was realized in collaboration with Alphabet Studio, a leading creative agency with studios in Sydney and London."
        },
        casestudy: {
            overview: "The Willoughby Symphony Orchestra (WSO) is a Sydney-based cultural organization that performs classical music for a broad range of audiences, including both seasoned concertgoers and younger listeners who are just starting to learn about orchestral music.",
            challenge: "Developping a modern visual identity for the orchestra's upcoming season while maintaining long-term adaptability and uniformity in all upcoming communications.",
            methodology: "Inspired by the fragmented and dynamic forms of the Cubist movement, a custom-built shape library was created from the diverse instruments in the music world. The shapes, which are simple, adaptable, and modular, produce a unified visual language that works well in a variety of formats. The system was created to strike a balance between tradition and modernity, enhancing the orchestra's reputation while bolstering its cultural legitimacy.",
            result: "The new identity gives WSO a unique and adaptable visual system that facilitates seasonal variation, clear communication, and a revitalized presence in Sydney's cultural landscape."
        }
    },
    3: {
        images: [
            "img/fdnf-1.webp",
            "img/fdnf-2.webp",
            "img/fdnf-3.webp",
            "img/fdnf-4.webp",
            "img/fdnf-5.webp",
            "img/fdnf-6.webp"
        ],
        details: {
            type: "Logo design for a charity organization",
            tools: "Illustrator",
            description: "FdnF (Frères de nos frères) is a non-profit organization that addresses the needs of vulnerable populations by collaborating with local organizations. The organization works primarily in the areas of sustainable agriculture, ecology, and education in 28 different countries across Asia, Africa, and South America. For the association's 60th anniversary, the organization requested a redesign of its logo to better reflect its values."
        },
        casestudy: {
            overview: "FdnF (Frères de nos frères) is a non-profit organization working with vulnerable communities through sustainable agriculture, ecology, and education projects across 28 countries in Asia, Africa, and South America. The redesign addresses donors, partners, and local organizations engaged in long-term humanitarian action.",
            challenge: "For the organization's 60th anniversary, redesign the logo to better represent its goals, core principles, and global reach while honoring its history.",
            methodology: "The redesign prioritized humanity, symbolism, and clarity. The updated logo translates the organization's dedication to long-term partnerships and local empowerment into a more modern and significant visual form by emphasizing solidarity, connection, and cooperation.",
            result: "In addition to giving FdnF a fresh symbol for upcoming communications, the new logo enhances the company's visual identity and aligns its image with its values and global impact."
        }
    },
    4: {
        images: [
            "img/shimmer-1.webp",
            "img/shimmer-2.webp",
            "img/shimmer-3.webp",
            "img/shimmer-4.webp"
        ],
        details: {
            type: "Packaging, product design",
            tools: "Illustrator, InDesign",
            description: "Shimmer is a natural ogm-free brand that delivers healthy and nutritious energy bars. Each bar comes with a mix of three different ingredients that give an unique taste. The objective was to deliver a clean and pure design that reflects those values."
        },
        casestudy: {
            overview: "Shimmer is a natural, non-GMO energy bar brand that emphasizes clean nutrition and basic ingredients. Each bar, which combines three essential ingredients to provide a healthy and accessible energy experience, is intended for consumers who are health-conscious, active, and looking for a balanced energy boost without artificial additives.",
            challenge: "Develop a packaging design that sets the brand apart in a crowded functional snack market while conveying purity, naturalness, and energy at the shelf level.",
            methodology: "The visual identity draws inspiration from Montélimar nougat, known for its airy texture and minimal composition of almond, honey, and egg whites. A light color palette, generous white space, and subtle almond textures were used to express transparency, simplicity, and quality ingredients.",
            result: "The final packaging system enhances shelf impact while reiterating freshness, trust, and nutritional value by translating the product's natural composition into a clear, modern visual language."
        }
    },
    5: {
        images: [
            "img/mooc-fle-1.webp",
            "img/mooc-fle-2.webp",
            "img/mooc-fle-3.webp",
            "img/mooc-fle-4.webp",
            "video/mooc-fle-5.mp4"
        ],
        details: {
            type: "Visual identity",
            tools: "Photoshop, Illustrator, Premiere Pro",
            description: "The FLE (Français Langue Étrangère) MOOC is a course that aims to support worldwide french teachers by offering a course on learning different teaching perspectives. It is born from a collaboration between the University of Geneva and the OIF (Organisation Internationale de la Francophonie)."
        },
        casestudy: {
            overview: "The FLE (Français Langue Étrangères) MOOC is an online course designed for French teachers across the world. The MOOC aims to offer diverse pedagogical perspectives. Educators, academics and teaching professionals working in the instruction of the French language are the target audience.",
            challenge: "The task was to create a clear and coherent visual identity which reflects the educational mission of the MOOC while connecting it to its institutional partners.",
            methodology: "The identity draws from the visual languages of the University of Geneva (UNIGE) and the Organisation Internationale de la Francophonie (OIF). A palette of five colors represents the five courses within the MOOC, helping structure content and navigation. Dialogue-shaped graphic elements emphasize communication, exchange, and pedagogy at the heart of language learning.",
            result: "The project resulted in the creation of a logo accompanied by a structured, clear visual system that supports both educational clarity and international reach while remaining coherent to the constraints given."
        }
    },
    6: {
        images: [
            "img/louwu-1.webp",
            "img/louwu-2.webp",
            "img/louwu-3.webp",
            "img/louwu-4.webp"
        ],
        details: {
            type: "Packaging",
            tools: "Photoshop, Illustrator, Blender",
            description: "Louwu is a tea brand inspired from the region of Hubei, China. It offers a calm and yet strong flavour to be enjoyed in a rainy day. The texture used for its packaging reflects the morning fog emaning from the Yangtze river."
        },
        casestudy: {
            overview: "Louwu is a tea brand inspired by the Hubei province in China, appealing to an audience who seeks calm, depth and authenticity in their daily rituals.",
            challenge: "Translate the sense the tea evokes: soothing and potent, into an image that includes atmosphere and meaning.",
            methodology: "The packaging design uses subtle textures inspired by the morning fog rising from the Yangtze River. Soft visual elements and restrained typography evoke mist, rain, and stillness, representing the flavor profile and mood associated with the tea.",
            result: "The final packaging creates a serene and evocative brand presence, reinforcing Louwu’s connection to its landscape and offering a tactile, immersive experience aligned with the product’s essence."
        }
    },
    7: {
        images: [
            "img/ndb-1.webp",
            "img/ndb-2.webp",
            "img/ndb-3.webp",
            "img/ndb-4.webp",
            "img/ndb-5.webp",
            "img/ndb-6.webp"
        ],
        details: {
            type: "Visual identity",
            tools: "Photoshop, InDesign, AfterEffects, Collage",
            description: "CFC diploma project on the theme of the Night of the Libraries, this work consisted of creating a visual identity for a nighttime event centered around 5 libraries in Geneva."
        },
        casestudy: {
            overview: "",
            challenge: "",
            methodology: "",
            result: ""
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
    <h6 class="text-muted">CATEGORY</h6>
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
    
    <div class="col-md-12"><br></div>
        
    <style>
        .slide-wrapper {
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            transition: max-height 0.6s ease, opacity 0.4s ease;
        }

        .slide-wrapper.open {
            max-height: 2000px;
            opacity: 1;
        }

        #showBtn {
            color: #6c757d;
            border-color: #6c757d;
        }

        #showBtn:hover {
            color: #0a0a0a;
            background-color: #6c757d;
        }

        #lessBtn:hover {
            color: #0a0a0a;
        }
    </style>

    <div class="col-md-12 text-center mb-3">
        <button id="showBtn"
            class="btn btn-outline-primary"
            onclick="
                document.getElementById('toggleContent').classList.add('open');
                this.style.display='none';
            ">
            Project details ↓
        </button>
    </div>

    <div id="toggleContent" class="slide-wrapper">

        <div class="col-md-12">
            <div class="col-md-12"><br></div>

            <div class="col-md-6">
                <h6 class="text-muted">OVERVIEW</h6>
                <p class="mb-0">${gallery.casestudy.overview}</p><br>
            </div>

            <div class="col-md-6">
                <h6 class="text-muted">CHALLENGE</h6>
                <p class="mb-0">${gallery.casestudy.challenge}</p>
            </div>

            <div class="col-md-12"><br></div>

            <div class="col-md-6">
                <h6 class="text-muted">DESIGN APPROACH</h6>
                <p class="mb-0">${gallery.casestudy.methodology}</p><br>
            </div>

            <div class="col-md-6">
                <h6 class="text-muted">RESULT</h6>
                <p class="mb-0">${gallery.casestudy.result}</p>
            </div>
        </div>

        <div class="col-md-12 text-center mt-4">
            <button class="btn btn-outline-secondary" id="lessBtn"
                onclick="
                    document.getElementById('toggleContent').classList.remove('open');
                    document.getElementById('showBtn').style.display='inline-block';
                ">
                Show less ↑
            </button>
        </div>

    </div>
    `;

    // Image & video grid
    const projectImages = document.getElementById("projectImages");
    projectImages.innerHTML = "";

    gallery.images.forEach(src => {
    const col = document.createElement("div");
    col.classList.add("col-md-12", "col-lg-12");

    // Check if it's a video
    if (src.match(/\.(mp4|webm|ogg)$/i)) {
        const video = document.createElement("video");
        video.src = src;
        video.classList.add("img-fluid", "rounded", "shadow-sm");
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;

        col.appendChild(video);
    } else {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("img-fluid", "rounded", "shadow-sm");

        col.appendChild(img);
    }

    projectImages.appendChild(col);
    });

    });
});
