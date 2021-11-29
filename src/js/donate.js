// donate donor
let donorCategory = ["Recent Donors", "Top Donors", "Top Donors Country"];
let currCategory = 0;
const donorTableBody = document.getElementById("donor-table-body");

let recentDonors = [
  {
    id: "1",
    donor_date: new Date().toISOString().substr(0, 10),
    donor_country_code: "us",
    donor_country: "United State",
    donor_name: "Julia",
    donor_donated: [20],
  },
  {
    id: "2",

    donor_date: new Date().toISOString().substr(0, 10),
    donor_country_code: "vn",
    donor_name: "Andrew Marcus",
    donor_country: "Vietnam",
    donor_donated: [20, 15, 100],
  },
  {
    id: "3",
    donor_date: new Date().toISOString().substr(0, 10),
    donor_country_code: "th",
    donor_country: "Thailand",
    donor_name: "Alexa",
    donor_donated: [10, 10, 15, 10],
  },
  {
    id: "4",

    donor_date: new Date().toISOString().substr(0, 10),
    donor_country_code: "us",
    donor_name: "Jennifer Kale",
    donor_country: "United State",
    donor_donated: [90, 200],
  },
  {
    id: "5",
    donor_date: new Date().toISOString().substr(0, 10),
    donor_country_code: "hu",
    donor_country: "Hungary",
    donor_name: "Jhonny",
    donor_donated: [20, 10],
  },
  {
    id: "6",
    donor_date: new Date().toISOString().substr(0, 10),
    donor_country_code: "au",
    donor_name: "Mark Alex",
    donor_country: "Australia",
    donor_donated: [100, 20, 50, 40, 10],
  },
  {
    id: "7",
    donor_date: new Date().toISOString().substr(0, 10),
    donor_country_code: "in",
    donor_name: "Sharur Kapur",
    donor_country: "India",
    donor_donated: [15, 20, 15],
  },
  {
    id: "8",
    donor_date: new Date().toISOString().substr(0, 10),
    donor_country_code: "gb",
    donor_name: "Harry Shaw",
    donor_country: "United Kingdom",
    donor_donated: [20, 40, 150],
  },
  {
    id: "9",
    donor_date: new Date().toISOString().substr(0, 10),
    donor_country_code: "gb",
    donor_country: "United Kingdom",
    donor_name: "Wayne",
    donor_donated: [25],
  },
  {
    id: "10",
    donor_date: new Date().toISOString().substr(0, 10),
    donor_country_code: "fr",
    donor_name: "Lucas",
    donor_country: "France",
    donor_donated: [100, 250],
  },
  {
    id: "11",
    donor_date: new Date().toISOString().substr(0, 10),
    donor_country_code: "gb",
    donor_name: "Antonio",
    donor_country: "United Kingdom",
    donor_donated: [32],
  },
  {
    id: "12",
    donor_date: new Date().toISOString().substr(0, 10),
    donor_country_code: "fr",
    donor_name: "Nathan Louis",
    donor_country: "France",
    donor_donated: [40, 10],
  },
];

showDataTableDonors(recentDonors, "Recent Donors");
function showDataTableDonors(datas, type) {
  donorTableBody.innerHTML = "";
  datas.map(
    (e) =>
      (donorTableBody.innerHTML += `
    <tr key=${e.id}>
    <td>${e.donor_date}</td>
    <td>
      <span>
        <img
        class="donate-country-flag"
          src="https://flagcdn.com/32x24/${e.donor_country_code}.png"
          alt=${e.donor_country}
        />
      </span>
    </td>
    <td>
      <span>${
        type === "Top Donors Country" ? e.donor_country : e.donor_name
      }</span>
    </td>
    <td>
    ${
      type === "Recent Donors"
        ? `$${e.donor_donated[e.donor_donated.length - 1]} 
    ${
      e.donor_donated.length === 1
        ? ""
        : e.donor_donated.length === 2
        ? "(2nd Donation)"
        : e.donor_donated.length === 3
        ? "(3rd Donation)"
        : `(${e.donor_donated.length}th donation)`
    }`
        : `$${e.donor_donated.reduce((a, q) => a + q, 0)}`
    }
    </td>
  </tr>`)
  );
}

//  for top country donors
const newDonors = Object.values(
  recentDonors.reduce((r, e) => {
    let donorCountry = e.donor_country_code;
    if (!r[donorCountry]) {
      r[donorCountry] = { ...e, donor_country_many: 1 };
    } else {
      r[donorCountry].donor_name =
        typeof r[donorCountry].donor_name === "string"
          ? [r[donorCountry].donor_name, e.donor_name]
          : [...r[donorCountry].donor_name, e.donor_name];

      r[donorCountry].donor_country_many += 1;
      r[donorCountry].donor_donated = [
        ...r[donorCountry].donor_donated,
        ...e.donor_donated,
      ];
    }
    return r;
  }, {})
);

const sortedDonors = newDonors.sort((a, b) =>
  a.donor_donated.reduce((a, q) => a + q, 0) <
  b.donor_donated.reduce((a, q) => a + q, 0)
    ? 1
    : a.donor_donated.reduce((a, q) => a + q, 0) >
      b.donor_donated.reduce((a, q) => a + q, 0)
    ? -1
    : 0
);

// for top user donor
const topDonors = [...recentDonors];
topDonors.sort((a, b) =>
  a.donor_donated.reduce((a, q) => a + q, 0) <
  b.donor_donated.reduce((a, q) => a + q, 0)
    ? 1
    : a.donor_donated.reduce((a, q) => a + q, 0) >
      b.donor_donated.reduce((a, q) => a + q, 0)
    ? -1
    : 0
);

// table donor head
const tableArrowsLeft = document.querySelector(".table-arrow-left");
const tableArrowsRight = document.querySelector(".table-arrow-right");
const donorTableTitle = document.querySelector(".donate-donor-title");

// for first column or column date
tableArrowsLeft.addEventListener("click", () => {
  if (currCategory >= 2) {
    currCategory = 0;
    donorTableTitle.innerText = donorCategory[currCategory];
  } else {
    donorTableTitle.innerText = donorCategory[(currCategory += 1)];
  }
});
tableArrowsRight.addEventListener("click", () => {
  if (currCategory <= 0) {
    currCategory = 2;
    donorTableTitle.innerText = donorCategory[currCategory];
  } else {
    donorTableTitle.innerText = donorCategory[(currCategory -= 1)];
  }
});

console.log(recentDonors);

window.onclick = () => {
  if (donorTableTitle.innerText === "Recent Donors") {
    showDataTableDonors(recentDonors, "Recent Donors");
  }
  if (donorTableTitle.innerText === "Top Donors") {
    showDataTableDonors(topDonors, "Top Donors");
  }
  if (donorTableTitle.innerText === "Top Donors Country") {
    showDataTableDonors(sortedDonors, "Top Donors Country");
  }
};
