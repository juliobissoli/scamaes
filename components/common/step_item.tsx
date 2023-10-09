import { CaretDown, CaretUp } from "phosphor-react";

interface Props {
  title: string;
  stepNumber: number;
  children: React.ReactNode;
  isCollapsed?: boolean;
  toggleClick?: () => void;
}

const StepItem: React.FC<Props> = ({
  title,
  stepNumber,
  children,
  isCollapsed,
  toggleClick,
}: Props) => {
  return (
    <div className="flex flex-col">
      <header className="flex items-center gap-4 mb-2">
        <div className="h-[43px] w-[45px] text-xl rounded-full flex items-center justify-center bg-white border-green-500 border-[0.18rem]">
          {stepNumber}
        </div>
        <div className="flex items-center justify-between w-full">
          <h3 className="text-2xl">{title}</h3>
          <button onClick={toggleClick}>
            {isCollapsed ? <CaretDown size={24} /> : <CaretUp size={24} />}
          </button>
        </div>
      </header>
      <aside className="border-l border-text-dark pl-8 ml-[20px]">
        <div className="bg-zinc-50 rounded-xl">{children}</div>
      </aside>
    </div>
  );
};

export default StepItem;
