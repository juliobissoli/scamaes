import Modal from "../common/modal";
import TextArea from "../common/textarea";
import TextField from "../common/text_field";

interface AttendanceFormModal_I {
  close: () => void;
  mode: string;
  name: string;
  description: string;
  changeName: (value: string) => void;
  changeDescription: (value: string) => void;
}

export function AttendanceFormModal(params: AttendanceFormModal_I) {
  return (
    <Modal
      title={
        params.mode === "create"
          ? "Cadastrar atendimento"
          : "Cadastrar atendimento"
      }
      close={params.close}
      footer={
        <div className="w-full flex justify-between">
          <button className="tbn-outlined-grey ">Cancelar</button>
          <button className="tbn-green">Salvar</button>
        </div>
      }
    >
      <section className="flex flex-col w-[35vw]">
        <div className="my-2">
          <TextField
          type='text'
            value={params.name}
            onChanged={params.changeName}
            label="Nome:"
          />
        </div>
        <div className="my-2">
          <TextArea
            value={params.description}
            rows={3}
            onChanged={params.changeDescription}
            label="Descrição:"
          />
        </div>
      </section>
    </Modal>
  );
}
