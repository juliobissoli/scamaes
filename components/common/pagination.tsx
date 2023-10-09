import { CaretLeft, CaretRight } from "phosphor-react";

export function Pagination() {
  const currentPage: number = 1;
  //   const perPage = 3;
  //   const totalPage = 10;

  const pageList: Array<number> = [1, 2, 3, 4];

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center">
        <li className="cursor-pointer">
          <CaretLeft size={20} weight="bold" />
        </li>
        {pageList.map((el) => (
          <li key={el} className="">
            <button
              className={`mx-1 rounded-full w-[30px] h-[30px] ${
                el === currentPage
                  ? "bg-purple-600 text-white "
                  : "bg-zinc-100  "
              }`}
            >
              {el}
            </button>
          </li>
        ))}
        <li className="cursor-pointer">
          <CaretRight size={20} weight="bold" />
        </li>
      </ul>
    </nav>
  );
}
