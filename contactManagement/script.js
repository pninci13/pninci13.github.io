let count = 0;  //Count is used as a counter for the id
let dataList = [];      

function getInputValues() {
    let obj = {id: "", personName: "", number: ""};

    let name = document.getElementById("name-input").value;
    let number = document.getElementById("number-input").value;

    obj.personName = name;
    obj.number = number;
    obj.id = count++;

    // console.log(name);
    // console.log(number);

    dataList.push(obj);

    document.getElementById("name-input").value = "";
    document.getElementById("number-input").value = "";

    loadTable();
}

//Function to load table with the user's input values
function loadTable() {
    const tableBody = document.getElementById("tableData");
    let dataHTML = "";

    for (let obj = 0; obj < dataList.length; obj++) {
        dataHTML += `<tr><td>${dataList[obj].id}</td><td>${dataList[obj].personName}</td><td>${dataList[obj].number}</td><td><button onclick="removeData(${dataList[obj].id})" class="btn btn-danger">Remove</button></td></tr>`;
    }
    // console.log(dataHTML);
    tableBody.innerHTML = dataHTML;
}


//Function to delete each row of the table
function removeData(obj) {
    let text = "Are you sure you want to remove?";
    if (confirm(text) == true) {
        dataList = dataList.filter((data) => data.id !== obj);
        loadTable();
    } else{}  
}


// SEARCH FUNCTION
// const searchInput = document.querySelector("[data-search]")

// searchInput.addEventListener("input", (e) => {
//     const value = e.target.value
//     console.log(value);
// });

