import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import test from "../assets/login_img.png";
import TextField from "../components/common/text_field";
import { SetStateAction, useState } from "react";
import { Eye, EyeSlash, MagnifyingGlass, X } from "phosphor-react";
import Button from "../components/common/button";

const Login: NextPage = (props) => {
  const [passowrdIsVisible, togglePassowrdIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [passowrd, setPassord] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeInput = (event: any, setFunction: (value: SetStateAction<string>) => void) => {
    setFunction(event);
  };

  function login() {
    console.log('email => ', email),
      console.log('password => ', passowrd)
    if (email === 'admin@admin.com' && passowrd === '123456') {
      router.push('/')
    }
    else {
      setErrorMessage('Erro na autenticação!')
    }
    // e.preventDefault()
  }


  const router = useRouter();
  return (
    <div className="h-[100vh] w-full flex overflow-hidden">
      <div className="h-full lg:w-[50vw] w-[30vw] bg-purple-700 md:flex hidden">
        <img
          src="/login_img.png"
          style={{
            objectFit: "cover",
            height: "100vh",
            zoom: 1.2,
            overflow: "none",
            filter: " brightness(60%)",
          }}
        />
      </div>
      <div className="h-full w-[100vw] lg:w-[50vw]  p-2 flex justify-center">
        <div className="mt-24 w-[100vw] xl:w-[500px] md:w-[70vw]">
          <h1 className="text-4xl">Bem-vindo ;)</h1>
          {errorMessage
            ? (<div className="bg-red-200 text-red-700 p-4 mt-2 rounded-2xl items-center flex justify-between">
              {errorMessage}
              <button onClick={()=> setErrorMessage('')} >
               <X weight="regular" />
              </button>
            </div>)
            : ''
          }
          <form className="flex flex-col py-5 px-2 ">
            <TextField
              onChanged={(event) => handleChangeInput(event, setEmail)}
              label="Email " type='email' />
            <div className="mt-4">

              <TextField
                onChanged={(event) => handleChangeInput(event, setPassord)}
                placeholder='' label="Senha " type={passowrdIsVisible ? 'text' : 'password'}
                sulfix={
                  <Button onClick={() => togglePassowrdIsVisible(!passowrdIsVisible)}>
                    {passowrdIsVisible ? (<Eye size={20} />) : (<EyeSlash size={20} />)}
                  </Button>
                }
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <button className="text-red-500 ">Esqueci minha senha</button>

              <Button color="green" onClick={login}>
                {/* <Link href="/">Entrar</Link> */}
                Entrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default Login;
