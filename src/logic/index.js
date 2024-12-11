import axios from 'axios'

const URL = 'http://localhost:5050/messages'

axios.get(URL).then( response => console.table(response.data) );


/**
 * Besoin de consommation API
 * - Lire la liste des "messages" depuis l'API
 * - Lire la liste des "users" depuis l'API
 * - Envoyer un message pour création vers l'API
 * - Rechercher en mémoire (filtrer) la liste d'utilisateurs
 * 
 * Formalisation:
 * 
 * Custom Hook : "useMessagesApi" => { messages, getAllMessages, sendMessage }
 * 
 * Un state "messages" => Array<Message> 
 * "getAllMessages" => Promise<Array<Message>>
 * "sendMessage" => Promise<Message>
 * 
 * Custom Hook : "useUsersApi" => { users, getAllUsers, searchUsers }
 * 
 * Un state "users" => Array<User> 
 * "getAllUsers" => Promise<Array<User>>
 * "searchUsers" => Array<User>
 */