import { Operations } from "./BasicOperations.js";
export class Presentation {
    //Creates Button for each row
    createButton(row, x, op) {
        let cell, editB, deleteB;
        cell = document.createElement('td');
        row.appendChild(cell);
        editB = document.createElement('input');
        editB.type = "Button";
        editB.value = "EDIT";
        editB.className = "btn btn-success";
        editB.onclick = () => { op.editRow(x); };
        cell.appendChild(editB);
        let text = document.createElement('span');
        text.innerHTML = '  ';
        cell.appendChild(text);
        deleteB = document.createElement('input');
        deleteB.type = "Button";
        deleteB.value = "DELETE";
        deleteB.className = "btn btn-danger";
        deleteB.onclick = () => { op.deleteRow(x); };
        cell.appendChild(deleteB);
        cell = document.createElement('td');
        row.appendChild(cell);
        let mDelete = document.createElement('input');
        mDelete.type = "checkbox";
        mDelete.name = "check";
        cell.appendChild(mDelete);
    }
    //Fetches buttons back after save and cancel operations are executed
    fetchButton(x, op) {
        let tuple = document.getElementById(x);
        let editB = tuple.getElementsByTagName('td')[Operations.count].getElementsByTagName('input')[0];
        editB.value = "EDIT";
        editB.onclick = () => { op.editRow(x); };
        let deleteB = tuple.getElementsByTagName('td')[Operations.count].getElementsByTagName('input')[1];
        deleteB.value = "DELETE";
        deleteB.onclick = () => { op.deleteRow(x); };
    }
}
