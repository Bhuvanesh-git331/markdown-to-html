/**Adding all the api endpoints in config file to bifercate betwwen UAT and productions apis. As per standard coding practice */

const markDownApi=markDownHtmlApi()

function markDownHtmlApi(){

    if(window.location.host === 'localhost:3000') {
        return 'http://localhost:3001'
    }
}

export const config={
    markDownApi
}
