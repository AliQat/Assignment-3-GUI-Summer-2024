/*
NAME: Ali Sattar Jabbar Qattan, UMass Lowell Computer Science, ali_qattan@student.uml.edu
DATE: 06/03/2024 
GUI Assignment: Creating Your First Web Page 
Copyright (c) 2024 by Qattan.  All rights reserved.  May be freely copied or excerpted for 
educational purposes with credit to the author.
updated by aLI June 3rd
*/
$(document).ready(function() {
    $('#tableForm').validate({
        rules: {
            startRows: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            endRows: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            startColumn: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            endColumn: {
                required: true,
                number: true,
                range: [-50, 50]
            }
        },
        messages: {
            startRows: {
                required: "Please enter a starting number for the rows.",
                number: "Please enter a valid number.",
                range: "Please enter a number between -50 and 50."
            },
            endRows: {
                required: "Please enter an ending number for the rows.",
                number: "Please enter a valid number.",
                range: "Please enter a number between -50 and 50."
            },
            startColumn: {
                required: "Please enter a starting number for the columns.",
                number: "Please enter a valid number.",
                range: "Please enter a number between -50 and 50."
            },
            endColumn: {
                required: "Please enter an ending number for the columns.",
                number: "Please enter a valid number.",
                range: "Please enter a number between -50 and 50."
            }
        },
        submitHandler: function(form) {
            const startRows = parseInt($('#startRows').val());
            const endRows = parseInt($('#endRows').val());
            const startColumn = parseInt($('#startColumn').val());
            const endColumn = parseInt($('#endColumn').val());

            if (startRows > endRows || startColumn > endColumn) {
                $('#error').text('Start values must be less than or equal to end values.');
                return;
            }

            generateTable(startRows, endRows, startColumn, endColumn);
        },
        invalidHandler: function(event, validator) {
            $('#error').text('Please correct the errors and try again.');
        }
        
    });
});

function generateTable(startRows, endRows, startColumn, endColumn) {
    const tableContainer = $('#tableContainer');
    tableContainer.empty();

    const table = $('<table></table>');
    const headerRow = $('<tr></tr>');
    const emptyHeader = $('<th></th>');
    headerRow.append(emptyHeader);
    
    for (let i = startRows; i <= endRows; i++) {
        const th = $('<th></th>').text(i);
        headerRow.append(th);
    }
    table.append(headerRow);

    for (let i = startColumn; i <= endColumn; i++) {
        const tr = $('<tr></tr>');
        const rowHeader = $('<th></th>').text(i);
        tr.append(rowHeader);

        for (let j = startRows; j <= endRows; j++) {
            const td = $('<td></td>').text(i * j);
            tr.append(td);
        }
        table.append(tr);
    }

    tableContainer.append(table);
}

