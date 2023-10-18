const users = [
  {
    id: "c55037ef-a95a-49e3-b6ed-990d6c3d5468",
    firstName: "Artur",
    lastName: "Apedaile",
    country: "Russia",
    birthDate: "09/16/1999",
    email: "aapedaile0@flickr.com",
    gender: "Male",
    balance: "$431761.65",
  },
  {
    id: "db4ca630-f96b-460f-b434-9f4b21484fbd",
    firstName: "Hayden",
    lastName: "Bolle",
    country: "Russia",
    birthDate: "05/13/1963",
    email: "hbolle1@bloglines.com",
    gender: "Male",
    balance: "$758044.46",
  },
  {
    id: "e6e5c9b3-9540-4907-a189-f9b342daac61",
    firstName: "Fina",
    lastName: "Schroeder",
    country: "China",
    birthDate: "12/02/1991",
    email: "fschroeder2@nyu.edu",
    gender: "Polygender",
    balance: "$627773.7",
  },
  {
    id: "b7ddc06e-761c-487f-971b-cbce8229f9e9",
    firstName: "Husain",
    lastName: "Calderbank",
    country: "Iran",
    birthDate: "08/30/1954",
    email: "hcalderbank3@sohu.com",
    gender: "Male",
    balance: "$995002.07",
  },
  {
    id: "842efb5e-0eb1-453c-b2af-8a108af1f541",
    firstName: "Paola",
    lastName: "Pandey",
    country: "France",
    birthDate: "08/21/1989",
    email: "ppandey4@cbslocal.com",
    gender: "Genderfluid",
    balance: "$766005.4",
  },
  {
    id: "3b4e5fe0-50f7-431f-b8e4-60ad32d280ca",
    firstName: "Roosevelt",
    lastName: "Piscopiello",
    country: "China",
    birthDate: "11/08/1999",
    email: "rpiscopiello5@fotki.com",
    gender: "Male",
    balance: "$85694.25",
  },
  {
    id: "e722bbe0-50e6-4ae8-8bdd-438d32d1076b",
    firstName: "Kizzee",
    lastName: "Pleace",
    country: "Russia",
    birthDate: "08/13/1971",
    email: "kpleace6@dailymotion.com",
    gender: "Female",
    balance: "$565294.64",
  },
  {
    id: "4915709c-c27f-4572-87df-f818fd96b9f2",
    firstName: "Syman",
    lastName: "Pickwell",
    country: "Russia",
    birthDate: "04/21/2000",
    email: "spickwell7@weibo.com",
    gender: "Male",
    balance: "$450181.0",
  },
  {
    id: "88b164f8-de9c-46fe-8f47-25d7d061e36a",
    firstName: "Husein",
    lastName: "Steptowe",
    country: "China",
    birthDate: "09/16/1977",
    email: "hsteptowe8@homestead.com",
    gender: "Male",
    balance: "$752099.6",
  },
  {
    id: "6708011c-0598-446b-b2b3-87f0c9a9f357",
    firstName: "Stillman",
    lastName: "Adamkiewicz",
    country: "Russia",
    birthDate: "04/22/1983",
    email: "sadamkiewicz9@slashdot.org",
    gender: "Male",
    balance: "$542909.73",
  },
  {
    id: "c4e7cfa5-d2d9-4ffe-a33f-600ffc8947c9",
    firstName: "Pip",
    lastName: "Brack",
    country: "France",
    birthDate: "09/05/1955",
    email: "pbracka@ftc.gov",
    gender: "Genderqueer",
    balance: "$57557.91",
  },
  {
    id: "1ecbc2e2-ca96-4fc0-b4ce-fb9274a35058",
    firstName: "Lilli",
    lastName: "Chalmers",
    country: "China",
    birthDate: "11/18/1958",
    email: "lchalmersb@spotify.com",
    gender: "Female",
    balance: "$476718.98",
  },
  {
    id: "a1cf5d9c-2591-4709-8d9a-4ca4e8a28d26",
    firstName: "Cristine",
    lastName: "Liepins",
    country: "France",
    birthDate: "09/20/1962",
    email: "cliepinsc@rambler.ru",
    gender: "Female",
    balance: "$494159.24",
  },
  {
    id: "d0c0a8dd-c914-4ac7-a552-8902af233677",
    firstName: "Liam",
    lastName: "Brands",
    country: "China",
    birthDate: "11/03/1980",
    email: "lbrandsd@studiopress.com",
    gender: "Male",
    balance: "$566903.98",
  },
  {
    id: "ad61a9d3-992b-44fa-b387-430ef6b05432",
    firstName: "Neel",
    lastName: "Smittoune",
    country: "Iran",
    birthDate: "04/17/1952",
    email: "nsmittounee@businessinsider.com",
    gender: "Male",
    balance: "$50216.16",
  },
  {
    id: "66def859-a2ec-4eae-a9ae-5f1d0bca14b0",
    firstName: "Svend",
    lastName: "Lockey",
    country: "Russia",
    birthDate: "08/11/1962",
    email: "slockeyf@blinklist.com",
    gender: "Male",
    balance: "$506149.29",
  },
  {
    id: "5da0a358-6e25-4c2b-b889-7ec03acfe239",
    firstName: "Alla",
    lastName: "Matthiae",
    country: "Russia",
    birthDate: "02/14/1971",
    email: "amatthiaeg@boston.com",
    gender: "Female",
    balance: "$171954.05",
  },
  {
    id: "1c3ac751-7799-4e9f-9a4a-1ceb4c8146ec",
    firstName: "Adele",
    lastName: "Bumby",
    country: "Iran",
    birthDate: "04/04/1963",
    email: "abumbyh@macromedia.com",
    gender: "Female",
    balance: "$252069.06",
  },
  {
    id: "26034bdb-b0f2-494d-b404-2d32fa5b7de1",
    firstName: "Tobye",
    lastName: "Drains",
    country: "France",
    birthDate: "11/30/1963",
    email: "tdrainsi@weebly.com",
    gender: "Female",
    balance: "$960249.86",
  },
  {
    id: "8156ca0d-b013-4f2b-85d1-77306d449b8c",
    firstName: "Martie",
    lastName: "Gronowe",
    country: "France",
    birthDate: "02/21/2001",
    email: "mgronowej@1und1.de",
    gender: "Male",
    balance: "$141936.61",
  },
];

const selectElem = document.getElementById("ct");
const usersListDiv = document.getElementById("list");
const tableBody = document.getElementById("user-table-body");
// show all users when app starts
displayUsers(users);

// display users base on selected options
selectElem.addEventListener("change", (e) => {
  switch (e.target.value) {
    case "Russia":
      filterUsers("Russia");
      break;

    case "China":
      filterUsers("China");
      break;

    case "France":
      filterUsers("France");
      break;

    case "Iran":
      filterUsers("Iran");
      break;

    default:
      throw new Error("couldn't found");
  }
});

///////////////////////////////////////////////////////

function displayUsers(array) {
  tableBody.innerHTML = "";
  array.forEach((user) => {
    tableBody.insertAdjacentHTML(
      "beforeend",
      `<tr>
        <td>${user.id}</td>
        <td>${user.firstName} ${user.lastName}</td>
        <td>${user.country}</td>
        <td>${user.birthDate}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
      </tr>`,
    );
  });
}

function filterUsers(countryName) {
  displayUsers(users.filter((user) => user.country === countryName));
}
