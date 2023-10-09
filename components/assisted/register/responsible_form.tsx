import { Trash } from "phosphor-react";
import { useState } from "react";
import StepItem from "../../common/step_item";
import TextField from "../../common/text_field";
import BoxFormCollapsed from "../box_form_collapsed";
import Select from "../../common/select";

interface Props {
  isCollapsed: boolean;
  mode?: "edite" | "onlyView";
  toggleCollapse?: () => void;
  handleConfirm: () => void;
  cancelClick: () => void;
}

const AssistedResponsibleForm: React.FC<Props> = ({
  isCollapsed,
  mode,
  toggleCollapse,
  handleConfirm,
  cancelClick,
}) => {
  const formNull = {
    rg: "",
    cpf: "",
    filiation: "",
    kinship: "",
    phone: "",
  };
  const [formList, changeFormList] = useState([formNull]);
  const [isValid, toggleValid] = useState(false);

  function validator(entity: string, index: number, value: string) {
    const aux: Array<any> = [...formList];
    aux[index][entity] = value;
    console.log(entity, index, value);
    changeFormList(aux);

    const valid = aux
      .map(
        (el) =>
          el.rg !== "" &&
          el.cpf !== "" &&
          el.filiation !== "" &&
          el.phone !== "" &&
          el.kinship !== ""
      )
      .reduce((a, b) => a && b);

    toggleValid(valid);
  }

  return (
    <BoxFormCollapsed
      isCollapsed={isCollapsed}
      confirmationDisabled={!isValid}
      mode={mode}
      isCompleted={isValid}
      requestChange={toggleCollapse}
      cancelClick={cancelClick}
      confirmClick={handleConfirm}
    >
      {formList.map((el, i) => (
        <div key={i} className="mb-4">
          {formList.length > 1 ? (
            <header className="flex justify-between border-b border-zinc-100 mb-2 py-1">
              <h4>{i + 1}º responsável</h4>

              <button
                onClick={() => {
                  if (formList.length > 1) {
                    const aux = [...formList];
                    aux.splice(i, 1);
                    changeFormList(aux);
                  }
                }}
              >
                <Trash size={18} />
              </button>
            </header>
          ) : (
            ""
          )}
          <div className="flex gap-2">
            <div className="w-1/4">
              <TextField
                disabled={mode === "onlyView"}
                type="text"
                value={el.rg}
                onChanged={(value) => validator("rg", i, value)}
                label="RG:"
                placeholder="XX.XXXX.XX"
              />
            </div>
            <div className="w-1/4">
              <TextField
                disabled={mode === "onlyView"}
                type="text"
                value={el.cpf}
                onChanged={(value) => validator("cpf", i, value)}
                label="CPF:"
                placeholder=""
              />
            </div>
            <div className="w-1/4">
              <Select
                disabled={mode === "onlyView"}
                options={[
                  { label: "Mãe", value: "mather" },
                  { label: "Tia", value: "aunt" },
                ]}
                title="Grau de parentesco:"
                onSelect={(value) => validator("filiation", i, value)}
              />
            </div>
            <div className="w-1/4">
              <TextField
                disabled={mode === "onlyView"}
                type="text"
                value={el.phone}
                onChanged={(value) => validator("phone", i, value)}
                label="Telefone:"
                placeholder="(XX) XXXXX-XXXX"
              />
            </div>
          </div>
          <div className="w-full mt-1">
            <TextField
              disabled={mode === "onlyView"}
              type="text"
              value={el.kinship}
              onChanged={(value) => validator("kinship", i, value)}
              label="Filiação:"
              placeholder=""
            />
          </div>
        </div>
      ))}
      {mode !== "onlyView" ? (
        <div className="w-full flex justify-center">
          <button
            className="text-sm hover:border-b"
            onClick={() => {
              changeFormList([...formList, formNull]), toggleValid(false);
            }}
          >
            +1 Responsável
          </button>
        </div>
      ) : (
        ""
      )}
    </BoxFormCollapsed>
  );
};

export default AssistedResponsibleForm;
