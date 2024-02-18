// Example data structure for the tree
const contacts = [
  {
    companyLogo: "https://logo.clearbit.com/agoda.com",
    companyName: "agoda",
    companyLink: "https://agoda.com",
    contacts: [
      {
        profileLink: "https://www.linkedin.com/in/fasilmarshooq/",
        name: "Fasil Marshooq",
        profileImage:
          "https://media.licdn.com/dms/image/D5603AQEhW6jJv_69yQ/profile-displayphoto-shrink_200_200/0/1689094325603?e=1714003200&v=beta&t=qT9OASGTRFooF_9g5Ojv1eGP85cLoiU6gIG8_gAKEVs",
      },
    ],
  },
  {
    companyLogo: "https://logo.clearbit.com/aqr.com",
    companyName: "AQR Capital",
    companyLink: "https://aqr.com",
    contacts: [
      {
        profileLink: "https://www.linkedin.com/in/giridharamadhavan/",
        name: "Giridhara Madhavan",
        profileImage:
          "https://media.licdn.com/dms/image/D5603AQEk4CU6WvFvhg/profile-displayphoto-shrink_200_200/0/1689341588460?e=1714003200&v=beta&t=xRETvsA9uHjt38goHjd5z43O03are1D00-xUtnaHct4",
      },
    ],
  },
  {
    companyLogo: "https://logo.clearbit.com/bosch.com",
    companyName: "Bosch",
    companyLink: "https://bosch.com",
    contacts: [
      {
        profileLink: "https://www.linkedin.com/in/arifa-m-y-990b61215/",
        name: "Arifa M Y ",
        profileImage:
          "https://media.licdn.com/dms/image/D5603AQFfYpM3PCU8FA/profile-displayphoto-shrink_200_200/0/1698401433935?e=1714003200&v=beta&t=Z9fo_76C8pa9t9D1SHdzZ05Q0L7MXXx_5KDcGCXXM_A",
      },
    ],
  },
  {
    companyLogo: "https://logo.clearbit.com/capgemini.com",
    companyName: "Capegemini",
    companyLink: "https://capgemini.com",
    contacts: [
      {
        profileLink: "https://www.linkedin.com/in/ajithkumar1010/",
        name: "AJITHKUMAR A",
        profileImage:
          "https://media.licdn.com/dms/image/D5603AQECPFCMPXSs7g/profile-displayphoto-shrink_200_200/0/1681835546632?e=1714003200&v=beta&t=y2Py7n6fSDEVPqt0xpKdJUfWMcFW60i5_b2NhxEUun0",
      },
    ],
  },
  {
    companyLogo: "https://logo.clearbit.com/dev-bee.com",
    companyName: "DevBee",
    companyLink: "https://Dev-Bee.com",
    contacts: [
      {
        profileLink:
          "https://www.linkedin.com/in/abuthahir-mohamed-rafiq-b25762130/",
        name: "Abuthahir",
        profileImage:
          "https://media.licdn.com/dms/image/D4E03AQEl4kdWba5D6Q/profile-displayphoto-shrink_200_200/0/1670860723536?e=1714003200&v=beta&t=-Inxt35RTrHJDYbNz4YEU-4x6jg1rMfBrEKtuBLZrxI",
      },
      {
        profileLink: "https://www.linkedin.com/in/anbu-althaf-687566223/",
        name: "Anbu Althaf",
        profileImage:
          "https://media.licdn.com/dms/image/C5603AQFwUXNP-ZmN_Q/profile-displayphoto-shrink_200_200/0/1648940658792?e=1714003200&v=beta&t=ZCjt93Utw_-sQFhG6xQKN3mwv6LzWOVcRh_aSw4kPlA",
      },
    ],
  },
  {
    companyLogo: "https://logo.clearbit.com/devon.nl",
    companyName: "Devon",
    companyLink: "https://Devon.nl",
    contacts: [
      {
        profileLink: "https://www.linkedin.com/in/dhivakar-ragupathy/",
        name: "Dhivakar Ragupathy",
        profileImage:
          "https://media.licdn.com/dms/image/C5603AQEV6y8jMtlKtg/profile-displayphoto-shrink_200_200/0/1596721749104?e=1714003200&v=beta&t=lCG5v6mdJWRzvCJ-dMoOnHmkaguHsiMrjfcIXqQzgOo",
      },
    ],
  },
  {
    companyLogo: "https://logo.clearbit.com/epam.com",
    companyName: "Epam",
    companyLink: "https://Epam.com",
    contacts: [
      {
        profileLink:
          "https://www.linkedin.com/in/sriharan-jeyachandran-4a4a32121/",
        name: "Sriharan",
        profileImage:
          "https://media.licdn.com/dms/image/C5603AQFyHyb5GFhVbw/profile-displayphoto-shrink_200_200/0/1626868684901?e=1714003200&v=beta&t=JaqMlAIGZeqUzoRsdOp7kAzpW5yx2PQHr1M1kZo1Byo",
      },
    ],
  },
  {
    companyLogo: "https://logo.clearbit.com/grasko.com",
    companyName: "Grasko Solutions",
    companyLink: "https://grasko.com",
    contacts: [
      {
        profileLink: "https://www.linkedin.com/in/manivannan-a/",
        name: "Manivannan",
        profileImage:
          "https://media.licdn.com/dms/image/D5603AQHLmzfXUFhx6w/profile-displayphoto-shrink_200_200/0/1681269315782?e=1714003200&v=beta&t=h3tKJM9gi21wMX5_3g6zKe7et5w5IEkJjGDJkVR3rBY",
      },
    ],
  },
  {
    companyLogo: "https://logo.clearbit.com/ltimindtree.com",
    companyName: "LTIMindtree",
    companyLink: "https://ltimindtree.com",
    contacts: [
      {
        profileLink: "https://www.linkedin.com/in/harinivas-s-134895157/",
        name: "Harinivas S",
        profileImage:
          "https://media.licdn.com/dms/image/D5635AQFVM9w8i6sJRA/profile-framedphoto-shrink_200_200/0/1693114069140?e=1708858800&v=beta&t=sONRr7twwK0vVcTmPlrrGB3-60M4ii8CjXG26wWOtnY",
      },
    ],
  },
  {
    companyLogo: "https://logo.clearbit.com/o9Solutions.com",
    companyName: "o9 Solutions, Inc.",
    companyLink: "https://o9Solutions.com",
    contacts: [
      {
        profileLink: "https://www.linkedin.com/in/bryane/",
        name: "Bryane G",
        profileImage:
          "https://media.licdn.com/dms/image/C4E03AQEWVoq5DcR1UQ/profile-displayphoto-shrink_200_200/0/1567671450680?e=1714003200&v=beta&t=QjeRvM9dV0XxKLPlIJc_TFY-tw_Ze0gl8yY3fN8-bLg",
      },
    ],
  },
  // ... more companies
];

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
  treeData.forEach((company) => {
    treeContainer.appendChild(createCompanyElement(company));
  });
}

// Call the function to populate the tree on page load
populateTree();
