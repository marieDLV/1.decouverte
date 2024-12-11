> Proposer un découpage en composants ReactJS du code HTML de la maquette. 

- Donner la liste énumérée des composants et leur role dans l'IHM. 
- Mentionner les "props" attendues et leur raison pour chaque composant.
- Créer dans le fichier courant "OBJECTIF.md" le plan de l'arbre des composants.


```jsx
<MessagingApp>
    <Container>
        <aside>
            <Header><h1>Recent</h1><SearchBar handleSearch></SearchBar></Header>
            <ConversationList conversationList handleConversationIDSelect>
                <ConversationPreview conversation>
                    <Avatar conversation.img></Avatar>
                    <ConversationSummary conversation></ConversationSummary>
                </ConversationPreview>
            </ConversationList>
        </aside>
        <main>
            <MessageList currentConversation>
                <SenderMessage>
                    <Avatar conversation.img></Avatar>
                    <MessageContent !owned conversation.messageList>
                        <div>Message content</div>
                        <div>Heure | Date</div>
                    </MessageContent>
                </SenderMessage>
                <RecipientMessage>
                    <MessageContent owned conversation.messageList></MessageContent>
                </RecipientMessage>
                <MessageTyping />
            </MessageList>
        </main>
    </Container>
</MessagingApp>
```