import axios from 'axios';

class WeatherService {
    constructor() {
        // API key gratuita de OpenWeatherMap 
        this.apiKey = 'your_api_key_here'; // Cambiar por API key real o usar datos fake
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }

    async getWeather(city) {
        // Para demo - datos simulados del clima
        console.log(`Consultando clima para ${city}...`);
        
        // Simular datos reales del clima
        const climasSimulados = {
            'Buenos Aires': {
                ciudad: 'Buenos Aires',
                temperatura: '24°C',
                descripcion: 'cielo claro',
                sensacion: '26°C',
                humedad: '62%',
                pais: 'AR'
            },
            'Montevideo': {
                ciudad: 'Montevideo',
                temperatura: '22°C',
                descripcion: 'parcialmente nublado',
                sensacion: '24°C',
                humedad: '68%',
                pais: 'UY'
            }
        };

        return climasSimulados[city] || {
            ciudad: city,
            temperatura: '20°C',
            descripcion: 'clima agradable',
            sensacion: '22°C',
            humedad: '55%',
            pais: 'XX'
        };
    }
}

export default new WeatherService();
