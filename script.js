let parcels = JSON.parse(localStorage.getItem('parcels')) || [];
const tableBody = document.getElementById('parcelTable').querySelector('tbody');

function displayParcels() {
    tableBody.innerHTML = '';
    parcels.forEach(parcel => {
        const row = tableBody.insertRow();
        const senderCell = row.insertCell();
        const recipientCell = row.insertCell();
        const weightCell = row.insertCell();
        const typeCell = row.insertCell();
        const statusCell = row.insertCell();

        senderCell.textContent = parcel.sender;
        recipientCell.textContent = parcel.recipient;
        weightCell.textContent = parcel.weight + ' кг';
        typeCell.textContent = parcel.type;
        statusCell.textContent = parcel.status;
    });
}

// Викликаємо displayParcels() після завантаження DOM
document.addEventListener('DOMContentLoaded', displayParcels);

document.getElementById('addParcelForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const sender = document.getElementById('sender').value;
    const recipient = document.getElementById('recipient').value;
    const weight = document.getElementById('weight').value;
    const type = document.getElementById('type').value;
    const status = document.getElementById('status').value;

    parcels.push({ sender, recipient, weight, type, status });
    localStorage.setItem('parcels', JSON.stringify(parcels));
    displayParcels(); // Оновлюємо таблицю після додавання
    document.getElementById('addParcelForm').reset();
    //Видалено зайвий виклик displayParcels()
});