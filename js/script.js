let data = {};

// ===== FLOATING LABEL FUNCTION =====
function applyFloatingLabels() {
  const fields = document.querySelectorAll("input, textarea");

  fields.forEach(field => {
    if (field.parentElement.classList.contains("form-group")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "form-group";

    const label = document.createElement("label");

    label.innerText =
      field.getAttribute("placeholder") ||
      field.getAttribute("id") ||
      "Field";

    field.setAttribute("placeholder", " ");

    field.parentNode.insertBefore(wrapper, field);
    wrapper.appendChild(field);
    wrapper.appendChild(label);
  });
}

// LOAD JSON
fetch('data/portfolio.json')
  .then(res => res.json())
  .then(json => {
    data = json;
    fillForm();
    applyFloatingLabels();
  });

// ===== FILL FORM =====
function fillForm() {
  document.getElementById("hero-name").value = data.hero.name;
  document.getElementById("hero-title").value = data.hero.title;
  document.getElementById("hero-city").value = data.hero.city;
  document.getElementById("hero-summary").value = data.hero.shortSummery;
  document.getElementById("hero-profileImage").value = data.hero.profileImage;
  document.getElementById("hero-logo").value = data.hero.logo;

  document.getElementById("about-image").value = data.about.profileImage2;
  document.getElementById("about-summary").value = data.about.professionalSummary;
  document.getElementById("about-resume").value = data.about.resume;

  document.getElementById("about2-image").value = data.about2.aboutImage;
  document.getElementById("about2-summary").value = data.about2.summary;
  document.getElementById("about2-why").value = data.about2.whyWorkWithMe;

  document.getElementById("skills-intro").value = data.skills.intro;

  document.getElementById("dob").value = data.additionalInfo.dob;
  document.getElementById("native").value = data.additionalInfo.native;
  document.getElementById("citizenship").value = data.additionalInfo.citizenship;
  document.getElementById("maritalStatus").value = data.additionalInfo.maritalStatus;

  document.getElementById("lang-title").value = data.additionalInfo.languages.title;
  document.getElementById("lang-intro").value = data.additionalInfo.languages.intro;

  document.getElementById("interest-title").value = data.additionalInfo.interestAreas.title;
  document.getElementById("interest-intro").value = data.additionalInfo.interestAreas.intro;

  document.getElementById("contact-title").value = data.contact.title;
  document.getElementById("contact-img").value = data.contact.contactImg;

  document.getElementById("contact-para1").value = data.contact.para1;
  document.getElementById("contact-para2").value = data.contact.para2;
  document.getElementById("contact-para3").value = data.contact.para3;

  renderSkills();
  renderEducation();
  renderCertifications();
  renderExperience();
  renderProjects();
  renderLanguages();
  renderInterests();
  renderContactItems();

  applyFloatingLabels();
}

// ===== UPDATE HERO =====
document.querySelectorAll("#hero-name, #hero-title, #hero-city, #hero-summary, #hero-profileImage, #hero-logo")
.forEach(input => {
  input.addEventListener("input", () => {
    data.hero.name = document.getElementById("hero-name").value;
    data.hero.title = document.getElementById("hero-title").value;
    data.hero.city = document.getElementById("hero-city").value;
    data.hero.shortSummery = document.getElementById("hero-summary").value;
    data.hero.profileImage = document.getElementById("hero-profileImage").value;
    data.hero.logo = document.getElementById("hero-logo").value;
  });
});

// ===== EDUCATION =====
function renderEducation() {
  const container = document.getElementById("education-container");
  container.innerHTML = "";

  data.education.forEach((edu, i) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <input placeholder="Degree" value="${edu.degree}" onchange="updateEducation(${i}, 'degree', this.value)">
      <input placeholder="Institution" value="${edu.institution}" onchange="updateEducation(${i}, 'institution', this.value)">
      <input placeholder="Duration" value="${edu.duration}" onchange="updateEducation(${i}, 'duration', this.value)">
      <input placeholder="Logo" value="${edu.institutionLogo}" onchange="updateEducation(${i}, 'institutionLogo', this.value)">
      <input placeholder="Result Image" value="${edu.resultImage}" onchange="updateEducation(${i}, 'resultImage', this.value)">
      <button class="delete-btn" onclick="deleteEducation(${i})">Delete</button>
    `;

    container.appendChild(div);
  });

  applyFloatingLabels();
}

function updateEducation(i, key, value) {
  data.education[i][key] = value;
}

function addEducation() {
  data.education.push({
    degree: "",
    institution: "",
    duration: "",
    institutionLogo: "",
    resultImage: ""
  });
  renderEducation();
}

function deleteEducation(i) {
  data.education.splice(i, 1);
  renderEducation();
}

// ===== CERTIFICATIONS =====
function renderCertifications() {
  const container = document.getElementById("certifications-container");
  container.innerHTML = "";

  data.certifications.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <input placeholder="Name" value="${item.name}" onchange="updateCertification(${i}, 'name', this.value)">
      <input placeholder="Source" value="${item.source}" onchange="updateCertification(${i}, 'source', this.value)">
      <input placeholder="Image" value="${item.image}" onchange="updateCertification(${i}, 'image', this.value)">
      <button class="delete-btn" onclick="deleteCertification(${i})">Delete</button>
    `;

    container.appendChild(div);
  });

  applyFloatingLabels();
}

