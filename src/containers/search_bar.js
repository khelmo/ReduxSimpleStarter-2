import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: '', country: 'us'};
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputCountryChange = this.onInputCountryChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onInputCountryChange(e) {
        console.log(e.target.value);
        //console.log(e.target.options[e.selectedIndex].value);
        this.setState({term: this.state.term, country: e.target.value});
    }

    onInputChange(e) {
        //console.log(e.target.value);
        this.setState({term: e.target.value, country: this.state.country});
    }

    onFormSubmit(e) { //form eh usado pois facilia o controle por ENTER e clicar no botao, evitando 2 callback de evento
        e.preventDefault(); //dont submit at all
        //fires action creator to get the data
        this.props.fetchWeather(this.state.term,this.state.country);
        this.setState({term: '', country: this.state.country});
    }

    render() {
        //callback onChange={this.onInputChange} /> nao pode usar assim, deve-se usar bind no construtor ou usar ()=> por causa do contexto do this
        return (
<div>



            <form
                onSubmit={this.onFormSubmit} //prevent the browser from submitting the page
                className="input-group">

                <input
                    placeholder="Get a five day broadcast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />



                        <select className="form-control" placeholder="Select country" onChange={this.onInputCountryChange}>
                            <option value="us" className="dropdown-item">United States</option>
                            <option value="br" className="dropdown-item">Brazil</option>
                        </select>

                <div className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </div>
                </form>
    </div>
    );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);