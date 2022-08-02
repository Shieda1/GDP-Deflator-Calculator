// https://calculator.swiftutors.com/gdp-deflator-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const GDPDeflatorRadio = document.getElementById('GDPDeflatorRadio');
const nominalGDPRadio = document.getElementById('nominalGDPRadio');
const realGDPRadio = document.getElementById('realGDPRadio');

let GDPDeflator;
let nominalGDP = v1;
let realGDP = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

GDPDeflatorRadio.addEventListener('click', function() {
  variable1.textContent = 'Nominal GDP';
  variable2.textContent = 'Real GDP';
  nominalGDP = v1;
  realGDP = v2;
  result.textContent = '';
});

nominalGDPRadio.addEventListener('click', function() {
  variable1.textContent = 'GDP Deflator';
  variable2.textContent = 'Real GDP';
  GDPDeflator = v1;
  realGDP = v2;
  result.textContent = '';
});

realGDPRadio.addEventListener('click', function() {
  variable1.textContent = 'GDP Deflator';
  variable2.textContent = 'Nominal GDP';
  GDPDeflator = v1;
  nominalGDP = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(GDPDeflatorRadio.checked)
    result.textContent = `GDP Deflator = ${computeGDPDeflator().toFixed(2)}`;

  else if(nominalGDPRadio.checked)
    result.textContent = `Nominal GDP = ${computeNominalGDP().toFixed(2)}`;

  else if(realGDPRadio.checked)
    result.textContent = `Real GDP = ${computeRealGDP().toFixed(2)}`;
})

// calculation

function computeGDPDeflator() {
  return (Number(nominalGDP.value) / Number(realGDP.value)) * 100;
}

function computeNominalGDP() {
  return (Number(GDPDeflator.value) / 100) * Number(realGDP.value);
}

function computeRealGDP() {
  return Number(nominalGDP.value) / (Number(GDPDeflator.value) / 100);
}