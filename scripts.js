/*
NAME: Ali Sattar Jabbar Qattan, UMass Lowell Computer Science, ali_qattan@student.uml.edu
DATE: 06/03/2024 
GUI Assignment: Creating Your First Web Page 
Copyright (c) 2024 by Qattan.  All rights reserved.  May be freely copied or excerpted for 
educational purposes with credit to the author.
updated by aLI June 3rd
*/
document.getElementById('tableForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const errorDiv = document.getElementById('error'); // declare a const so I can display error messages later
    errorDiv.textContent = '';
    // 7-10 is just getting user input
    const startRows = parseInt(document.getElementById('startRows').value);
    const endRows = parseInt(document.getElementById('endRows').value);
    const startColumn = parseInt(document.getElementById('startColumn').value);
    const endColumn = parseInt(document.getElementById('endColumn').value);
    // 12-23 is input validation for edge cases
    if (isNaN(startRows) || isNaN(endRows) || isNaN(startColumn) || isNaN(endColumn) || 
        startRows < -50 || startRows > 50 || endRows < -50 || endRows > 50 || 
        startColumn < -50 || startColumn > 50 || endColumn < -50 || endColumn > 50) {
        
        errorDiv.textContent = 'Please enter valid numbers between -50 and 50 for all fields.';
        return;
    }

    if (startRows > endRows || startColumn > endColumn) {
        errorDiv.textContent = 'Start values must be less than or equal to end values.';
        return;
    }

    generateTable(startRows, endRows, startColumn, endColumn);
});

function generateTable(startRows, endRows, startColumn, endColumn) {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; //initialize the table container as empty and we will dynamically write to it here

    const table = document.createElement('table'); //add table element to the main html
    const headerRow = document.createElement('tr');  
    const emptyHeader = document.createElement('th');
    headerRow.appendChild(emptyHeader); //top left cell should be empty
    
    for (let i = startRows; i <= endRows; i++) { // count from start to end rows (user inputted) and append to the headers
        const th = document.createElement('th');
        th.textContent = i;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (let i = startColumn; i <= endColumn; i++) { // count from start to end column (user inputted) and append to the headers
        const tr = document.createElement('tr'); //create a new row first, then create the header for the row to emulate column
        const rowHeader = document.createElement('th');
        rowHeader.textContent = i;
        tr.appendChild(rowHeader);

        for (let j = startRows; j <= endRows; j++) { //fill in the table data with product of the multipication of each column and each row
            const td = document.createElement('td');
            td.textContent = i * j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    tableContainer.appendChild(table); // append the filled in table to the HTML
}
