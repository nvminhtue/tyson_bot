import { UrbanBotTelegram } from '@urban-bot/telegram';
import { render, Root } from '@urban-bot/core';
import dotenv from 'dotenv';
import { App } from '../App';

dotenv.config();
debugger

const { TELEGRAM_TOKEN, PORT } = process.env;

const isDevelopment = true;

if (!TELEGRAM_TOKEN) {
    throw new Error('Provide TELEGRAM_TOKEN to .env https://core.telegram.org/bots#6-botfather');
}

const urbanBotTelegram = new UrbanBotTelegram({
    token: TELEGRAM_TOKEN,
    isPolling: isDevelopment,
});

render(
    <Root bot={urbanBotTelegram} port={PORT ? Number(PORT) : undefined}>
        <App />
    </Root>,
    () => console.log('telegram bot has started at PORT:', PORT),
);
