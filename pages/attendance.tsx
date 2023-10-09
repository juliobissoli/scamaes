import { NextPage } from "next";
import { useState } from "react";
import { AttendanceCard } from "../components/attendance/attendance_card";
import { AttendanceFormModal } from "../components/attendance/attendance_form_modal";
import { AttendanceNewHourModal } from "../components/attendance/attendance_form_hour_modal";
import { LastLogBox } from "../components/logs/last_logs_box";
import AttendanceData from "../data/attendances";
import { AttendanceClass_I, Attendance_I } from "../interfaces/attendance";
import { DeleteConfirmationModal } from "../components/common/delete_confirmation_modal";

const Attendance: NextPage = (props) => {
  const [attendanceList, setAttendanceList] = useState(AttendanceData.index);
  const [formAttendanceIsVisible, setFormAttendanceIsVisible] = useState(false);
  const [formHourModalIsVisible, toggleFormHourModalIsVisible] =
    useState(false);
  const [deleteModalIsVisible, toggleDeleteModal] = useState(false);
  const [deleteItemSelected, setDeleteItemSelected] = useState({
    message: "",
    item_id: "",
    checkString: "",
    type: "",
  });
  const hourNull: AttendanceClass_I = {
    hour: "",
    responsible: "",
  };
  const [hourSelected, setHourSelected] = useState(hourNull);
  const [attendanceForm, setFormInfo] = useState({
    mode: "create",
    name: "",
    description: "",
  });

  function changeFormParams(
    mode?: "create" | "edite",
    name?: string,
    description?: string
  ) {
    setFormInfo({
      mode: mode || attendanceForm.mode,
      name: name || attendanceForm.name,
      description: description || attendanceForm.description,
    });
  }

  function toggleForm() {
    changeFormParams("create", " ", " ");
    setFormAttendanceIsVisible(!formAttendanceIsVisible);
    console.log(formAttendanceIsVisible);
  }

  function handleEditeAttendance(attendance: Attendance_I) {
    changeFormParams("edite", attendance.name, attendance.description);
    setFormAttendanceIsVisible(true);
  }

  function handleToggleFormHour(hour?: AttendanceClass_I) {
    if (hour) {
      setHourSelected(hour);
    } else setHourSelected(hourNull);
    toggleFormHourModalIsVisible(!formHourModalIsVisible);
  }

  function handleDeleteItem() {
    if (deleteItemSelected.type === "attendance") {
      setAttendanceList(
        attendanceList.filter((el) => el.id !== deleteItemSelected.item_id)
      );
    }
    else  if (deleteItemSelected.type === "hour"){
      console.log('Tratativa para excluir hora')
    }
    toggleDeleteModal(false);
  }

  return (
    <section>
      {formAttendanceIsVisible ? (
        <AttendanceFormModal
          name={attendanceForm.name}
          description={attendanceForm.description}
          close={toggleForm}
          mode={attendanceForm.mode}
          changeDescription={(value) =>
            changeFormParams(undefined, undefined, value)
          }
          changeName={(value) => changeFormParams(undefined, value, undefined)}
        />
      ) : (
        ""
      )}

      {deleteModalIsVisible ? (
        <DeleteConfirmationModal
          close={() => toggleDeleteModal(false)}
          message={deleteItemSelected.message}
          checkString={deleteItemSelected.checkString}
          confirmation={handleDeleteItem}
        />
      ) : (
        ""
      )}

      {formHourModalIsVisible ? (
        <AttendanceNewHourModal
          close={() => toggleFormHourModalIsVisible(!formHourModalIsVisible)}
          class={hourSelected}
        />
      ) : (
        ""
      )}

      <div className="flex md:flex-row sm:flex-col w-full h-full ">
        <div className="w-full md:w-3/4 p-8 h-[100vh] box-limited">
          <div className="page-wrapper-sm">
            <header className="flex justify-between	 items-end border-b border-gray-100 py-2 mb-8">
              <h1 className="text-2xl">Atendimentos</h1>
              <button className="tbn-green" onClick={toggleForm}>
                Cadastrar
              </button>
            </header>

            <section className="mt-4 h-[80vh] box-limited">
              {attendanceList.map((el, i) => (
                <div key={i} className="mb-2">
                  <AttendanceCard
                    attendance={el}
                    handleAddHour={() => handleToggleFormHour()}
                    handleEditeAttendance={handleEditeAttendance}
                    handleDeleteAttendance={
                      (attendance: Attendance_I) => {
                      setDeleteItemSelected({
                        message: "Deseja realmente excluir esse atendimento?",
                        item_id: attendance.id,
                        checkString: attendance.name,
                        type: "attendance",
                      });
                      toggleDeleteModal(true);
                    }}
                    handleEditeHour={(hour) => handleToggleFormHour(hour)}
                    handleDeleteHour={(hour) => {
                      setDeleteItemSelected({
                        message: "Deseja realmente excluir esse horário?",
                        item_id: hour.hour,
                        checkString: hour.hour,
                        type: "hour",
                      });
                      toggleDeleteModal(true);
                    }
                    
                    }
                  />
                </div>
              ))}
            </section>
          </div>
        </div>
        <div className="w-1/4 bg-gray-50 border px-5 py-8 flex flex-col">
          <LastLogBox title="Histórico" />
        </div>
      </div>
    </section>
  );
};

export default Attendance;
