import "../styles/globals.css";
import "../styles/icons/icons.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import ManuRouter from "../components/manu_router";
import moment from "moment";
import 'moment/locale/pt-br';


function MyApp({ Component, pageProps }: AppProps) {
  // console.log("page => ", useRouter().pathname);

  moment.locale("pt-br");

  if (useRouter().pathname === "/login") {
    return <Component {...pageProps} />;
  }

  return (
    <section className="flex sm:flex-col md:flex-row">
      <div className="w-[100vw]  md:w-[7rem]">
        <ManuRouter />
      </div>
      <div className="w-full h-[100vh] box-limited">
        <Component {...pageProps} />
      </div>
    </section>
  );
}

export default MyApp;
