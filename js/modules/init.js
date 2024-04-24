export async function loadEmployees() {
    let response = await fetch('../data/employees.json');
    let data = await response.json();
    return data;
}
