// Function to create a company and its contacts elements
function createCompanyElement(company) {
  const companyEl = document.createElement("div");
  companyEl.className =
    "company-container m-4 p-4 w-64 bg-gray-800 shadow-lg rounded-lg text-center";

  const logoEl = document.createElement("img");
  logoEl.src = company.companyLogo;
  logoEl.alt = "https://via.placeholder.com/150?text=" + company.name;
  logoEl.title = company.companyName;
  logoEl.className = "h-24 w-24 mx-auto mb-4";

  const linkEl = document.createElement("a");
  linkEl.href = company.companyLink;
  linkEl.target = "_blank";
  linkEl.appendChild(logoEl);

  const nameEl = document.createElement("p");
  nameEl.textContent = company.companyName;
  nameEl.className = "mt-2 text-white";

  const separator = document.createElement("hr");
  separator.style.marginTop = "1rem";
  separator.style.marginBottom = "1rem";
  separator.style.borderTop = "1px solid #888";

  companyEl.appendChild(linkEl);
  companyEl.appendChild(nameEl);
  companyEl.appendChild(separator);
  company.contacts.forEach((contact) => {
    const contactEl = document.createElement("a");
    contactEl.href = contact.profileLink;
    contactEl.className = "block p-2 hover:bg-gray-700 rounded";
    contactEl.target = "_blank";
    contactEl.rel = "noopener noreferrer";

    const contactImg = document.createElement("img");
    contactImg.src = contact.profileImage;
    contactImg.alt = "https://via.placeholder.com/150?text=" + contact.name;
    contactImg.className = "h-24 w-24 rounded-full mx-auto";

    const contactName = document.createElement("p");
    contactName.textContent = contact.name;
    contactName.className = "mt-2 text-center text-white";

    contactEl.appendChild(contactImg);
    contactEl.appendChild(contactName);
    companyEl.appendChild(contactEl);
  });

  return companyEl;
}

// Function to populate the tree with data
function populateTree() {
  const treeContainer = document.getElementById("tree");
  contacts.forEach((company) => {
    treeContainer.appendChild(createCompanyElement(company));
  });
}

// Call the function to populate the tree on page load
populateTree();
