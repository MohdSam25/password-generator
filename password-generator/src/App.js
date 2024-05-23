
import React, { useState, useEffect, useRef } from 'react';
import { Container, Box } from '@mui/material';
import PasswordGeneratorForm from './compoents/password';
import PasswordDisplay from './compoents/passwordDisplay';
import CopyToClipboardButton from './compoents/CopyToClipboardButton';
import GeneratedPasswordsList from './compoents/GeneratedPasswordsList';
import generatePassword from './utilites/generatePassword';
import { getStoredPasswords, storePassword } from './utilites/localStorage';
import gsap from 'gsap';
import './index.css';

const App = () => {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwords, setPasswords] = useState(getStoredPasswords());
  const passwordDisplayRef = useRef(null);
  const passwordListRef = useRef(null);

  const handleGenerate = (options) => {
    const password = generatePassword(options);
    setGeneratedPassword(password);
    storePassword(password);
    setPasswords(getStoredPasswords());
  };

  useEffect(() => {
    if (generatedPassword) {
      gsap.fromTo(
        passwordDisplayRef.current,
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'bounce.out' }
      );
    }
  }, [generatedPassword]);

  useEffect(() => {
    gsap.fromTo(
      passwordListRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
    );
  }, [passwords]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
      <Container className="bg-white p-6 rounded-lg shadow-xl">
        <Box my={4} className="space-y-4">
          <PasswordGeneratorForm onGenerate={handleGenerate} />
          {generatedPassword && (
            <div ref={passwordDisplayRef}>
              <PasswordDisplay password={generatedPassword} />
              <CopyToClipboardButton text={generatedPassword} />
            </div>
          )}
          <div ref={passwordListRef}>
            <GeneratedPasswordsList passwords={passwords} />
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default App;
