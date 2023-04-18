import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LoginFormulario from "./LoginFormulario";
import LoginCriar from "./LoginCriar";
import LoginPerder from "./LoginPerder";
import LoginResetar from "./LoginResetar";

const Login: FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginFormulario />} />
        <Route path='criar' element={<LoginCriar />} />
        <Route path='perdeu' element={<LoginPerder />} />
        <Route path='resetar' element={<LoginResetar />} />
      </Routes>
    </div>
  );
};

export default Login;
