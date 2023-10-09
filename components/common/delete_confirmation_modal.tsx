import { prependOnceListener } from "process";
import { useState } from "react";
import attendances from "../../data/attendances";
import { Attendance_I } from "../../interfaces/attendance";
import Modal from "../common/modal";
import TextField from "../common/text_field";

interface DeleteConfirmationModal {
  close: () => void;
  confirmation: () => void;
  checkString: string;
  message: string
}

export function DeleteConfirmationModal(params: DeleteConfirmationModal) {
  const [confirmeName, setConfirmName] = useState("");
  const [confirmeIsValid, setConfirmeIsValid] = useState(false);

  function validate(str: string) {
    setConfirmName(str);
    if (str === params.checkString) {
      setConfirmeIsValid(true);
    } else {
      setConfirmeIsValid(false);
    }
  }
  return (
    <Modal
      title="Excluir atendimento"
      close={params.close}
      footer={
        <div className="w-full flex justify-between">
          <button
            className="tbn-outlined-grey"
            onClick={() => {
              setConfirmName("");
              params.close();
            }}
          >
            Cancelar
          </button>
          <button 
            onClick={() => params.confirmation()}
            className="tbn-outlined-red"
            disabled={!confirmeIsValid}>
            Confirmar {confirmeIsValid}
          </button>
        </div>
      }
    >
      <section className="flex flex-col">
        <span className="text-red-500"> {params.message}</span>
        <small className="mt-8">
          Para habilitar confirmação escreva: <strong>{params.checkString}</strong> no campo abaixo 
        </small>
        <div>
          <TextField 
          type="text" value={confirmeName} onChanged={validate} />
        </div>
      </section>
    </Modal>
  );
}
