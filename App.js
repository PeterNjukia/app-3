// Handle form submission
document.getElementById("rentalForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const tenantName = document.getElementById("tenantName").value;
    const houseNo = document.getElementById("houseNo").value;
    const rentPaid = document.getElementById("rentPaid").value;
    const datePaid = document.getElementById("datePaid").value;

    // Create table rows for the new payment
    const table = document.getElementById("paymentTable");
    const newRow = table.insertRow(-1);

    const cell1 = newRow.insertCell(0);
    cell1.textContent = tenantName;

    const cell2 = newRow.insertCell(1);
    cell2.textContent = houseNo;

    const cell3 = newRow.insertCell(2);
    cell3.textContent = rentPaid;

    const cell4 = newRow.insertCell(3);
    cell4.textContent = datePaid;

    const cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<span class="badge">&#10004;</span>';

    // Clear the form inputs
    document.getElementById("rentalForm").reset();
});

// Search function
function searchPayments() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("paymentTable");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        const td = tr[i].getElementsByTagName("td");
        for (let j = 0; j < td.length; j++) {
            const txtValue = td[j].textContent || td[j].innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                break;
            }
        }
    }
}    
