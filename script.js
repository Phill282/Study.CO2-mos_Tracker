//Funktion: On Click Button - Schriftkultur

document.getElementById("button1").onclick = function () {
  document.querySelector("main").style.flexDirection = "row";
};
document.getElementById("button2").onclick = function () {
  document.querySelector("main").style.flexDirection = "row-reverse";
};


// Tabellen-Daten
let ArrayEmissionen = [
  { höheDerEmission: 978, name: "Deutsche Lufthansa AG", land: "Deutschland" },
  { höheDerEmission: 572, name: "Orlen", land: "Polen" },
  { höheDerEmission: 250, name: "Volkswagen AG", land: "Deutschland" },
  { höheDerEmission: 186, name: "Petrol Ofisi", land: "Türkei" },
  { höheDerEmission: 322, name: "Sinopec", land: "China" },
  { höheDerEmission: 139, name: "Deutsche Telekom AG", land: "Deutschland" },
  { höheDerEmission: 464, name: "Petrobras", land: "Brasilien" },
  { höheDerEmission: 512, name: "OMV Group", land: "Oesterreich" },
  { höheDerEmission: 402, name: "Eni", land: "Italien" },
  { höheDerEmission: 139, name: "TÜPRAŞ", land: "Türkei" },
  { höheDerEmission: 211, name: "Oil and Natural Gas Corporation", land: "Indien" },
  { höheDerEmission: 80, name: "GlaxoSmithKline", land: "Vereinigtes Königreich" },
  { höheDerEmission: 492, name: "Minera Escondida", land: "Chile" },
  { höheDerEmission: 453, name: "China National Petroleum", land: "China" },
  { höheDerEmission: 656, name: "Strabag", land: "Oesterreich" },
  { höheDerEmission: 788, name: "PGE Polska Grupa Energetyczna", land: "Polen" },
  { höheDerEmission: 492, name: "ENAP", land: "Chile" },
  { höheDerEmission: 284, name: "Samsung Electronics", land: "Süd Korea" },
  { höheDerEmission: 900, name: "Suncor Energy", land: "Kanada" },
  { höheDerEmission: 511, name: "Atlas Copco", land: "Schweden" },
  { höheDerEmission: 390, name: "Yara International", land: "Norwegen" },
  { höheDerEmission: 290, name: "Sasol", land: "Südafrika" },
  { höheDerEmission: 889, name: "Ecopetrol", land: "Columbien" },
  { höheDerEmission: 257, name: "Dangote Cement", land: "Nigeria" },
  { höheDerEmission: 897, name: "China National Offshore Oil", land: "China" },
  { höheDerEmission: 878, name: "Erdemir", land: "Türkei" },
  { höheDerEmission: 59, name: "Harding Mcknight", land: "China" },
  { höheDerEmission: 35, name: "SAIC Motor", land: "China" },
  { höheDerEmission: 390, name: "Equinor", land: "Norwegen" },
  { höheDerEmission: 584, name: "Tata Motors", land: "Indien" },
  { höheDerEmission: 511, name: "Volvo Group", land: "Schweden" },
  { höheDerEmission: 900, name: "Enbridge", land: "Kanada" },
  { höheDerEmission: 284, name: "POSCO", land: "Süd Korea" },
  { höheDerEmission: 659, name: "Petrobras Distribuidora", land: "Brasilien" },
  { höheDerEmission: 492, name: "Codelco", land: "Chile" },
  { höheDerEmission: 501, name: "China Railway Construction", land: "China" },
  { höheDerEmission: 319, name: "BASF SE", land: "Deutschland" },
  { höheDerEmission: 479, name: "Ferrari", land: "Italien" },
  { höheDerEmission: 453, name: "Pacific Construction Group", land: "China" },
  { höheDerEmission: 312, name: "Coal India", land: "Indien" },
  { höheDerEmission: 290, name: "Sibanye Gold", land: "Südafrika" },
  { höheDerEmission: 889, name: "Terpel", land: "Columbien" },
  { höheDerEmission: 257, name: "BUA Cement", land: "Nigeria" },
  { höheDerEmission: 511, name: "Boliden", land: "Schweden" },
  { höheDerEmission: 900, name: "Husky Energy", land: "Kanada" },
  { höheDerEmission: 284, name: "Hyundai Heavy Industries", land: "Süd Korea" },
  { höheDerEmission: 80,  name: "Fiat Chrysler Automobiles", land: "Vereinigtes Königreich",
  },
];

// Cursor-Wechesl bei "th"-hover
$("th").hover(function () {
  $(this).css("cursor", "pointer")
});

// Tabelle erstellen

erstelleTabelle(ArrayEmissionen);

function erstelleTabelle(wert) {
  let tabelle = document.getElementById("emissionsTabelle");
  tabelle.innerHTML = "";
  for (let i = 0; i < wert.length; i++) {
    let zeile = `<tr>
                    <td class="tableData">${wert[i].name}</td>
                    <td class="tableData">${wert[i].land}</td>
                    <td class="tableData">${wert[i].höheDerEmission}</td>
                </tr>`;

    tabelle.innerHTML += zeile;
  }
}

// Tabellensuche (nach Name & Land)
$("#search-input").on("keyup", function () {
  let inhalt = $(this).val();
  let werte = tabelleDurchsuchen(inhalt, ArrayEmissionen);
  erstelleTabelle(werte);
}).innterText;

function tabelleDurchsuchen(inhalt, werte) {
  let gefilterteWerte = [];

  for (let i = 0; i < werte.length; i++) {
    inhalt = inhalt.toLowerCase();
    let filter1 = werte[i].name.toLowerCase();
    let filter2 = werte[i].land.toLowerCase();

    if (filter1.includes(inhalt) || filter2.includes(inhalt)) {
      gefilterteWerte.push(werte[i]);
    }
  }
  return gefilterteWerte;
}

// Tabellen Sortierfunktion
$("th").click(function () {
  let spalte = $(this).data("column");
  let reihenfolge = $(this).data("order");
  let text = $(this).html();
  text = text.substring(0, text.length - 1);

  if (reihenfolge == "desc") {
    $(this).data("order", "asc");
    ArrayEmissionen = ArrayEmissionen.sort((x, y) =>
      x[spalte] > y[spalte] ? 1 : -1
    );
    text + "&#8645";
  } else if (reihenfolge == "asc") {
    $(this).data("order", "desc");
    ArrayEmissionen = ArrayEmissionen.sort((x, y) =>
      x[spalte] < y[spalte] ? 1 : -1
    );
    text + "&#8645";
  }
  $(this).html;
  erstelleTabelle(ArrayEmissionen);
});