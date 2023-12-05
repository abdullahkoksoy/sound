"use client";

import Libary from '@/components/Libary';
import { useState } from 'react';
import PasswordModal from './PasswordModal';

const AdminSS: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handlePasswordSubmit = (password: string) => {
    // Check if the password is correct (you can use a backend API for more security)
    if (password === '123') {
      setIsPasswordCorrect(true);
    } else {
      setIsPasswordCorrect(false);
      // Optionally, display an error message or handle incorrect password
    }

    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <>
      <PasswordModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onPasswordSubmit={handlePasswordSubmit}
      />

      {isPasswordCorrect && (
        <div className="bg-slate-900 h-screen">
          <div className="w-48">
            <h1 
              className="
                text-white
                text-2xl
                font-semibold
                ml-6
                pt-14
              "
            >
              Şarkı Yükle 
            </h1>
            <Libary songs={[]}/>
          </div> 
        </div>
      )}
    </>
  );
};

export default AdminSS;