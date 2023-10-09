import { DotsThreeVertical, PencilSimple, Plus, Trash } from "phosphor-react";
import { Attendance_I, AttendanceClass_I} from "../../interfaces/attendance";
import DropdownDefault from "../common/dropdown";

export interface AttendanceCard_I {
  attendance: Attendance_I;
  // clicked: () => void;
  handleEditeAttendance: (attendance: Attendance_I) => void;
  handleDeleteAttendance: (attendance: Attendance_I) => void;
  handleEditeHour: (hour: AttendanceClass_I) => void;
  handleDeleteHour: (hour: AttendanceClass_I) => void;
  handleAddHour: () => void;
}

export function AttendanceCard(props: AttendanceCard_I) {
  return (
    <div className="flex flex-col p-4 border border-gray-100 rounded-[20px] ">
      <header className="flex justify-between">
        <h3 className="text-xl font-bold">{props.attendance.name}</h3>
        <DropdownDefault
          items={[
            {
              label: "Editar atendimento",
              action: () => {
                console.log("teste");
                props.handleEditeAttendance(props.attendance);
              },
            },
            {
              label: "Excluír atendimento",
              textColor: "red",
              action: () => {
                console.log("excluir");
                props.handleDeleteAttendance(props.attendance);
              },
            },
          ]}
        >
          <DotsThreeVertical size={24} weight="bold" />
        </DropdownDefault>
      </header>

      <span className="my-6 font-light">{props.attendance.description}</span>

      <section>
        {props.attendance.class.length > 0 ? (
          <section>
            <header className="flex justify-between">
              <h5 className="text-lg">Horário</h5>
              <button onClick={props.handleAddHour}>
                <Plus size={20} />
              </button>
            </header>
            <div className="flex flex-col text-sm mt-5">
              <div className="flex">
                <strong className="w-1/4 text-center">Horário</strong>
                <strong className="w-1/4 text-center">Responsável</strong>
                <strong className="w-1/4 text-center">Assistidos</strong>
                <strong className="w-1/4 text-center">Ações</strong>
              </div>

              {props.attendance.class.map((el, i) => (
                <div
                  key={i}
                  className="w-full flex border-b border-gray-100 py-2"
                >
                  <span className="w-1/4 text-center">{el.hour}</span>
                  <span className="w-1/4 text-center">{el.responsible}</span>
                  <span className="w-1/4 text-center">21</span>
                  <span className="w-1/4 text-center flex items-center justify-center gap-2">
                    <button className="text-red-500"
                    onClick={() => props.handleDeleteHour(el)}>
                      <Trash size={20} />
                    </button>
                    <button onClick={() => props.handleEditeHour(el)}>
                      <PencilSimple size={20} />
                    </button>
                  </span>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <button className="border w-full rounded-[20px] bg-zinc-50 p-8  border-dashed	border-2"
          onClick={props.handleAddHour}
          >
            Cadastrar horário
          </button>
        )}
      </section>
    </div>
  );
}
