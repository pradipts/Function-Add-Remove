function addRow() {
         
    var myName = document.getElementById("name");
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= myName.value;

}

function deleteRow(obj) {
    var bool = confirm("Are you sure want to delete this item?");
    if (bool==true) {
        var index = obj.parentNode.parentNode.rowIndex;
        var table = document.getElementById("myTableData");
        table.deleteRow(index);
        alert("Data berhasil dihapus");
    }else{
        alert('Data tidak dihapus');
    }
}

function load() {
   
    console.log("Page load finished");

}
