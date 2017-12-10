import {FETCH_WEATHER} from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER :
            //return state.concat( [action.payload.data] ); //concat returns a new instance <> from push
            // nunca mudar state sempre por uma instancia nova
            return  [action.payload.data, ...state] ; //identical, es6
    }


    //console.log('Action: ',action);
    return state;
}