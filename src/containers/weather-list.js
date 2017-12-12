import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) { //render single row
        console.log(cityData);
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        //const lon = cityData.city.coord.lon;
        //const lat = cityData.city.coord.lat;
        // or (es6)
        const { lon, lat } = cityData.city.coord;



        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat} city={name} />
                </td>
                <td>
                    <Chart data={temps} color="orange" unit="K"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" unit="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="black" unit="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temp (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
            <tbody>
            {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
        );
    }

}

/*
function mapStateToProps(state) {
    return {weather:state.weather}
}*/
function mapStateToProps({ weather }) {
    return { weather };
}


export default connect(mapStateToProps)(WeatherList);
