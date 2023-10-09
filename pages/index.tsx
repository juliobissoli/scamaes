import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = (props) => {
  console.log("==> ", props);
  const router = useRouter();
  return <h1 className="text-4xl">Dasboard</h1>;
};

export default Home;
