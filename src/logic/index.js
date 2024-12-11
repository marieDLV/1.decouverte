import axios from 'axios'
import { useState } from 'react';

//axios.get(URL).then(response => console.table(response.data));

/**
 * Besoin consommation API
 * - Lire la liste des "messages" depuis l'aPI
 * - Lire la liste des "users" depuis l'API
 * - Envoyer un message pour création vers l'API
 * - Rechercher en mémoire (filtrer) la liste d'utilisateurs
 * 
 * Formalisation: 
 * 
 * Custom Hook: "useMessagesApi" => { messages, getAllMessages, sendMessage }
 * 
 * Un state "messages" => Array<Message>
 * "getAllMessages" => Promise<Array<Message>>
 * sendMessages => Promise<Message>
 * 
 * Custom Hook: "useUsersApi" => { users, getAllUsers, searchUsers }
 * 
 * Un state "users" => Array<User>
 * "getAllUsers" => Promise<Array<User>>
 * "searchUsers" => Promise<Array<User>>
 */

const ENDPOINT = 'http://localhost:5050'
const RESOURCE_MESSAGES = `${ENDPOINT}/messages`
const RESOURCE_USERS = `${ENDPOINT}/users`

export function useMessagesApi() {
    const [messages, setMessages] = useState([]);

    const getAllMessages = async () => {
        // Promise sans async
       /*
        const promise = axios.get(RESOURCE_MESSAGES)
        .then( response => setMessages(response.data))
        .catch( error => console.error(error));
        */

        // le drapeau async permet d'utiliser le mot clé await
        // la suite du code va attendre la fin de la promesse
        const response = await axios.get(RESOURCE_MESSAGES);
        setMessages(response.data);
    }

    const sendMessage = async (message) => {
        if(!message) return;
        const response = await axios.post(URL, {text: message});
        setMessages([...messages, response.data]);
    }

    return {
        messages,
        getAllMessages,
        sendMessage
    }
}

export function useUsersApi() {
    const [users, setUsers] = useState([]);
    const [history, setHistory] = useState([]);

    const getAllUsers = async () => {
        const response = await axios.get(RESOURCE_USERS);
        setUsers(response.data);
        setHistory(response.data);
    }

    const searchUsers = (searchName) => {
        if(!searchName){
            setUsers(history);
            return;
        }

        const filteredUsers = history.filter(user => user.name.toLowerCase().includes(searchName.toLowerCase()));
        setUsers(filteredUsers);
    }

    return {
        users,
        history, 
        getAllUsers, 
        searchUsers
    }
}