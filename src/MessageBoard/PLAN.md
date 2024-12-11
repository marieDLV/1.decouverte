# Strucutre de composants

## Hiérarchie des composants
* MessageBoard ( Container )
      * Messaging
          * Inbox
              * SearchBar
              * ChatList (itéré pour chaque conversation)
          * Messages
              * MessageHistory
                  * Message (itéré pour chaque message)
              * MessageInput

```jsx

function App() {
  const conversations = [
    { id: 1, name: "Sunil Rajput", date: "Dec 25", preview: "Test, which is a new approach...", profileImage: "https://ptetutorials.com/images/user-profile.png" },
    // autres conversations
  ];

  const messages = [
    { type: "incoming", text: "Hello there!", timestamp: "11:01 AM | Today", profileImage: "https://ptetutorials.com/images/user-profile.png" },
    { type: "outgoing", text: "Hi!", timestamp: "11:02 AM | Today" },
  ];

  const handleSendMessage = (message) => {
    console.log("Message sent:", message);
  };

  return (
    <Container>
      <Messaging>
        <Inbox conversations={conversations} />
        <Messages messages={messages} onSendMessage={handleSendMessage} />
      </Messaging>
    </Container>
  );
}
```

## Liste des composants

### 1. Container
- "Rôle" : Le composant principal qui englobe toute l'interface de messagerie.
- "Props" : `Aucun` pour ce composant de haut niveau.

### 2. Messaging
- "Rôle" : Regroupe les deux sections principales : la liste des conversations (Inbox) et la fenêtre des messages (Messages).
- "Props" : `Aucun`, car il sert principalement de conteneur logique.

### 3. Inbox
- "Rôle" : Représente la liste des discussions récentes.
- "Props" :
    * `conversations` : Un tableau d'objets contenant les informations sur chaque discussion (nom, date, aperçu du message, image de profil).
    * `onSelectConversation` : Une fonction pour gérer la sélection d'une conversation.

### 4. SearchBar
- "Rôle" : Barre de recherche permettant de filtrer les conversations.
- "Props" :
    * `onSearch` : Une fonction déclenchée lors de la saisie pour effectuer la recherche.

### 5. ChatList
- "Rôle" : Liste individuelle des conversations dans l'inbox.
- "Props" :
    * `chat` : Objet contenant les informations de la discussion (nom, date, aperçu, image).
    * `active` : Booléen indiquant si la conversation est sélectionnée.
    * `onClick` : Une fonction appelée lorsqu'une conversation est sélectionnée.

### 6. Messages
- "Rôle" : Contient l'historique des messages et le champ de saisie.
- "Props" :
    * `messages` : Un tableau d'objets représentant chaque message (texte, heure, type de message - entrant/sortant).
    * `onSendMessage` : Une fonction appelée pour envoyer un message.

### 7. MessageHistory
- "Rôle" : Gère l'affichage des messages envoyés et reçus.
- "Props" :
    * `messages` : Un tableau d'objets contenant les détails des messages.

### 8. Message
- "Rôle" : Représente un message individuel (entrant ou sortant).
- "Props" :
    * `type` : Indique si le message est incoming ou outgoing.
    * `text` : Le texte du message.
    * `timestamp` : L'heure et la date du message.
    * `profileImage` (optionnel) : L'image de profil de l'utilisateur (pour les messages entrants).

### 9. MessageInput
- "Rôle" : Barre de saisie des messages.
- "Props" :
    * `onSend` : Une fonction déclenchée lorsque l'utilisateur envoie un message.
    * `placeholder` : Texte affiché dans le champ de saisie (par défaut : "Type a message").




