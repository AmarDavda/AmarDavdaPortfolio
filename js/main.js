function initializeWebsite() {

    // HOME PAGE SECTIONS
    if (document.getElementById("hero")) {
        loadHeroSection();
        loadEducationSection();
        loadSkillsSection();
        loadCertificationsSection();
        loadAdditionalSection();
        loadContactSection();
    }

    // EXPERIENCE PAGE
    if (document.getElementById("experience-container")) {
        loadExperiencePage();
    }

    // PROJECTS PAGE
    if (document.getElementById("projects-container")) {
        loadProjectsPage();
    }

}

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});



function loadHeroSection() {

    const hero = portfolioData.hero;

    const container = document.getElementById("hero-content");

    container.innerHTML = `
        <div class="hero-wrapper">

            <div class="hero-text">
                <h1>${hero.name}</h1>
                <h2>${hero.title}</h2>
                <p>${hero.summary}</p>

                <div class="hero-buttons">
                    <a href="${hero.resume}" download>Download Resume</a>
                    <a href="projects.html">View Projects</a>
                </div>
            </div>

            <div class="hero-image">
                <img src="${hero.profileImage}" alt="Profile Photo">
            </div>

        </div>
    `;

}

function loadEducationSection() {

    const educationList = portfolioData.education;

    const container = document.getElementById("education-container");

    container.innerHTML = "";

    educationList.forEach(edu => {

        const card = `
    <div class="education-card">

        <img src="${edu.institutionLogo}" alt="${edu.institution} Logo" class="edu-logo">

        <h3>${edu.degree}</h3>

        <p class="edu-institution">${edu.institution}</p>

        <p class="edu-duration">${edu.duration}</p>

        <a href="${edu.resultImage}" target="_blank" class="edu-result-btn">
            View Result
        </a>

    </div>
`;


        container.innerHTML += card;

    });

}

function loadSkillsSection() {

    const technicalSkills = portfolioData.skills.technical;
    const softSkills = portfolioData.skills.soft;

    const techContainer = document.getElementById("technical-skills");
    const softContainer = document.getElementById("soft-skills");

    techContainer.innerHTML = "<h3>Technical Skills</h3>";
    softContainer.innerHTML = "<h3>Soft Skills</h3>";


    // ===== Technical Skills =====
    technicalSkills.forEach(skill => {

        const card = `
            <div class="skill-card">

                <img src="${skill.logo}" alt="${skill.name} logo">

                <div class="skill-info">
                    <p>${skill.name}</p>
                    <span>${skill.level}%</span>
                </div>

            </div>
        `;

        techContainer.innerHTML += card;

    });


    // ===== Soft Skills =====
    softSkills.forEach(skill => {

        const card = `
            <div class="soft-skill-card">
                ${skill}
            </div>
        `;

        softContainer.innerHTML += card;

    });

}

function loadCertificationsSection() {

    const certifications = portfolioData.certifications;

    const container = document.getElementById("certifications-container");

    container.innerHTML = "";

    certifications.forEach(cert => {

        const card = `
            <div class="certificate-card">

                <img src="${cert.image}" alt="${cert.name}">

                <div class="certificate-info">
                    <h3>${cert.name}</h3>
                    <p>${cert.source}</p>
                </div>

            </div>
        `;

        container.innerHTML += card;

    });

}

function loadAdditionalSection() {

    const additional = portfolioData.additional;

    const container = document.getElementById("additional-container");

    container.innerHTML = "";



    // ===== Languages =====
    let languagesHTML = "<div class='additional-group'><h3>Languages</h3>";

    additional.languages.forEach(lang => {
        languagesHTML += `<span class="tag">${lang}</span>`;
    });

    languagesHTML += "</div>";



    // ===== Tools =====
    let toolsHTML = "<div class='additional-group'><h3>Tools</h3>";

    additional.tools.forEach(tool => {
        toolsHTML += `<span class="tag">${tool}</span>`;
    });

    toolsHTML += "</div>";



    // ===== Interests =====
    let interestsHTML = "<div class='additional-group'><h3>Interests</h3>";

    additional.interests.forEach(interest => {
        interestsHTML += `<span class="tag">${interest}</span>`;
    });

    interestsHTML += "</div>";



    // ===== Industry Visits =====
    let visitsHTML = "<div class='additional-group'><h3>Industry Visits</h3>";

    additional.industryVisits.forEach(visit => {
        visitsHTML += `
            <div class="visit-card">
                <p>${visit.name}</p>
                <span>${visit.date}</span>
            </div>
        `;
    });

    visitsHTML += "</div>";



    container.innerHTML =
        languagesHTML +
        toolsHTML +
        interestsHTML +
        visitsHTML;

}

function loadContactSection() {

    const contact = portfolioData.contact;

    const container = document.getElementById("contact-container");

    container.innerHTML = `

<div class="contact-info">

    <a class="contact-item"
       href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}"
       target="_blank">
        <img src="assets/logo/loc.png" alt="Location">
        <span>${contact.address}</span>

    </a>

    <a class="contact-item"
       href="tel:${contact.phone.replace(/\s/g,'')}">

        <img src="assets/logo/phn.png" alt="Phone">
        <span>${contact.phone}</span>

    </a>

    <a class="contact-item"
       href="mailto:${contact.email}?subject=Contact%20from%20Portfolio&body=Hello%20Amar,">

        <img src="assets/logo/mail.png" alt="Email">
        <span>${contact.email}</span>

    </a>

</div>


<div class="contact-social">

    <a href="${contact.github}" target="_blank">
        <img src="assets/logo/git.png" alt="GitHub">
    </a>

    <a href="${contact.linkedin}" target="_blank">
        <img src="assets/logo/lin.png" alt="LinkedIn">
    </a>

</div>

`;


}

function loadExperiencePage() {

    const experiences = portfolioData.experience;

    const container = document.getElementById("experience-container");

    container.innerHTML = "";

    experiences.forEach(exp => {

        let descriptionHTML = "";

        exp.description.forEach(point => {
            descriptionHTML += `<li>${point}</li>`;
        });

        const card = `
            <div class="experience-card">

                <h2>${exp.role}</h2>

                <h3>${exp.company}</h3>

                <p class="exp-duration">${exp.duration}</p>

                <ul>
                    ${descriptionHTML}
                </ul>

            </div>
        `;

        container.innerHTML += card;

    });

}

function loadProjectsPage() {

    const projects = portfolioData.projects;

    const container = document.getElementById("projects-container");

    container.innerHTML = "";

    projects.forEach(project => {

        let techStack = "";

        project.tech.forEach(t => {
            techStack += `<span class="tech-tag">${t}</span>`;
        });

        const card = `
            <div class="project-card">

                <h2>${project.name}</h2>

                <p>${project.description}</p>

                <div class="project-tech">
                    ${techStack}
                </div>

                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank">GitHub</a>` : ""}
                    ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo</a>` : ""}
                </div>

            </div>
        `;

        container.innerHTML += card;

    });

}
