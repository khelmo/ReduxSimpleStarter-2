import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader';

class GoogleMap extends Component{
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps({isScriptLoadSucceed}){
        if (this.props) {
            if (isScriptLoadSucceed) {
                var markers = [];

                var map = new window.google.maps.Map(document.getElementById(this.props.city), {
                    zoom: 12,
                    center: {lat: this.props.lat, lng: this.props.lon}
                });
            }
            else {
                alert("script not loaded")
            }
        }
    }

    render(){
        return(
            <div>
                <div id={this.props.city} style={{height: "180px"}}></div>
            </div>
        )
    }
}

export default scriptLoader(
    ["https://maps.googleapis.com/maps/api/js?key=AIzaSyAbyuJALfpCmoW_znGjpG0Ax6cwi80zrY8"]
)(GoogleMap)











/*
import React, { Component } from 'react';


class GoogleMap extends Component {
    componentDidMount() {

        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        //this.ref.map
        return <div id="map" ref="map" />;
    }
}

export default GoogleMap;

*/