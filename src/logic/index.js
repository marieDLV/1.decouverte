import axios from 'axios'
import { useState } from 'react';

const URL = 'http://localhost:5050/messages'

// axios.get(URL).then( response => console.table(response.data) );


/**
 * Besoin de consommation API
 * 
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

const ENDPOINT = 'http://localhost:5050';
const RESOURCE_MESSAGES = `${ENDPOINT}/messages`;
const RESOURCE_USERS = `${ENDPOINT}/users`;

export function useMessagesApi(){

    const [messages, setMessages] = useState([]);

    const getAllMessages = () => {
        axios.get(RESOURCE_MESSAGES).then( response => setMessages(response.data) )
    }

    const sendMessage = async (message) => {
    }

    return {
        messages,
        getAllMessages,
        sendMessage
    }

}

export function useUsersApi(){

    const [users, setUsers] = useState([]);
    const [history, setHistory] = useState([]);

    const getAllUsers = async () => {
    }

    const searchUsers = (searchName) => {
    }

    return {
        users,
        getAllUsers,
        searchUsers
    }
    
}