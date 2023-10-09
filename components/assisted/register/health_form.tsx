import { useState } from "react";
import Select from "../../common/select";
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
  mode?: "edite" | "onlyView";
  toggleCollapse?: () => void;
  handleConfirm: () => void;
  cancelClick: () => void;
}

const AssistedHealthForm: React.FC<Props> = ({
  isCollapsed,
  mode,
  toggleCollapse,
  handleConfirm,
  cancelClick,
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

    const valid =
      aux.name !== "" &&
      aux.sex !== "" &&
      aux.birthDate !== "" &&
      aux.level !== "";

    toggleValid(valid);
  }

  return (
    <BoxFormCollapsed
      requestChange={toggleCollapse}
      isCollapsed={isCollapsed}
      isCompleted={isValid}
      confirmationDisabled={!isValid}
      confirmClick={handleConfirm}
      cancelClick={cancelClick}
      mode={mode}
    >
      <div className="flex gap-2">
        <div className="flex flex-col w-1/3">
          <ToggleButton
            disabled={mode === "onlyView"}
            defaultValue="yes"
            title="Acompanhamento medico?"
            options={[
              { value: "yes", labe: "Sim" },
              { value: "no", labe: "Não" },
            ]}
            onToggle={(value) => {
              validator("isStudying", value === "yes");
            }}
          />
        </div>

        <div className="flex flex-col w-1/3">
          <ToggleButton
            disabled={mode === "onlyView"}
            defaultValue="yes"
            title="Possui laudo?"
            options={[
              { value: "yes", labe: "Sim" },
              { value: "no", labe: "Não" },
            ]}
            onToggle={(value) => {
              validator("isStudying", value === "yes");
            }}
          />
        </div>
      </div>

      <div className="w-1/3">
        <TextField
          disabled={mode === "onlyView"}
          type="text"
          label="Medicamentos"
          placeholder=""
          value={formValue.schoolName}
          onChanged={(value) => validator("schoolName", value)}
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        <div className="flex flex-col w-3/5">
          <ToggleButton
            disabled={mode === "onlyView"}
            defaultValue="dependent"
            title="Não da p ler no form deles"
            options={[
              { value: "dependent", labe: "Dependente" },
              { value: "regular", labe: "Regular" },
              { value: "independente", labe: "Independente" },
            ]}
            onToggle={(value) => {
              validator("isStudying", value === "yes");
            }}
          />
        </div>
        <div className="flex flex-col w-2/5 ">
          <ToggleButton
            disabled={mode === "onlyView"}
            defaultValue="speaks"
            title="Verbal"
            options={[
              { value: "speaks", labe: "Fala" },
              { value: "not_speaks", labe: "Não fala" },
            ]}
            onToggle={(value) => {
              validator("isStudying", value === "yes");
            }}
          />
        </div>
        <div className="flex flex-col w-2/5">
          <ToggleButton
            disabled={mode === "onlyView"}
            defaultValue="yes"
            title="Interação social"
            options={[
              { value: "scarce", labe: "Escassa" },
              { value: "regular", labe: "Regular" },
              { value: "intense", labe: "Intensa" },
            ]}
            onToggle={(value) => {
              validator("isStudying", value === "yes");
            }}
          />
        </div>
      </div>
    </BoxFormCollapsed>
  );
};

export default AssistedHealthForm;
