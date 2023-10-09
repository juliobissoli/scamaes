import { Divide } from "phosphor-react";
import Modal from "../common/modal";
import TextField from "../common/text_field";

interface ModalFilterAssisted_I {
  close: () => void;
}

export function ModalFilterAssisted(params: ModalFilterAssisted_I) {
  return (
    <Modal title="Filtro" close={params.close}
    
    footer={
      (
        <div className="w-full flex justify-between">
          <button className="tbn-outlined-grey ">Cancelar</button>
          <button className="tbn-green">Aplicar</button>
        </div>
      )
    }
    
    >
      <div className="mt-4 w-[50vw] max-h-[60vh] box-limited">
        <h2 className="text-lg mb-2">Referente a atendimentos</h2>
        <section className="flex gap-2 ">
          <div className="border rounded-xl sm:w-full md:w-1/2 p-3">
            <header className="flex justify-between">
              <h3>Atendimentos</h3>
              <label className="flex items-center gap-1 text-sm">
                Ver todos
                <input type="checkbox" />
              </label>
            </header>
            <div className="w-full mt-2">

              <TextField placeholder="Selecione o atendimento"/>
            </div>
            {/* <input
              className="w-full mt-2"
              placeholder="Selecione o atendimento"
              type="text"
            /> */}
          </div>

          <div className="border rounded-xl sm:w-full md:w-1/2 p-3">
            <header className="flex justify-between">
              <h3>Atendimentos</h3>
              <label className="flex items-center gap-1 text-sm">
                Ver todos
                <input type="checkbox" />
              </label>
            </header>
            <div className="flex gap-2 justify-between mt-5">
              <label className="flex items-center gap-1 text-sm">
                <span className="badge-grey  text-xs truncate ">Em espera</span>
                <input type="checkbox" />
              </label>
              <label className="flex items-center gap-1 text-sm">
                <span className="badge-green text-xs truncate">Assistido</span>
                <input type="checkbox" />
              </label>
              <label className="flex items-center gap-1 text-sm">
                <span className="badge-red   text-xs truncate">Prioridade</span>
                <input type="checkbox" />
              </label>
            </div>
          </div>
        </section>

        <h2 className="text-lg mt-8 mb-2">
          Referente à condição do assistido:
        </h2>
        <section className="flex gap-2 ">
          <div className="flex border rounded-xl sm:w-full md:w-1/3 p-3 gap-2">
            <div className="md:w-1/2 flex flex-col">
            <TextField label="Idade mínima:" type='number' />
              {/* <label>Idade mínima:</label>
              <input
                className="w-full mt-2"
                placeholder="Selecione o atendimento"
                type="text"
            
              /> */}
            </div>
            <div className="md:w-1/2 flex flex-col">
                <TextField label="Idade máxima:" type='number' />
              {/* <label>Idade mínima:</label>
              <input
                className="w-full mt-2"
                placeholder="Selecione o atendimento"
                type="text"
                
              /> */}
            </div>
          </div>

          <div className="border rounded-xl sm:w-full md:w-1/3 p-3">
            <header className="flex justify-between">
              <h3>Acompanhamento médico:</h3>
            </header>
            <div className="flex gap-2 justify-between mt-5">
              <label className="flex items-center gap-1 text-sm">
                <span className="truncate ">Sim</span>
                <input type="checkbox" />
              </label>
              <label className="flex items-center gap-1 text-sm">
                <span className="truncate">Não</span>
                <input type="checkbox" />
              </label>
            </div>
          </div>

          <div className="border rounded-xl sm:w-full md:w-1/3 p-3">
            <header className="flex justify-between">
              <h3>Grau:</h3>
            </header>
            <div className="flex gap-2 justify-between mt-5">
              <label className="flex items-center gap-1 text-sm">
                <span className="truncate ">Leve</span>
                <input type="checkbox" />
              </label>
              <label className="flex items-center gap-1 text-sm">
                <span className="truncate">Moderado</span>
                <input type="checkbox" />
              </label>
              <label className="flex items-center gap-1 text-sm">
                <span className="truncate">Severo</span>
                <input type="checkbox" />
              </label>
            </div>
          </div>
        </section>

        <h2 className="text-lg mb-2 mt-8">Referente a atendimentos</h2>
        <section className="flex gap-2 ">
          <div className="border rounded-xl sm:w-full md:w-1/2 p-3">
            <header className="flex justify-between">
              <h3>Atendimentos</h3>
              <label className="flex items-center gap-1 text-sm">
                Ver todos
                <input type="checkbox" />
              </label>
            </header>
            <div className="mt-2">
              <TextField placeholder="Selecionar cidade" />
            </div>

          </div>

        </section>
      </div>
    </Modal>
  );
}
