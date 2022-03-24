function generateExcelColumnsLetters(numOfColumns) {
  const cols = [];
  for (let i = 0; i <= numOfColumns; i++)   {
    cols.push(excelColumnFromNumber(i));
  }
  console.log(cols.join('\n'));
}


function excelColumnFromNumber(column) {
    let columnString = "";
    let columnNumber = column;

    while (columnNumber > 0) {
        let currentLetterNumber = (columnNumber - 1) % 26;
        let currentLetter = String.fromCharCode(currentLetterNumber + 65);
        columnString = currentLetter + columnString;
        columnNumber = (columnNumber - (currentLetterNumber + 1)) / 26;
    }

    return columnString;
}
