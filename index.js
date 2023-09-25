const axios = require('axios');

async function fetchCurrencyRates() {
    try {
        const response = await axios.get('https://api.nbp.pl/api/exchangerates/tables/A/');
        const data = response.data[0].rates;
    
        const usdRate = data.find(rate => rate.code === 'USD');
        const euroRate = data.find(rate => rate.code === 'EUR');
        const gbpRate = data.find(rate => rate.code === 'GBP');

        console.log('Kursy walut:');
        console.log(`Dolar amerykański (USD): ${usdRate.mid} PLN`);
        console.log(`Euro (EUR): ${euroRate.mid} PLN`);
        console.log(`Funt szterling (GBP): ${gbpRate.mid} PLN`);
        const express = require('express');
        const app = express();
        app.get('/dolar', (req, res) => {
            res.json( usdRate.mid );
        });

        app.get('/euro', (req, res) => {
            res.json( euroRate.mid );
        });

        app.get('/funt', (req, res) => {
            res.json( gbpRate.mid );
        });

        const port = 8080;
        app.listen(port, () => {
            console.log(`Serwer działa na porcie ${port}`);
        });
        setTimeout(() => get_data_from_api(express.response), 300000)
    }
    catch (error) {
        console.error('Wystąpił błąd podczas pobierania danych:', error.message);
    }
}
fetchCurrencyRates();