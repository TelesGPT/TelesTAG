document.getElementById('equipment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const type = document.getElementById('type').value;
    const tag = generateTag();

    addEquipmentToTable(tag, name, location, type);
    clearForm();
});

function generateTag() {
    // Lógica para gerar uma tag única
    return 'TAG-' + Math.floor(Math.random() * 1000);
}

function addEquipmentToTable(tag, name, location, type) {
    const tableBody = document.querySelector('#equipment-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${tag}</td>
        <td>${name}</td>
        <td>${location}</td>
        <td>${type}</td>
        <td><button onclick="editEquipment(this)">Editar</button></td>
    `;
    tableBody.appendChild(newRow);
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('location').value = '';
    document.getElementById('type').value = '';
}

function editEquipment(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    const tag = cells[0].innerText;
    const name = cells[1].innerText;
    const location = cells[2].innerText;
    const type = cells[3].innerText;

    document.getElementById('name').value = name;
    document.getElementById('location').value = location;
    document.getElementById('type').value = type;

    // Lógica para remover a linha antiga e adicionar a nova após a edição
    row.remove();
}
