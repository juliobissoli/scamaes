import moment from "moment";
import { DotsThreeVertical } from "phosphor-react";
import {
  Assisted2Attendance_I,
  getStylesAttendanceStatus,
  Assisted2AttendanceStatus_I
} from "../../interfaces/assisted";
import DropdownDefault from "../common/dropdown";

export interface AssistedCardAttendanceItem_I {
  attendance: Assisted2Attendance_I;
  handleChangeStatus: (value: Assisted2AttendanceStatus_I) => void;
  handleRemoveAttendance: (attendance_id: string) => void
}

export function AssistedCardAttendanceItem(
  props: AssistedCardAttendanceItem_I
) {

  const attendanceStatus = [0, 1, 2].map(el => ({
    shortLabel: getStylesAttendanceStatus(el).shortLabel,
    status: el

  }))

  return (
    <div className="highlight-box">
      <header className="flex justify-between items-center  p-2">
       <h4 className="text-lg font-bold"> {props.attendance.name}</h4>
        <DropdownDefault
          items={[
            ...attendanceStatus.map(el => ({
              label: `Mudar status para: ${el.shortLabel}`,
              disabled: el.status === props.attendance.status,
              action: () => {
                props.handleChangeStatus(el.status)
                // props.handleEditeAttendance(props.attendance);
              },
            })),
            {
              label: "Remover do atendimento",
              textColor: "red",
              action: () => {
                props.handleRemoveAttendance(props.attendance.id);
              },
            },
          ]}
        >
          <DotsThreeVertical size={24} weight="bold" />
        </DropdownDefault>
      </header>
      <div className="p-4 flex flex-col items-center">
        <span
          className={`mb-2  badge-${
            getStylesAttendanceStatus(props.attendance.status).color
          }`}
        >
          {getStylesAttendanceStatus(props.attendance.status).label}
        </span>
        <span>Desde {moment(props.attendance.updatedAt).format('DD/MM/YYYY')}</span>
      </div>
    </div>
  );
}
