function initializeWebsite() {

    const hero = portfolioData.hero;
    document.getElementById("navlogo").src = hero.logo;

    const isHomePage = document.getElementById("heroName");
    const isAboutPage = document.getElementById("aboutPageImage");
    const isSkillsPage = document.getElementById("skillsPage");
    const isProjectsPage = document.getElementById("projectsPage");
    const isContactPage = document.getElementById("contactPage");

    if (isHomePage) {
        loadHero();
        loadAbout();
        loadExperience();
    }

    if (isAboutPage) {
        loadAboutPage();
        loadEducation();
        loadCertifications();
        loadAdditionalInfo();
    }
    if (isSkillsPage) {
    loadSkills();
    }

    if (isProjectsPage) {
    loadProjects();
    }
    if(isContactPage) {
    loadContactPage();
}

}

function loadHero() {
    const hero = portfolioData.hero;

    document.getElementById("heroName").textContent = hero.name;
    document.getElementById("city").textContent = hero.city;
    document.getElementById("heroSummary").textContent = hero.shortSummery;
    document.getElementById("heroImage").src = hero.profileImage;
    document.querySelector(".hero-subtitle").textContent = hero.title;

}

function loadAbout() {
    const about = portfolioData.about;

    document.getElementById("aboutImage").src = about.profileImage2;
    document.getElementById("aboutSummary").textContent = about.professionalSummary;    
    document.getElementById("resume").src = "assets/logo/download.png";
    document.getElementById("resumeBtn").href = about.resume;
}

function loadExperience() {
    const expData = portfolioData.experience;
    const container = document.getElementById("experienceContainer");

    container.innerHTML = "";

    // Group items (3 per slide for desktop)
    let groupSize = window.innerWidth >= 992 ? 3 : 1;

    for (let i = 0; i < expData.length; i += groupSize) {
        let group = expData.slice(i, i + groupSize);

        let slide = document.createElement("div");
        slide.className = "carousel-item";
        if (i === 0) slide.classList.add("active");

        let row = document.createElement("div");
        row.className = "row";

        group.forEach(exp => {
            let col = document.createElement("div");
            col.className = "col-lg-4 mb-4";

            col.innerHTML = `
                <div class="exp-card">
                    <h5 class="exp-role">${exp.role}</h5>
                    <div class="exp-company">${exp.company}</div>
                    <div class="exp-duration">${exp.duration}</div>

                    <ul class="exp-list">
                        ${exp.description.map(d => `<li>${d}</li>`).join("")}
                    </ul>
                </div>
            `;

            row.appendChild(col);
        });

        slide.appendChild(row);
        container.appendChild(slide);
    }
}

function loadAboutPage() {
    const data = portfolioData.about2;
    document.getElementById("aboutPageImage").src = data.aboutImage;
    document.getElementById("aboutPageSummary").textContent = data.summary;
    document.getElementById("whyContent").textContent = data.whyWorkWithMe;
}
function loadEducation() {
    const eduData = portfolioData.education;
    const container = document.getElementById("educationContainer");

    container.innerHTML = "";

    eduData.forEach(edu => {
        const col = document.createElement("div");
        col.className = "col-lg-4 mb-4";

        col.innerHTML = `
            <div class="edu-card">
                <img src="${edu.institutionLogo}" class="edu-logo" alt="">
                <h5 class="edu-degree">${edu.degree}</h5>
                <h6 class="edu-inst">${edu.institution}</h6>
                <p class="edu-duration">${edu.duration}</p>

                <a href="${edu.resultImage}" target="_blank" class="btn btn-outline-gold mt-2">
                    View Result
                </a>
            </div>
        `;

        container.appendChild(col);
    });
}

