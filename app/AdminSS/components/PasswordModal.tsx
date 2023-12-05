"use client";

import React, { useState, ChangeEvent } from 'react';
import Modal from 'react-modal';

interface PasswordModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onPasswordSubmit: (password: string) => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ isOpen, onRequestClose, onPasswordSubmit }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onPasswordSubmit(password);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Password Modal"
      className="bg-slate-950 h-screen justify-center text-center align-middle"
    >
      <h2>Admin Şifre</h2>
      <input
        type="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Onayla</button>
    </Modal>
  );
};

export default PasswordModal;