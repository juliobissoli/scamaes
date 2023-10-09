import { useState } from "react";

interface DropdownItems {
  label: string;
  action: () => void;
  textColor?: 'red' | 'green' | 'grey' | 'orange';
  disabled?: boolean;
}

interface Props {
  children: React.ReactNode;
  items: Array<DropdownItems>;
  buttonItem?: Element;
}


const DropdownDefault: React.FC<Props> = ({
  children,
  buttonItem,
  items,
}: Props) => {
  const [dropdownIsVisible, toggleDropdown] = useState(false);


  return (
    <div className="flex flex-col items-end">
      <button onClick={() => toggleDropdown(!dropdownIsVisible)}>
        {children}
      </button>
      {dropdownIsVisible ? (
        <div className="absolute border mt-[35px] rounded-[10px] bg-white">
          {buttonItem}
          <ul>
            {items.map((el, i) => (
              <li key={i} className="border-solid border-b last:border-b-0">
                <button
                  onClick={() => {
                    el.action();
                    toggleDropdown(!dropdownIsVisible);
                  }}
                  className={`p-4 w-full ${el.textColor ? 'text-' + el.textColor + '-500' : ""}`}
                  disabled={el.disabled}
                >
                  {el.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropdownDefault;
