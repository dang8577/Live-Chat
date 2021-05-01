import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from "./components/ChatFeed.jsx";

const App = () => {
    if(!localStorage.getItem('username'))
        return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="
b5448214-337c-47dd-8626-e6d5a01bf343"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );


}

export default App;