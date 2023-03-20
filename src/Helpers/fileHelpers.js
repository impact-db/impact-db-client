function exportTsv(arrayHeader, arrayData, delimiter, fileName) {
  let header = arrayHeader.join(delimiter) + "\n";
  let tsv = header;
  arrayData.forEach((obj) => {
    let row = [];

    arrayHeader.forEach((key) => {
      if (obj.hasOwnProperty(key)) {
        row.push(obj[key]);
      } else {
        row.push("");
      }
    });

    tsv += row.join(delimiter) + "\n";
  });

  let tsvData = new Blob([tsv], { type: "text/tsv" });
  let tsvUrl = URL.createObjectURL(tsvData);

  let hiddenElement = document.createElement("a");
  hiddenElement.href = tsvUrl;
  hiddenElement.target = "_blank";
  hiddenElement.download = fileName + ".tsv";
  hiddenElement.click();
}

export { exportTsv };