function loadCertifications() {
    const certData = portfolioData.certifications;
    const container = document.getElementById("certContainer");

    container.innerHTML = "";

    let groupSize = window.innerWidth >= 992 ? 3 : 1;

    for (let i = 0; i < certData.length; i += groupSize) {
        let group = certData.slice(i, i + groupSize);

        let slide = document.createElement("div");
        slide.className = "carousel-item";
        if (i === 0) slide.classList.add("active");

        let row = document.createElement("div");
        row.className = "row";

        group.forEach(cert => {
            let col = document.createElement("div");
            col.className = "col-lg-4 mb-4";

            col.innerHTML = `
                <div class="cert-card">
                    <img src="${cert.image}" alt="">
                    <div class="cert-overlay">
                        <div class="cert-title">${cert.name}</div>
                        <div class="cert-source">${cert.source}</div>
                    </div>
                </div>
            `;

            row.appendChild(col);
        });

        slide.appendChild(row);
        container.appendChild(slide);
    }
}
function loadAdditionalInfo() {
    const data = portfolioData.additionalInfo;

    // BASIC INFO
    const basic = document.getElementById("basicInfo");

    basic.innerHTML = `
        <div class="col-md-3"><div class="info-box" style="height:70px;">DOB: ${data.dob}</div></div>
        <div class="col-md-3"><div class="info-box" style="height:70px;">Native: ${data.native}</div></div>
        <div class="col-md-3"><div class="info-box" style="height:70px;">Citizenship: ${data.citizenship}</div></div>
        <div class="col-md-3"><div class="info-box" style="height:70px;">Marital Status: ${data.maritalStatus}</div></div>
    `;

    // LANGUAGES
    document.getElementById("langTitle").textContent = data.languages.title;
    document.getElementById("langIntro").textContent = data.languages.intro;

    const langContainer = document.getElementById("langContainer");

    data.languages.items.forEach(l => {
        langContainer.innerHTML += `
            <div class="small-card">
                <img src="${l.logo}">
                <div class="small-overlay">
                    <p style="color: #dbab2d; font-weight:bolder; margin: 0px;">${l.language}</p>${l.Proficiency}
                </div>
            </div>
        `;
    });

    // INTEREST
    document.getElementById("intTitle").textContent = data.interestAreas.title;
    document.getElementById("intIntro").textContent = data.interestAreas.intro;

    const interestContainer = document.getElementById("interestContainer");

    data.interestAreas.items.forEach(i => {
        interestContainer.innerHTML += `
            <div class="small-card">
                <img src="${i.logo}">
                <div class="small-overlay" style="color: #dbab2d; font-weight:bolder;">${i.title}</div>
            </div>
        `;
    });
}
function loadSkills() {
    const skills = portfolioData.skills;
    const container = document.getElementById("skillsContainer");

    // Intro
    document.getElementById("skillsIntro").textContent = skills.intro;

    // Loop through ALL keys dynamically
    Object.keys(skills).forEach(key => {

        // Skip intro
        if (key === "intro") return;

        const sectionData = skills[key];

        let section = document.createElement("div");
        section.className = "skill-section";

        let html = `
            <h3>${sectionData.title}</h3>
            <div class="skills-flex">
        `;

        sectionData.items.forEach(skill => {
            html += `
                <div class="col-6 col-md-4 col-lg-3 mb-4">
                    <div class="skill-card">

                        <!-- LOGO -->
                        <img src="${skill.logo}" alt="${skill.name}">

                        <!-- HOVER -->
                        <div class="skill-overlay">
                            <div class="skill-name">${skill.name}</div>
                            ${
                                skill.level !== undefined
                                ? `<div class="skill-level">${skill.level}%</div>`
                                : ""
                            }
                        </div>

                    </div>
                </div>
            `;
        });

        html += `</div>`;
        section.innerHTML = html;

        container.appendChild(section);
    });
}

function loadProjects() {
    const projects = portfolioData.projects;
    const container = document.getElementById("projectsContainer");

    container.innerHTML = "";

    projects.forEach(project => {

        let techHTML = "";
        project.tech.forEach(t => {
            techHTML += `<span class="tech-badge">${t}</span>`;
        });

        let buttonsHTML = "";

        if (project.github) {
            buttonsHTML += `<a href="${project.github}" target="_blank" class="btn btn-sm btn-outline-light">GitHub</a>`;
        }

        if (project.demo) {
            buttonsHTML += `<a href="${project.demo}" target="_blank" class="btn btn-sm btn-warning">Live Demo</a>`;
        }

        let card = `
            <div class="project-card">
                
                <div>
                    <h4 class="project-title">${project.name}</h4>
                    <p class="project-desc">${project.description}</p>
                    <p class="project-title">${project.duration}</p>

                    <div class="tech-stack">
                        ${techHTML}
                    </div>
                </div>

                <div class="project-buttons">
                    ${buttonsHTML}
                </div>

            </div>
        `;

        container.innerHTML += card;
    });
}
function loadContactPage() {
    const contact = portfolioData.contact;

    // Image (first contact logo, or profile)
    document.getElementById("contactImage").src = contact.contactImg;

    // Title + Intro
    document.getElementById("contactTitle").textContent = contact.title;
    document.getElementById("contactIntro1").textContent = contact.para1;
    document.getElementById("contactIntro2").textContent = contact.para2;
    document.getElementById("contactIntro3").textContent = contact.para3;
    document.getElementById("resume").src = "assets/logo/download.png";
    document.getElementById("mail").src = "assets/logo/email.png";

    // Email Button
    
    const about = portfolioData.about;
    document.getElementById("resumeBtn").href = about.resume;

    document.getElementById("contactEmailBtn").href = `mailto:${contact.item.find(i => i.title === "Email").content}?subject=Hello Amar`;

    const requiredItems = ["Address", "Phone", "Email", "Whatsapp"];

    const container = document.getElementById("contactInfo");
    container.innerHTML = "";

    contact.item
        .filter(item => requiredItems.includes(item.title)) 
        .forEach(item => {

            let link = "#";

            if (item.title === "Phone") {
                link = `tel:${item.content}`;
            }

            if (item.title === "Email") {
                link = `mailto:${item.content}?subject=Contact%20from%20Portfolio&body=Hello%2C%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0AThanks
 `;
            }

            if (item.title === "Address") {
                link = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.content)}`;
            }

            if (item.title === "Whatsapp") {
    if (item.content) {
        const number = item.content;
        link = `https://wa.me/${number}?text=Hello Amar, I connect you from your Portfolio!`;
    } else {
        link = "#"; // no number available
    }
}

            const card = document.createElement("div");
            card.className = "col-12 col-md-4 contact-info-card text-center";

            card.innerHTML = `
                <img src="${item.logo}" alt="${item.title}" width="35" class="mb-2">
                <div>${item.content}</div>
            `;

            card.addEventListener("click", () => {
                window.open(link, "_blank");
            });

            container.appendChild(card);
        });
}
