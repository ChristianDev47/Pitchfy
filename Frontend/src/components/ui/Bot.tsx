import { useEffect, useRef } from 'react';
import  '../../assets/styles/bot.css';

const FloatingChat = () => {
  const chatRef = useRef<HTMLDivElement | null>(null);
  const textInputRef = useRef<HTMLDivElement | null>(null);
  const messagesRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const element = chatRef.current;
    if (!element) return;

    const createUUID = (): string => {
      const hexDigits = "0123456789abcdef";
      const s = Array(36).fill('');
      for (let i = 0; i < 36; i++) {
        s[i] = hexDigits[Math.floor(Math.random() * 16)];
      }
      s[14] = "4"; 
      s[19] = hexDigits[(parseInt(s[19], 16) & 0x3) | 0x8]; 
      s[8] = s[13] = s[18] = s[23] = "-";
      return s.join('');
    };

    const handleCloseClick = () => {
      closeElement();
    };

    const handleSendMessageClick = () => {
      sendNewMessage();
    };

    const handleKeydown = (event: KeyboardEvent) => {
      onMetaAndEnter(event);
    };

    const openElement = () => {
      const messages = messagesRef.current;
      const textInput = textInputRef.current;

      if (!messages || !textInput) {
        console.error('No se encontraron los elementos necesarios en el DOM');
        return;
      }

      const icon = element.querySelector('.floating-chat > i') as HTMLElement;
      if (icon) {
        icon.classList.add('hidden');
      }
      element.classList.add('expand');
      element.querySelector('.chat')?.classList.add('enter');

      textInput.focus();

      textInput.addEventListener('keydown', handleKeydown);

      element.querySelector('.header button')?.addEventListener('click', handleCloseClick);
      element.querySelector('#sendMessage')?.addEventListener('click', handleSendMessageClick);

      messages.scrollTop = messages.scrollHeight;
    };

    const closeElement = () => {
      const chat = element.querySelector('.chat') as HTMLElement;
      const bt = document.getElementById('floating-chat') as HTMLElement;
      const textInput = textInputRef.current;

      if (!chat || !textInput) {
        console.error('No se encontraron los elementos necesarios en el DOM');
        return;
      }

      chat.classList.remove('enter');
      chat.style.display = 'none';

      const icon = element.querySelector('.floating-chat > i') as HTMLElement;
      element.querySelector('.floating-chat')?.classList.remove('expand');

      element.querySelector('.header button')?.removeEventListener('click', handleCloseClick);
      element.querySelector('#sendMessage')?.removeEventListener('click', handleSendMessageClick);
      textInput.removeEventListener('keydown', handleKeydown);

      textInput.blur();

      setTimeout(() => {
        chat.classList.remove('enter');
        if (icon) {
          icon.classList.remove('hidden');
        }
        bt.classList.remove('expand');
        bt.classList.remove('enter');
        chat.style.display = '';
        element.addEventListener('click', openElement);
      }, 100);
    };

    const sendNewMessage = () => {
      const userInput = textInputRef.current;

      if (!userInput) {
        console.error('No se encontró el campo de entrada de texto');
        return;
      }

      const newMessage = userInput.innerHTML.trim().replace(/\n/g, '<br>');
      if (!newMessage) return;

      const messagesContainer = messagesRef.current;

      if (!messagesContainer) {
        console.error('No se encontró el contenedor de mensajes');
        return;
      }

      const messageElement = document.createElement('li');
      messageElement.className = 'other';
      messageElement.innerHTML = newMessage;
      messagesContainer.appendChild(messageElement);

     setTimeout(() => {
       const messageElementResponse = document.createElement('li');
       messageElementResponse.className = 'self';
       messageElementResponse.innerHTML = "If you'd like to continue the conversation, please create an account and choose a plan to unlock full access to the chat";
       messagesContainer.appendChild(messageElementResponse);
       messagesContainer.scrollTo({ top: messagesContainer.scrollHeight, behavior: 'smooth' });

     }, 200);
      
      userInput.innerHTML = '';
      userInput.focus();

      messagesContainer.scrollTo({ top: messagesContainer.scrollHeight, behavior: 'smooth' });
    };

    const onMetaAndEnter = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        sendNewMessage();
      }
    };

    const chatID = localStorage.getItem('chatID') || createUUID();
    localStorage.setItem('chatID', chatID);

    setTimeout(() => {
      element.classList.add('enter');
    }, 1000);

    element.addEventListener('click', openElement);

    return () => {
      element.removeEventListener('click', openElement);
    };
  }, []);

  return (
    <div className="px-5 floating-chat wdt-heading-title-wrapper wdt-heading-align-center wdt-heading-deco-wrapper motion-safe:opacity-0 motion-safe:intersect:animate-heroFade" id="floating-chat" ref={chatRef}>
      <i className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block text-white align-middle border-gray-200">
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" className="border-gray-200" />
        </svg>
      </i>
      <div className="chat">
        <div className="header flex justify-end text-[12px]">
          <button>x</button>
        </div>
        <ul className="messages" ref={messagesRef}>
          <li className="self">
            Welcome to Pitchfy. I’m Clark, your dedicated virtual journalist. My goal is to craft a professional and impactful article that represents your vision with precision. When you've finished, click on the ‘send article by email’ button to automatically send it to our list of journalists. Before we begin, may I have your name to personalize our session?
          </li>
        </ul>
        <div className="footer">
          <div className="outline-none text-box" contentEditable="true" ref={textInputRef}></div>
          <button id="sendMessage" className="text-[12px] px-3 py-1 bg-primary transition-all text-gray-50" >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingChat;
