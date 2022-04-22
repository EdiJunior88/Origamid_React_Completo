import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor='nome'>Nome</label>
        <Input />
      </p>

      <p>
        <label htmlFor='mail'>Email</label>
        <Input />
      </p>
        <Button />
    </form>
  );
};

export default Form;
