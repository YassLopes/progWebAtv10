async function consultarCEP() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('resultadoCEP').innerText = `Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade}`;
}

async function consultarClima() {
    const cidade = document.getElementById('cidade').value;
    const pais = document.getElementById('pais').value;
    const apiKey = 'a9c76efdc4877236fcc97045a00d99f1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}&lang=pt_br`;
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('resultadoClima').innerText = `Tempo: ${data.weather[0].description}, Temperatura: ${data.main.temp - 273} °C`;
}
