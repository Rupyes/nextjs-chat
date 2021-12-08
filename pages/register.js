import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';

const demo = {
  username: 'adam_la_morre',
  first_name: 'Adam',
  last_name: 'La Morre',
  secret: 'pass1234',
  custom_json: { high_score: 2000 },
};

export default function Register({ chat_key }) {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [secret, setSecret] = useState('');
  const [confirmSecret, setConfirmSecret] = useState('');
  const [misMatch, setMisMatch] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();

    if (secret !== confirmSecret) {
      setMisMatch(true);
      return;
    }
    axios
      .post(
        'https://api.chatengine.io/users/',
        {
          username,
          first_name: firstName,
          last_name: lastName,
          secret,
        },
        {
          headers: {
            'PRIVATE-KEY': chat_key,
          },
        }
      )
      .then((r) => router.push('/'))
      .catch((err) => setError(true));
  };
  return (
    <div className='background'>
      <div className='auth-reg-container'>
        <form className='auth-form' onSubmit={onSubmit}>
          <div className='auth-title'>Register</div>
          <div className='input-container'>
            <input
              placeholder='Username'
              className='text-input'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='input-container'>
            <input
              placeholder='First Name'
              className='text-input'
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className='input-container'>
            <input
              placeholder='Last Name'
              className='text-input'
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='input-container'>
            <input
              placeholder='Password'
              type='password'
              className='text-input'
              onChange={(e) => setSecret(e.target.value)}
              onFocus={() => setMisMatch(false)}
              required
            />
          </div>
          <div className='input-container'>
            <input
              placeholder='Confirm Password'
              className='text-input'
              type='password'
              onChange={(e) => setConfirmSecret(e.target.value)}
              onFocus={() => setMisMatch(false)}
              required
            />
          </div>
          {error && <p className='error'>Error during registration</p>}
          {misMatch && <p className='error'>Password MisMatch</p>}
          <button type='submit' className='submit-button'>
            Register
          </button>
        </form>
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