function updateCertification(i, key, value) {
  data.certifications[i][key] = value;
}

function addCertification() {
  data.certifications.push({ name: "", source: "", image: "" });
  renderCertifications();
}

function deleteCertification(i) {
  data.certifications.splice(i, 1);
  renderCertifications();
}

// ===== EXPERIENCE =====
function renderExperience() {
  const container = document.getElementById("experience-container");
  container.innerHTML = "";

  data.experience.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <input placeholder="Role" value="${item.role}" onchange="updateExperience(${i}, 'role', this.value)">
      <input placeholder="Company" value="${item.company}" onchange="updateExperience(${i}, 'company', this.value)">
      <input placeholder="Duration" value="${item.duration}" onchange="updateExperience(${i}, 'duration', this.value)">
      <textarea placeholder="Description" onchange="updateExperienceDesc(${i}, this.value)">${item.description.join('\n')}</textarea>
      <button class="delete-btn" onclick="deleteExperience(${i})">Delete</button>
    `;

    container.appendChild(div);
  });

  applyFloatingLabels();
}

function updateExperience(i, key, value) {
  data.experience[i][key] = value;
}

function updateExperienceDesc(i, value) {
  data.experience[i].description = value.split("\n");
}

function addExperience() {
  data.experience.push({ role: "", company: "", duration: "", description: [] });
  renderExperience();
}

function deleteExperience(i) {
  data.experience.splice(i, 1);
  renderExperience();
}

// ===== PROJECTS =====
function renderProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  data.projects.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <input placeholder="Project Name" value="${item.name}" onchange="updateProject(${i}, 'name', this.value)">
      <textarea placeholder="Description" onchange="updateProject(${i}, 'description', this.value)">${item.description}</textarea>
      <input placeholder="Tech Stack" value="${item.tech.join(', ')}" onchange="updateProjectTech(${i}, this.value)">
      <input placeholder="Duration" value="${item.duration}" onchange="updateProject(${i}, 'duration', this.value)">
      <input placeholder="GitHub" value="${item.github}" onchange="updateProject(${i}, 'github', this.value)">
      <input placeholder="Demo Link" value="${item.demo}" onchange="updateProject(${i}, 'demo', this.value)">
      <button class="delete-btn" onclick="deleteProject(${i})">Delete</button>
    `;

    container.appendChild(div);
  });

  applyFloatingLabels();
}

function updateProject(i, key, value) {
  data.projects[i][key] = value;
}

function updateProjectTech(i, value) {
  data.projects[i].tech = value.split(",").map(t => t.trim());
}

function addProject() {
  data.projects.push({ name: "", description: "", tech: [], duration: "", github: "", demo: "" });
  renderProjects();
}

function deleteProject(i) {
  data.projects.splice(i, 1);
  renderProjects();
}

// ===== SKILLS =====
function renderSkills() {
  const container = document.getElementById("skills-container");
  container.innerHTML = "";

  data.skills.categories.forEach((cat, i) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <input style="font-weight:bolder; font-size:18px;" placeholder="Category Title" value="${cat.title}" onchange="updateCategory(${i}, this.value)">
      <div id="skills-items-${i}"></div>
      <button class="add-btn" onclick="addSkill(${i})">Add Skill</button>
      <button class="delete-btn" onclick="deleteCategory(${i})">Delete Category</button>
    `;

    container.appendChild(div);
    renderSkillsItems(i);
  });

  applyFloatingLabels();
}

function renderSkillsItems(catIndex) {
  const container = document.getElementById(`skills-items-${catIndex}`);
  container.innerHTML = "";

  const items = data.skills.categories[catIndex].items;

  items.forEach((item, i) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <input placeholder="Name" value="${item.name}" onchange="updateSkill(${catIndex}, ${i}, 'name', this.value)">
      <input placeholder="Level" value="${item.level || ''}" onchange="updateSkill(${catIndex}, ${i}, 'level', this.value)">
      <input placeholder="Logo" value="${item.logo}" onchange="updateSkill(${catIndex}, ${i}, 'logo', this.value)">
      <button class="delete-btn" onclick="deleteSkill(${catIndex}, ${i})">Delete</button>
    `;

    container.appendChild(div);
  });

  applyFloatingLabels();
}

function updateCategory(i, value) {
  data.skills.categories[i].title = value;
}

function addCategory() {
  data.skills.categories.push({
    title: "New Category",
    items: [{ name: "", level: 0, logo: "" }]
  });
  renderSkills();
}

