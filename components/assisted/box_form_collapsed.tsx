import React, { useRef, useEffect } from "react";

import { CheckCircle, X, XCircle } from "phosphor-react";
import Button from "../common/button";

interface Props {
  children: React.ReactNode;
  isCollapsed?: boolean;
  isCompleted?: boolean;
  confirmationDisabled?: boolean;
  requestChange?: () => void;
  confirmClick: () => void;
  cancelClick: () => void;
  mode?: "edite" | "onlyView";
}

const BoxFormCollapsed: React.FC<Props> = ({
  children,
  isCollapsed,
  isCompleted,
  confirmationDisabled,
  requestChange,
  confirmClick,
  cancelClick,
  mode,
}: any) => {
  return (
    <div>
      {isCollapsed ? (
        <div className="flex justify-between p-4">
          {isCompleted ? (
            <span className="flex items-center gap-2">
              <CheckCircle size={24} />
              Concluído
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <XCircle size={24} />
              Pendente
            </span>
          )}
          <Button onClick={requestChange} color="outlined-grey">
            {isCompleted ? "Alterar" : "Preexer"}
          </Button>
        </div>
      ) : (
        <div className=" rounded-[20px]">
          <section className="p-4">{children}</section>
          {mode === "onlyView" ? (
            <footer className="border-t border-zinc-100  p-4 flex justify-end">
              <Button
                onClick={confirmClick}
                color="outlined-grey"
              >
                Editar
              </Button>
            </footer>
          ) : (
            <footer className="border-t border-zinc-100  p-4 flex justify-between">
              <Button
                onClick={cancelClick}
                color="outlined-grey"
                >
                Cancelar
              </Button>
              <Button
                disabled={confirmationDisabled}
                onClick={confirmClick}
                color="green"
              >
                Confirmar
              </Button>
            </footer>
          )}
        </div>
      )}
    </div>
  );
};

export default BoxFormCollapsed;
