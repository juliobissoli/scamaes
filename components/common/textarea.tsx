import { MagnifyingGlass } from "phosphor-react";
import React from "react";

interface Props {
    // sulfixClick?: () => void;
    placeholder?: string;
    label?: string;
    rows?: number
    value: string;
    onChanged?: (value: string) => void;

}


const TextArea: React.FC<Props> = ({
    placeholder,
    label,
    value,
    rows=2,
    onChanged
}: any) => {
    return (
        <label className="truncate">
           <span className="w-full truncate">{label}</span> 
            <div className="text-zinc-500 border rounded-lg bg-white box-limited w-100 p-1">
                <textarea 
                rows={rows}
                className="w-full"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChanged ? ($event) => onChanged($event.target.value) : undefined}
                />
          
                {/* <button><MagnifyingGlass size={20} /></button> */}
            </div>
        </label>
    )
}

export default TextArea;