function deleteCategory(i) {
  data.skills.categories.splice(i, 1);
  renderSkills();
}

function updateSkill(cat, i, key, value) {
  data.skills.categories[cat].items[i][key] =
    key === "level" ? Number(value) : value;
}

function addSkill(cat) {
  data.skills.categories[cat].items.push({
    name: "",
    level: 0,
    logo: ""
  });
  renderSkillsItems(cat);
}

function deleteSkill(cat, i) {
  data.skills.categories[cat].items.splice(i, 1);
  renderSkillsItems(cat);
}

// ===== LANGUAGES =====
function renderLanguages() {
  const container = document.getElementById("languages-container");
  container.innerHTML = "";

  data.additionalInfo.languages.items.forEach((item, i) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <input placeholder="Language" value="${item.language}" onchange="updateLang(${i}, 'language', this.value)">
      <input placeholder="Proficiency" value="${item.Proficiency}" onchange="updateLang(${i}, 'Proficiency', this.value)">
      <input placeholder="Logo" value="${item.logo}" onchange="updateLang(${i}, 'logo', this.value)">
      <button class="delete-btn" onclick="deleteLang(${i})">Delete</button>
    `;

    container.appendChild(div);
  });

  applyFloatingLabels();
}

function updateLang(i, key, value) {
  data.additionalInfo.languages.items[i][key] = value;
}

function addLanguage() {
  data.additionalInfo.languages.items.push({
    language: "",
    Proficiency: "",
    logo: ""
  });
  renderLanguages();
}

function deleteLang(i) {
  data.additionalInfo.languages.items.splice(i, 1);
  renderLanguages();
}

// ===== INTERESTS =====
function renderInterests() {
  const container = document.getElementById("interest-container");
  container.innerHTML = "";

  data.additionalInfo.interestAreas.items.forEach((item, i) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <input placeholder="Title" value="${item.title}" onchange="updateInterest(${i}, 'title', this.value)">
      <input placeholder="Logo" value="${item.logo}" onchange="updateInterest(${i}, 'logo', this.value)">
      <button class="delete-btn" onclick="deleteInterest(${i})">Delete</button>
    `;

    container.appendChild(div);
  });

  applyFloatingLabels();
}

function updateInterest(i, key, value) {
  data.additionalInfo.interestAreas.items[i][key] = value;
}

function addInterest() {
  data.additionalInfo.interestAreas.items.push({
    title: "",
    logo: ""
  });
  renderInterests();
}

function deleteInterest(i) {
  data.additionalInfo.interestAreas.items.splice(i, 1);
  renderInterests();
}

// ===== CONTACT =====
function renderContactItems() {
  const container = document.getElementById("contact-container");
  container.innerHTML = "";

  data.contact.item.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <input placeholder="Title" value="${item.title}" onchange="updateContactItem(${i}, 'title', this.value)">
      <input placeholder="Content" value="${item.content}" onchange="updateContactItem(${i}, 'content', this.value)">
      <input placeholder="Logo" value="${item.logo}" onchange="updateContactItem(${i}, 'logo', this.value)">
      <button class="delete-btn" onclick="deleteContactItem(${i})">Delete</button>
    `;

    container.appendChild(div);
  });

  applyFloatingLabels();
}

function updateContactItem(i, key, value) {
  data.contact.item[i][key] = value;
}

function addContactItem() {
  data.contact.item.push({
    title: "",
    content: "",
    logo: ""
  });
  renderContactItems();
}

function deleteContactItem(i) {
  data.contact.item.splice(i, 1);
  renderContactItems();
}

// ===== DIRECT INPUTS =====
document.getElementById("dob").oninput = e => data.additionalInfo.dob = e.target.value;
document.getElementById("native").oninput = e => data.additionalInfo.native = e.target.value;
document.getElementById("citizenship").oninput = e => data.additionalInfo.citizenship = e.target.value;
document.getElementById("maritalStatus").oninput = e => data.additionalInfo.maritalStatus = e.target.value;

document.getElementById("lang-title").oninput = e => data.additionalInfo.languages.title = e.target.value;
document.getElementById("lang-intro").oninput = e => data.additionalInfo.languages.intro = e.target.value;

document.getElementById("interest-title").oninput = e => data.additionalInfo.interestAreas.title = e.target.value;
document.getElementById("interest-intro").oninput = e => data.additionalInfo.interestAreas.intro = e.target.value;

document.getElementById("contact-title").oninput = e => data.contact.title = e.target.value;
document.getElementById("contact-img").oninput = e => data.contact.contactImg = e.target.value;
document.getElementById("contact-para1").oninput = e => data.contact.para1 = e.target.value;
document.getElementById("contact-para2").oninput = e => data.contact.para2 = e.target.value;
document.getElementById("contact-para3").oninput = e => data.contact.para3 = e.target.value;

// ===== DOWNLOAD =====
function downloadJSON() {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");

  a.href = URL.createObjectURL(blob);
  a.download = "portfolio.json";
  a.click();
}