import TelegramApi from "node-telegram-bot-api";

export const token = '5388012872:AAG4F4MT5p_ZXdj8FZhbwzaWmctrY-QD4R4';
export const bot = new TelegramApi(token, {polling: true})


bot.getChatAdministrators