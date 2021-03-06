import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../context';
import { useRouter } from 'next/dist/client/router';
import dynamic from 'next/dynamic';

const ChatEngine = dynamic(() =>
  import('react-chat-engine').then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import('react-chat-engine').then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const { username, secret, setUsername, setSecret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  const logoutHandler = () => {
    setUsername('');
    setSecret('');
  };

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push('/');
  });

  if (!showChat) return <div />;

  return (
    <div className='background'>
      <div className='shadow'>
        <ChatEngine
          height='calc(100vh-200px)'
          projectID='dec6079b-895c-44a9-bd37-935439bccb9b'
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
      <button className='logout' onClick={logoutHandler}>
        Log out
      </button>
    </div>
  );
}
