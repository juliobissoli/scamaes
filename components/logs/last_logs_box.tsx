import moment from "moment";
import { ArrowsOutSimple } from "phosphor-react";
import Logs from "../../data/logs";
import { Logs_I } from "../../interfaces/logs";

interface Props {
  title?: string;

}

export const LastLogBox: React.FC<Props> = ({title}: Props) => {
  const lastLogs: Array<Logs_I> = Logs.index;
  return (
    <div className="highlight-box mt-4">
        <div className="p-2">

      <header className="flex justify-between">
        <h5 className=" text-xl mb-2"> {title} </h5>
        <button>
          <ArrowsOutSimple size={24} />
        </button>
      </header>
      {lastLogs.map((el, i) => (
          <div key={i} className="flex flex-col py-2 border-t border-zinc-100">
          <header className="flex justify-between items-end">
            <span>{el.action}</span>
            <small className="text-sm">{moment(el.date).fromNow()}</small>
          </header>
          <small className="text-gray-400 text-sm mt-1">{el.message}</small>
        </div>
      ))}
      </div>
    </div>
  );
};

