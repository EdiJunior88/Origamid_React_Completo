import React from 'react';

const ButtonModal = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Abrir</button>;
};

export default ButtonModal;
