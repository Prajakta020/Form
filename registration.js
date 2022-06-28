function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();
}
function readFormData(){
    var formData={};
    formData["name"]=document.getElementById("name").value;
    formData["mail"]=document.getElementById("mail").value;
    formData["number"]=document.getElementById("number").value;
    formData["dob"]=document.getElementById("dob").value;
    return formData;
}
function insertNewRecord(data){
    var table= document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1= newRow.insertCell(0);
    cell1.innerHTML= data.name;
    cell2= newRow.insertCell(1);
    cell2.innerHTML= data.mail;
    cell3= newRow.insertCell(2);
    cell3.innerHTML= data.number;
    cell4= newRow.insertCell(3);
    cell4.innerHTML= data.dob;
}
function resetForm(){
    document.getElementById("name").value="";
    document.getElementById("mail").value="";
    document.getElementById("number").value="";
    document.getElementById("dob").value="";
}
