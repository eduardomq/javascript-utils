function generateExcelColumnsLetters(numOfColumns) {
  for (let i = 0; i <= numOfColumns; i++)   {
    console.log(excelColumnFromNumber(i));
  }
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
