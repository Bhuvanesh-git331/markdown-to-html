/**Have used useReducer hook instead of redux as this is a small application */

import React, { createContext, useReducer } from 'react';
import markDownReducer from '../Reducers/markDownReducer';
import { GET_DATA } from '../constants/constants';
import { config } from '../config/config';
import axios from "axios";

const initialState = {
    textData: ''
}

/**Creating context */
export const GlobalContext = createContext(initialState)

/**Creating Provider Component */
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(markDownReducer, initialState)

    const convertMarkDownToHtml = async (textData) => {
        let url=config.markDownApi
        try {
            const result = await axios.post(`${url}/convert`, { data: textData }, {
                headers: { 'content-type': 'application/json' }
            })
            console.log('result', result)
            if (result.data.code === 200) {
                dispatch({
                    type: GET_DATA,
                    payload: result.data.data.html
                })
            }
        } catch (err) {
            console.log('err', err)
        }
    }

    return (
        <GlobalContext.Provider value={{
            textData: state.textData,
            convertMarkDownToHtml
        }}>
            {children}
        </GlobalContext.Provider>
    )
}