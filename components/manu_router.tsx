import Link from "next/link";
import { useRouter } from "next/router";
import Avatar from "./common/avatar";

const ManuRouter = () => {
  interface BtnRoute {
    path: string;
    label: string;
    icon: string;
  }

  const btnRoutes: Array<BtnRoute> = [
    {
      label: "Assistidos",
      path: "/assisted",
      icon: "icon-feater-sparkles",
    },
    {
      label: "Atendimento",
      path: "/attendance",
      icon: "icon-feater-tag",
    },
    {
      label: "Colaboradores",
      path: "/collaborator",
      icon: "icon-feater-user-group",
    },
  ];

  // console.log("pageMain => ", useRouter().pathname);
  const currentRouter = useRouter().pathname;

  return (
    <div className="bg-[#F5F5FA] flex items-center flex md:flex-col h-[7rem] md:h-[100vh] w-full justify-between">
      <button className="btn p-2 md:mt-7">
        <Link href="/">
          <i className="icon icon-feater-view-drid bg-text-dark h-[30px] w-[30px]"></i>
        </Link>
      </button>
      <ul className="flex md:flex-col p-5 h-50">
        {btnRoutes.map((btnRoute: BtnRoute) => {
          return (
            <li key={btnRoute.path} className="p-2">
              <Link href={btnRoute.path}>
                <button
                  className={`btn  p-4 rounded-2xl border-solid border-2 ${
                    currentRouter === btnRoute.path
                      ? "border-text-dark"
                      : "border-purple-50"
                  }`}
                >
                  <i
                    className={`icon ${btnRoute.icon} bg-text-dark h-[30px] w-[30px]`}
                  ></i>
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="btn md:mb-7 p-2">
        <Link href="/setting">
          <div className="h-[40px] w-[40px] rounded-full bg-gray-400">
            <Avatar url="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=61&q=100"/>   
          </div>
        </Link>
      </button>
    </div>
  );
};
export default ManuRouter;
