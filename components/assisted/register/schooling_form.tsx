import { useState } from "react";
import TextArea from "../../common/textarea";
import TextField from "../../common/text_field";
import ToggleButton from "../../common/toggle_button";
import BoxFormCollapsed from "../box_form_collapsed";

interface PersonalForm {
  isStudying: boolean;
  schoolName: string;
  schoolType: string;
  schoolYear: string;
  schoolResponsible: string;
  schoolPhone: string;
  shift: string;
  cometNotStudying: string;
}

interface Props {
  isCollapsed: boolean;
  mode?: 'edite' |'onlyView'; 
  toggleCollapse?: () => void;
  handleConfirm: () => void;
  cancelClick: () => void

}

const AssistedSchoolingForm: React.FC<Props> = ({
  isCollapsed,
  mode,
  toggleCollapse,
  handleConfirm,
  cancelClick
}: Props) => {
  const formNull: PersonalForm = {
    isStudying: true,
    schoolName: "",
    schoolType: "",
    schoolYear: "",
    schoolResponsible: "",
    schoolPhone: "",
    shift: "",
    cometNotStudying: "",
  };

  const [formValue, changeForm] = useState(formNull);

  const [isValid, toggleValid] = useState(false);

  function validator(
    entity:
      | "isStudying"
      | "schoolName"
      | "schoolType"
      | "schoolYear"
      | "schoolResponsible"
      | "schoolPhone"
      | "shift"
      | "cometNotStudying",
    value: string | boolean
  ) {
    const aux: any = { ...formValue };
    aux[entity] = value;
    console.log(entity, value);
    changeForm(aux);

    let valid = false;
    if(aux.isStudying){
      valid =
      aux.isStudying !== undefined &&
      aux.schoolName !== "" &&
      aux.schoolType !== "" &&
      aux.schoolYear !== "" &&
      aux.schoolResponsible !== "" &&
      aux.schoolPhone !== "" &&
      aux.shift !== "" 
    }
    else {
      valid =  aux.cometNotStudying != ''
    }

    toggleValid(valid);
  }

  return (
    // <StepItem title="Identificação" stepNumber={1} isCollapsed={isCollapsed} toggleClick={toggleCollapse}>
    <BoxFormCollapsed
      requestChange={toggleCollapse}
      isCollapsed={isCollapsed}
      isCompleted={isValid}
      confirmationDisabled={!isValid}
      confirmClick={handleConfirm}
      cancelClick={cancelClick}
      mode={mode}
    >
      <div className="flex flex-col w-1/3">
        <ToggleButton
          defaultValue="yes"
          title="Está estudando?"
          options={[
            { value: "yes", labe: "Sim" },
            { value: "no", labe: "Não" },
          ]}
          onToggle={(value) => {
            validator("isStudying", value === "yes");
          }}
        />
      </div>

      {formValue.isStudying ? (
        <div>
          <div className="flex gap-2 mt-2">
            <div className="w-3/5">
              <TextField
                disabled={mode === 'onlyView'}
                type="text"
                label="Escola"
                placeholder=""
                value={formValue.schoolName}
                onChanged={(value) => validator("schoolName", value)}
              />
            </div>
            <div className="w-2/5">
              <TextField
                disabled={mode === 'onlyView'}
                type="text"
                label="Tipo"
                placeholder=""
                value={formValue.schoolType}
                onChanged={(value) => validator("schoolType", value)}
              />
            </div>
            <div className="w-1/3">
              <TextField
                disabled={mode === 'onlyView'}
                type="text"
                label="Telefone"
                placeholder="(XX) XXXXX-XXXX"
                value={formValue.schoolPhone}
                onChanged={(value) => validator("schoolPhone", value)}
              />
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="w-1/3">
              <TextField
                disabled={mode === 'onlyView'}
                type="number"
                label="Ano letivo"
                placeholder=""
                value={formValue.schoolYear}
                onChanged={(value) => validator("schoolYear", value)}
              />
            </div>
            <div className="w-1/3">
              <TextField
                disabled={mode === 'onlyView'}
                type="text"
                label="Horário"
                placeholder=""
                value={formValue.shift}
                onChanged={(value) => validator("shift", value)}
              />
            </div>

            <div className="w-1/3">
              <TextField
                disabled={mode === 'onlyView'}
                type="text"
                label="Responsável"
                placeholder=""
                value={formValue.schoolResponsible}
                onChanged={(value) => validator("schoolResponsible", value)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-2">
          <TextArea
            value={formValue.cometNotStudying}
            rows={3}
            onChanged={(value) => validator("cometNotStudying", value)}
            label="Observação:"
            placeholder="Qual o motivo pelo qual não frequenta a escola?"
          />
        </div>
      )}
    </BoxFormCollapsed>
    // </StepItem>
  );
};

export default AssistedSchoolingForm;
