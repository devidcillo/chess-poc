import MOCK_RESULT from './mock';

export const getStadistics = ()=> {
 return MOCK_RESULT;
}

export const getSamples = () => {
    fetch('https://emoji-api.com/emojis?access_key=123412341234')
    .then((response) => response.json())
    .then((data) => console.log(data));
}