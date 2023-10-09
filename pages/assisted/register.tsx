import { NextPage } from "next";
import Link from "next/link";
import { CaretLeft } from "phosphor-react";
import { useState } from "react";
import { SpinnerAnimation } from "../../components/common/spinner";
import {
  AssistedFormList,
  FormController,
} from "../../components/assisted/assisted_form_list";
import Button from "../../components/common/button";
import { AppStatus } from "../../interfaces/communs";
import { useRouter } from "next/router";
import { ConfirmationModal } from "../../components/common/confirmation-box";

const Assisted: NextPage = (props) => {
  const router = useRouter();

  const steps = ["Identificação", "Identificação", "Escolaridade", "Saúde"].map(
    (el, i) => ({
      title: el,
      step: i,
      isCompleted: false,
    })
  );

  const [stepsController, setStep] = useState(steps);
  const [modalCancelIsVisible, toggleCancelModal] = useState(false);
  const [requestStatus, setRequestStatus] = useState(AppStatus.EMPTY);

  function handleChangeStep(value: Array<FormController>) {
    setStep(
      value.map((el, i) => ({
        title: el.title,
        step: i,
        isCompleted: el.isCompleted,
      }))
    );
  }

  function onSubmit() {
    setRequestStatus(AppStatus.LOADING);

    // Aqui fazer requisição para API
    setTimeout(() => {
      setRequestStatus(AppStatus.SUCCESS);
    }, 2000);
  }

  return (
    <div className="flex h-full">
      {modalCancelIsVisible ? (
        <ConfirmationModal
          reject={() => toggleCancelModal(false)}
          confirmation={() => router.push(`/assisted`)}
          message="Tem certeza que quer cancelar? Vai perder o que já preexeu!"
        />
      ) : (
        ""
      )}
      <aside className="w-full p-8">
        <div className="page-wrapper-sm">
          <header className="flex items-center py-2 border-b border-gray-100">
            <button className="mr-3 cursor-pointer">
              <Link href="/assisted">
                <CaretLeft size={32} weight="bold" />
              </Link>
            </button>
            <h1 className="text-4xl">Cadastro de assistido</h1>
          </header>
          <section className="h-[80vh] box-limited mt-3 px-2">
            <AssistedFormList handleChangeStep={handleChangeStep} />
          </section>

          <footer className=" py-2 flex flex-col">
            <div className="gap-1 flex">
              {stepsController.map((el, i) => (
                <div
                  key={i}
                  className={`w-1/${
                    stepsController.length
                  } bg-green-500 rounded h-[4px]
                  ${el.isCompleted ? "opacity-1" : "bg-green-900 opacity-20"}
                  `}
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <Button
                onClick={() => toggleCancelModal(true)}
                color="outlined-grey"
              >
                Cancelar
              </Button>
              <Button
                onClick={onSubmit}
                loading={requestStatus === AppStatus.LOADING}
                disabled={
                  !stepsController
                    .map((el) => el.isCompleted)
                    .reduce((a, b) => a && b)
                }
                color="green"
              >
                Confirmar e salvar cadastro
              </Button>
            </div>
          </footer>
        </div>
      </aside>
    </div>
  );
};

export default Assisted;
