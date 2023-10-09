import Modal from "../common/modal";
import TextField from "../common/text_field";
import {AttendanceClass_I} from '../../interfaces/attendance'

interface AttendanceNewHourModal_I {
  close: () => void;
  class?: AttendanceClass_I;
}

export function AttendanceNewHourModal(params: AttendanceNewHourModal_I) {
  return (
    <Modal
      title={params.class ? "Editar horário:" : "Adicionar horário:"}
      close={params.close}
      footer={
        <div className="w-full flex justify-between">
          <button className="tbn-outlined-grey ">Cancelar</button>
          <button className="tbn-green">Salvar</button>
        </div>
      }
    >
      <section className="flex flex-col w-[35vw]">
        {/* Complete com as informações do horário desse atendimento */}
        <div className="my-2">
          <TextField
            type="text"
            label="Dia:"
          />
        </div>
        <div className="flex gap-2 my-2">
          <div className="w-1/2">
            <TextField
              type="time"
              label="Inicio:"
            />
          </div>
          <div className="w-1/2">
            <TextField
              type="time"

              label="Fim:"
            />
          </div>
        </div>
        <div className="my-2">
          <TextField
            label="Pessoa responsavel:"
          />
        </div>
      </section>
    </Modal>
  );
}
