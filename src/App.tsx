import { useState } from 'react';
import { Route, Router, Text, useText } from '@urban-bot/core';
import { chatGPT } from './services/chatgpt';

type ChatGPTResponse = {
    id: string;
    text: string;
};

function ChatGPT() {
    const [text, setText] = useState('ChatGPT enabled');
    const [response, setResponse] = useState<ChatGPTResponse>();

    useText(async ({ text }) => {
        const newResponse = await chatGPT(text, {
            parentMessageId: response?.id,
        });
        setResponse(newResponse);
        setText(newResponse.text);
    });

    return <Text>{text}</Text>;
}

export function App() {
    return (
        <>
            <Text>Welcome to Tyson Bot! Type /chatgpt</Text>
            <Router>
                <Route path="/chatgpt">
                    <ChatGPT />
                </Route>
            </Router>
        </>
    );
}
