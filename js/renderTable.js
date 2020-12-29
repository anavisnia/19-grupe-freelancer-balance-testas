import { account, menesiai} from './data.js';

function generateTable( data ) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const monthStat = data[i];
        HTML += `<div class="table-row">
                    <div class="cell">${monthStat.month}</div>
                    <div class="cell">${menesiai[ monthStat.month-1 ]}</div>
                    <div class="cell">${monthStat.income ? monthStat.income + 'Eur' : '-'}</div>
                    <div class="cell">${monthStat.expense ? monthStat.expense + 'Eur' : '-'}</div>
                    <div class="cell">150.00 Eur / Balansas</div>
                </div>`;
    }

    return document.querySelector('.table-content').innerHTML = HTML;
}

export { generateTable }