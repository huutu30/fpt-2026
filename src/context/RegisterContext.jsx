import React, { createContext, useState, useContext } from 'react';

const RegisterContext = createContext();

export const useRegisterModal = () => useContext(RegisterContext);

export const RegisterProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState('');

  const openModal = (product = '') => {
    setProductName(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProductName('');
  };

  return (
    <RegisterContext.Provider value={{ isOpen, productName, openModal, closeModal }}>
      {children}
    </RegisterContext.Provider>
  );
};
