let count = 0;  //Count is used as a counter for the id
let dataListFiltered = [];    
let dataList = [];    

function getInputValues() {
    let obj = { id: "", personName: "", number: "" };

    let name = document.getElementById("name-input").value;
    let number = document.getElementById("number-input").value;

    obj.personName = name;
    obj.number = number;
    obj.id = count++;

    dataList.push(obj);
    dataListFiltered = dataList;

    saveStorage(); // save the data on local storage

    document.getElementById("name-input").value = "";
    document.getElementById("number-input").value = "";

    loadTable();
}

//Function to load table with the user's input values
function loadTable() {
    const tableBody = document.getElementById("tableData");
    let dataHTML = "";
    dataListFiltered = dataListFiltered.sort((a, b) => (a.personName).localeCompare(b.personName));
    for (let obj = 0; obj < dataListFiltered.length; obj++) {
        dataHTML += `<tr><td>${dataListFiltered[obj].id}</td><td>${dataListFiltered[obj].personName}</td><td>${dataListFiltered[obj].number}</td><td><button onclick="removeData(${dataListFiltered[obj].id})" class="btn btn-danger">Remove</button></td></tr>`;
    }
    // console.log(dataHTML);
    tableBody.innerHTML = dataHTML;
}


//Function to delete each row of the table
function removeData(obj) {
    let text = "Are you sure you want to remove?";
    if (confirm(text) == true) {
        dataList = dataList.filter((data) => data.id !== obj);
        dataListFiltered = dataList;
        saveStorage();
        loadTable();
    } else{}  
}

// SEARCH FUNCTION
function searchAndLoad(e) {
    if (e.target.value === undefined || e.target.value === "") {
        dataListFiltered = dataList;
    } else {
        dataListFiltered = dataList.filter((data) => data.personName.toLowerCase().includes(e.target.value.toLowerCase()));
    }
    loadTable();
}

function saveStorage() {
    // convert to string the object
    localStorage.setItem("cache", JSON.stringify({"dataList": dataList, "dataListFiltered": dataListFiltered , "count": count}));
}

window.onload = () => {
    document.querySelector(".search-bar").addEventListener("input", searchAndLoad);

    if (localStorage.getItem("cache")) {
        let cache = JSON.parse(localStorage.getItem("cache"));
        dataList = cache.dataList;
        dataListFiltered = cache.dataListFiltered;
        count = cache.count;
        loadTable();
    }
}

