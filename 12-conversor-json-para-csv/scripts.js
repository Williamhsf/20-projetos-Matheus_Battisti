const converterForm = document.querySelector("#converterForm");
const converterInput = document.querySelector("#converterInput");
const jsonToCsvButton = document.querySelector("#jsonToCsvButton");
const csvToJsonButton = document.querySelector("#csvToJsonButton");

// funcao que converte json para csv
// vamos esperar o json dela
function jsonToCsv(json) {
  // percorrer cada item e separar cada um por virgula
  const headers = Object.keys(json[0]);
  const csvRows = [];

  // no caso criamos uma array transformamos em uma string 
  // e apos isso separamos por uma virgula
  csvRows.push(headers.join(","));

  console.log(csvRows);

  //for of de cada linha do json
  for (const row of json) {

    // mapeando cada header e chamar cada header individual de header
    const values = headers.map((header) => {
      let value = row[header];

      // console.log(value);
      if (value === null || value === undefined) {
        value = "";
      } else if(typeof value === "object") {
        value = JSON.stringify(value);
      }

      return value;
    });

    // console.log(values);
    csvRows.push(values.join(","));
  }

  // console.log(csvRows);
  // separando cada array em uma string unica cada uma em sua linha
  return csvRows.join("\n");
}

jsonToCsvButton.addEventListener("click", function() {
  const json = JSON.parse(converterInput.value.trim());
  const csv = jsonToCsv(json);

  console.log(csv);
});

// fazer o download do csv
function downloadCsv(csv) {
  const downloadLink = document.createElement("a");
  downloadLink.setAttribute(
    "href",
    "data:text/csv;charset=utf-8," + encodeURIComponent(csv)
  );

  downloadLink.setAttribute("download", "data.csv");
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function csvToJson(csv) {
  const lines = csv.split("\n");
  const headers = lines[0].split(",");
  const json = [];

//   // Remover outro JSON
  const preTags = document.querySelectorAll("pre");
  preTags.forEach((tag) => {
    tag.remove();
  });

  for (let i = 1; i < lines.length; i++) {
  // valores de cada uma das linhas
    const values = lines[i].split(",");
    const row = {};

    for (let j = 0; j < headers.length; j++) {
      let value = values[j];
      if (value[0] === "{" || value[0] === "[") {
        value = JSON.parse(value);
      }
      row[headers[j]] = value;
    }

    json.push(row);
  }

   console.log(json);

  return json;
}

jsonToCsvButton.addEventListener("click", function () {
  const json = JSON.parse(converterInput.value.trim());
  const csv = jsonToCsv(json);
  downloadCsv(csv);
});

csvToJsonButton.addEventListener("click", function () {
  const csv = converterInput.value.trim();
  const json = csvToJson(csv);
  displayJson(json);
});

function displayJson(json) {
  const resultArea = document.createElement("pre");
  resultArea.textContent = JSON.stringify(json, null, 2);
  document.body.appendChild(resultArea);
}