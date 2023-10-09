import { useState } from "react";
import StepItem from "../../common/step_item";
import TextField from "../../common/text_field";
import ToggleButton from "../../common/toggle_button";
import BoxFormCollapsed from "../box_form_collapsed";

interface PersonalForm {
  name: string;
  sex: string;
  birthDate: string;
  level: string;
}

interface Props {
  isCollapsed: boolean;
  mode?: "edite" | "onlyView";
  toggleCollapse?: () => void;
  handleConfirm: () => void;
  cancelClick: () => void;
}

const AssistedPersonalForm: React.FC<Props> = ({
  isCollapsed,
  mode,
  toggleCollapse,
  handleConfirm,
  cancelClick,
}: Props) => {
  const formNull: PersonalForm = {
    name: "",
    sex: "",
    birthDate: "",
    level: "",
  };

  const [formValue, changeForm] = useState(formNull);

  const [isValid, toggleValid] = useState(false);

  function validator(
    entity: "name" | "sex" | "birthDate" | "level",
    value: string
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
      <div className="flex gap-2">
        <div className="w-3/5">
          <TextField
            disabled={mode === "onlyView"}
            type="text"
            label="Nome"
            placeholder=""
            value={formValue.name}
            onChanged={(value) => validator("name", value)}
          />
        </div>
        <div className="w-2/5">
          <TextField
            disabled={mode === "onlyView"}
            type="date"
            label="Data de nascimento"
            placeholder=""
            value={formValue.birthDate}
            onChanged={(value) => validator("birthDate", value)}
          />
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="w-1/2">
          <ToggleButton
            disabled={mode === "onlyView"}
            defaultValue="boy"
            title="Sexo"
            options={[
              { value: "boy", labe: "Masculino" },
              { value: "girl", labe: "Feminino" },
            ]}
            onToggle={(value: string) => {
              validator("sex", value);
            }}
          />
          {/* <TextField
            disabled={mode === 'onlyView'}
            type="text"
            label="Sexo"
            placeholder=""
            value={formValue.sex}
            onChanged={(value) => validator("sex", value)}
          /> */}
        </div>
        <div className="w-1/2">
          <TextField
            disabled={mode === "onlyView"}
            type="text"
            label="Grau"
            placeholder=""
            value={formValue.level}
            onChanged={(value) => validator("level", value)}
          />
        </div>
      </div>
    </BoxFormCollapsed>
    // </StepItem>
  );
};

export default AssistedPersonalForm;
