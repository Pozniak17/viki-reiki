import axios from "axios";

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
const API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export const sendMessageToTelegram = async (values) => {
  const message = `<b>Нова заявка!</b>\n\n👤 Ім'я: ${values.username}\n✉️ Email: ${values.email}\n📞 Телефон: ${values.phone}\n📝 Повідомлення: ${values.message}`;

  try {
    await axios.post(API_URL, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML",
    });
  } catch (error) {
    console.error("Помилка при надсиланні повідомлення:", error);
  }
};
