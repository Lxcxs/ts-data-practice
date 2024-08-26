import Statistics from "./Statistics.js";
import fetchData from "./fetchData.js";
import normalizeTransaction from "./normalizeTransaction.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transactions = data.map(normalizeTransaction);
    fillTable(transactions);
    fillStatistics(transactions);
}
function fillList(list, containerId) {
    const containerElement = document.getElementById(containerId);
    if (containerElement) {
        Object.keys(list).forEach((key) => {
            containerElement.innerHTML += `<p>${key}: ${list[key]}</p>`;
        });
    }
}
function fillStatistics(transacoes) {
    const data = new Statistics(transacoes);
    fillList(data.payment, "payment");
    fillList(data.status, "status");
    const totalElement = document.querySelector("#total span");
    if (totalElement) {
        totalElement.innerText = data.total.toLocaleString("pt-BR", {
            style: "currency", currency: "BRL",
        });
    }
    const dayElement = document.querySelector("#day span");
    if (dayElement) {
        dayElement.innerText = data.bestDay[0];
    }
}
function fillTable(transactions) {
    const table = document.querySelector("#transactions tbody");
    if (!table)
        return;
    transactions.forEach((transaction) => {
        table.innerHTML += `
      <tr>
        <td>${transaction.name}</td>
        <td>${transaction.email}</td>
        <td>R$ ${transaction.currency}</td>
        <td>${transaction.payment}</td>
        <td>${transaction.status}</td>
      </tr>
    `;
    });
}
handleData();
//# sourceMappingURL=script.js.map