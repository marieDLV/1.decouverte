import axios from 'axios'

const URL = 'http://localhost:5050/messages'

axios.get(URL).then( response => console.table(response.data) );
