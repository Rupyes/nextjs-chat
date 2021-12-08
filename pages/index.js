import React, { useContext, useState } from 'react';

import Link from 'next/link';

import { Context } from '../context';

import { useRouter } from 'next/dist/client/router';
import axios from 'axios';

export default function Auth({ chat_key }) {
  const { username, secret, setUsername, setSecret } = useContext(Context);
  const [errorSigin, setErrorSigin] = useState(false);

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;
    axios
      .get(`https://api.chatengine.io/users/me`, {
        headers: {
          'Project-ID': 'dec6079b-895c-44a9-bd37-935439bccb9b',
          'User-Name': username,
          'User-Secret': secret,
        },
      })
      .then((r) => {
        router.push('/chats');
      })
      .catch((err) => {
        setErrorSigin(true);
      });
  };

  return (
    <div className='background'>
      <div className='auth-container'>
        <form className='auth-form' onSubmit={onSubmit}>
          <div className='auth-title'>NextJS chat</div>
          <div className='input-container'>
            <input
              placeholder='email'
              className='text-input'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='input-container'>
            <input
              placeholder='password'
              type='password'
              className='text-input'
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          {errorSigin && <div className='error'>Error signing in</div>}
          <button type='submit' className='submit-button'>
            Login
          </button>
        </form>
        <p className='register'>
          No account? <Link href='/register'>Register</Link>
        </p>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const chat_key = process.env.CHAT_KEY;
  return {
    props: { chat_key },
  };
};
