import { useState } from "react";
import StepItem from "../common/step_item";
import AssistedHealthForm from "./register/health_form";
import AssistedPersonalForm from "./register/personal_form";
import AssistedResponsibleForm from "./register/responsible_form";
import AssistedSchoolingForm from "./register/schooling_form";

export interface FormController {
  isCompleted: boolean;
  isExpanded: boolean;
  title: string;
  step: number;
  component: React.FC;
}

interface Props {
  mode?: "onlyForm" | "step";
  modeForms?: "edite" | "onlyView";
  handleChangeStep: (value: Array<FormController>) => void;
}

export const AssistedFormList: React.FC<Props> = ({
  handleChangeStep,
  mode,
  modeForms
}) => {
  const formsStart: Array<FormController> = [
    { title: "Identificação", component: AssistedPersonalForm },
    {
      title: "Identificação dos responsáveis",
      component: AssistedResponsibleForm,
    },
    { title: "Escolaridade", component: AssistedSchoolingForm },
    { title: "Saúde", component: AssistedHealthForm },
  ].map((el, i) => ({
    isCompleted: false,
    isExpanded: i === 0, // o primeiro form fica aberto por padrão ao entrar na tela
    title: el.title,
    step: i,
    component: el.component,
  }));

  const [formsController, setForm] = useState(formsStart);

  function toggleForm(step: number, entity: "isCompleted" | "isExpanded") {
    const copy: Array<FormController> = [...formsController];
    copy[step][entity] = !copy[step][entity];

    setForm(copy);
    handleChangeStep(formsController);
  }

  return (
    <div>
      {formsStart.map((el, i) => {
        const ComponentForm = el.component;
        return (
          <div key={i} className="my-4 ">
            {mode === "onlyForm" ? (
              <div>
                <h4 className="text-xl">{formsController[i].title}</h4>
                <div className="border rounded-[20px]">
                  <ComponentForm
                    isCollapsed={false}
                    mode={modeForms}
                    toggleCollapse={() => toggleForm(i, "isExpanded")}
                    cancelClick={() => {
                      console.log("cancela");
                    }}
                    handleConfirm={() => {
                      toggleForm(i, "isExpanded");
                      if (!formsController[i].isCompleted) {
                        toggleForm(i, "isCompleted");
                      }
                    }}
                  />
                </div>
              </div>
            ) : (
              <StepItem
                title={formsController[i].title}
                stepNumber={formsController[i].step + 1}
                isCollapsed={!formsController[i].isExpanded}
                mode={modeForms}
                toggleClick={() => toggleForm(i, "isExpanded")}
              >
                <ComponentForm
                  isCollapsed={!formsController[i].isExpanded}
                  toggleCollapse={() => toggleForm(i, "isExpanded")}
                  cancelClick={() => {
                    console.log("cancela");
                  }}
                  handleConfirm={() => {
                    toggleForm(i, "isExpanded");
                    if (!formsController[i].isCompleted) {
                      toggleForm(i, "isCompleted");
                    }
                  }}
                />
              </StepItem>
            )}
          </div>
        );
      })}
    </div>
  );
};
