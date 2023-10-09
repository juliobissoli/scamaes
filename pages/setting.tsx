import { NextPage } from "next";
import Link from "next/link";

const Setting: NextPage = (props) => {
  // console.log("==> ", props);
  // const router = useRouter();

  return (
    <section className="p-8">

    <div className="page-wrapper-sm">
      <h1 className="text-4xl">Setting</h1>
      <div>

      <Link href="/login">
        <button className="rounded-lg border-solid border border-red-200 mt-8  text-red-700 font-fill py-2 px-4">
          Sair
        </button>
      </Link>
      </div>
    </div>
    </section>
  );
};

export default Setting;
