function getColName(_, n) {
    let aCode = 'A'.charCodeAt(0);
    let zCode = 'Z'.charCodeAt(0);
    let length = zCode - aCode + 1;

    let colName = "";
    while (n >= 0) {
        colName = String.fromCharCode(n % length + aCode) + colName;
        n = Math.floor(n / length) - 1;
    }
    return colName;
}

function toCell() {
    return `
        <div class="cell" contenteditable></div>    
    `;
}

function toCol(col) {
    return `
      <div class="column">${col}</div>   
    `;
}

function createRow(rowNumber, content = '') {
    return `
    <div class="row">
        <div class="row-info">${rowNumber}</div>
        <div class="row-data">${content}</div>
    </div>
    `;
}


export function createTable(rowsCount = 50, colsCount = 50) {
    const rows = [];
    const cols = new Array(colsCount)
        .fill('')
        .map(getColName)
        .map(toCol)
        .join('');

    rows.push(createRow('', cols));

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('');
        console.log(cells)
        rows.push(createRow(i + 1, cells))
    }
    return rows.join('')
}
