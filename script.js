function showAddIncome() {
    document.getElementById('new-income-popup').style.display = "block";
}

function showAddExpense() {
    document.getElementById('new-expense-popup').style.display = "block";
}

function addExpense() {
    var input = document.getElementById("task-field");
    var value = input.value;
    var list = document.getElementById("task-list");
    var newTask = document.createElement('p');
    newTask.classList.add("new-task")
    newTask.innerText = value;
    list.appendChild(newTask);
}

function newIncome() {

    console.log("New income source added");
    var incomeData = document.forms['new-income'];
    console.log('New Income', incomeData);
    var iDate = incomeData['iDate'].value;
    var iDescription = incomeData['iDescription'].value;
    var iAmount = incomeData['iAmount'].value;
    var iRecipient = incomeData['iRecipient'].value;

    console.log("Date : ", iDate);
    console.log("Description : ", iDescription);
    console.log("Amount : ", iAmount);
    console.log("Recipient : ", iRecipient);

    var newIncomeEntry = document.getElementById('income-list');
    var newIncomeRow = document.createElement('tr');
    newIncomeEntry.appendChild(newIncomeRow);
    var index = 0;
    var tableString = "<tr>";
    tableString += "<td>" + index + "</td>";
    tableString += "<td>" + ((typeof iDate === 'undefined') ? '' : iDate) + "</td>";
    tableString += "<td>" + ((typeof iDescription === 'undefined') ? '' : iDescription) + "</td>";
    tableString += "<td>" + ((typeof iAmount === 'undefined') ? '' : iAmount) + "</td>";
    tableString += "<td>" + ((typeof iRecipient === 'undefined') ? '' : iRecipient) + "</td>";
    tableString+= "<td>" + "<button class='round-button' onclick='delrow()'>-</button>" +"</td>";
    tableString += "<tr>";
    newIncomeRow.innerHTML = tableString;


    return false
}

function delrow(){
    var selectedRow = event.target.parentElement.parentElement;
    selectedRow.remove();
    // selectedRow.style.display = "hidden";
    // console.log(selectedRow);

}
