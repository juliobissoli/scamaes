import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretLeft, DotsThreeVertical, Phone } from "phosphor-react";
import {
  AssistedFormList,
  FormController,
} from "../../components/assisted/assisted_form_list";
import { AssistedCardAttendanceItem } from "../../components/assisted/attendance_card_item";
import Avatar from "../../components/common/avatar";
import Button from "../../components/common/button";

import AssistedData from "../../data/assisted";
import { Assisted2AttendanceStatus_I } from "../../interfaces/assisted";

const Assisted: NextPage = (props) => {
  const router = useRouter();

  const AssistedSelect = AssistedData.index.find(
    (el) => el.id === router.query.assisted_id
  );

  function handleAddImage() {
    console.log("Adicionar imagem");
  }
  function handleAddAttendance() {
    console.log("Adicionar atendimento");
  }

  function handleChangeStatusAttendance(status: Assisted2AttendanceStatus_I) {
    console.log("tem q mudar o status => ", status);
  }

  function handleRemoveAttendance(attendance_id: string) {
    console.log("Tem que excluir => ", attendance_id);
  }

  function handleChangeForm(value: Array<FormController>) {
    console.log("Mudar form");
  }
  return (
    <div className="flex h-full box-limited">
      <aside className="w-3/4 p-8 h-full box-limited">
        <div className="page-wrapper-sm">
          <header className="flex items-center py-2">
            <button className="mr-3 cursor-pointer">
              <Link href="/assisted">
                <CaretLeft size={32} weight="bold" />
              </Link>
            </button>
            <h1 className="text-4xl">{AssistedSelect?.name || "--"} </h1>
          </header>

          {AssistedSelect ? (
            <section className="mt-4">
              <div className="flex">
                <aside className="flex flex-col items-center">
                  <div className="h-[218px] w-[218px] rounded-full bg-gray-400 mb-4">
                    <Avatar url={AssistedSelect.avatar_url} />
                  </div>
                  <div>
                    <Button color="outlined-grey" onClick={handleAddImage}>
                      Alterar imagem
                    </Button>
                  </div>
                </aside>

                <aside className="ml-12">
                  <div className="border rounded-[20px] w-full p-4 flex justify-between">
                    <div className="flex flex-col items-center">
                      <span>Idade</span>
                      <h3 className="text-lg text-green-500">
                        {AssistedSelect.age}
                      </h3>
                    </div>
                    <div className="flex flex-col items-center">
                      <span>Grau</span>
                      <span className="badge-green mt-1">Leve</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span>Status</span>
                      <span className="badge-green mt-1">Ativo</span>
                    </div>
                  </div>
                  <legend className="mt-8">
                    <span className="text-green-500"> Obs.:</span>
                    Observação medica. (não pode tomar remédio x)
                  </legend>
                </aside>
              </div>
              <header className="flex justify-between mt-8">
                <h3 className="text-2xl">Atendimentos:</h3>
                <Button color="green" onClick={handleAddAttendance}>
                  Adicionar
                </Button>
              </header>

              <section className="flex  flex-wrap mt-2">
                {AssistedSelect.attendances.map((el, i) => (
                  <div className="w-1/2 p-1" key={i}>
                    <AssistedCardAttendanceItem
                      attendance={el}
                      handleChangeStatus={handleChangeStatusAttendance}
                      handleRemoveAttendance={handleRemoveAttendance}
                    />
                  </div>
                ))}
                <div className=" mt-8  border-t border-zinc-100 pt-4">
                  {/* <h2 className="mb-4 text-2xl border-b border-zinc-50">Informações cadastrais:</h2> */}
                <AssistedFormList
                  mode="onlyForm"
                  modeForms='onlyView'
                  handleChangeStep={handleChangeForm}
                  />
                  </div>
              </section>
            </section>
          ) : (
            <h1 className="text-3xl text-center">
              Assistido não encontrado :({" "}
            </h1>
          )}
        </div>
      </aside>

      {/* ---------- Area lateral ------------ */}
      <aside className="w-1/4 bg-gray-50 border px-5 py-8 flex flex-col">
        <button className="tbn-green w-full">
          Solicitar ação ao administrador
        </button>
        <div className="bg-white rounded-xl border p-4 mt-4 flex flex-col">
          <span>
            {" "}
            Maria Ferreira <span className="text-green-500">(Mãe)</span>
          </span>
          <button className="flex mt-2">
            <Phone size={20} weight="regular" />
            27 99923-2343
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Assisted;
