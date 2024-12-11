import Container from "./Container";
import Inbox from "./Inbox";
import Messages from "./Messages";
import Messaging from "./Messaging";

// CSS
import "./_maquette/style.css";

// MessageBoard.jsx
function MessageBoard() {
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
export default MessageBoard;
