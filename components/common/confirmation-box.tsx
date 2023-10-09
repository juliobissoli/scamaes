import { X } from "phosphor-react";
import Modal from "../common/modal";

interface ConfirmationModal {
  reject: () => void;
  confirmation: () => void;
  message: string;
}

export function ConfirmationModal(params: ConfirmationModal) {
  return (
    <Modal close={params.reject} noHeader={true}>
      <header className="flex justify-end">
        <button className="btn btn-lg" onClick={close}>
          <X size={24} weight="bold" />
        </button>
      </header>
      <section className="my-5">
        <span> {params.message}</span>
      </section>
      <footer className="w-full flex justify-end mt-4 gap-4">
        <button className="tbn-outlined-grey" onClick={params.reject}>
          Cancelar
        </button>
        <button onClick={() => params.confirmation()} className="tbn-green">
          Confirmar
        </button>
      </footer>
    </Modal>
  );
}
