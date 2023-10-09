import { Assisted2AttendanceStatus_I, getStylesAttendanceStatus, Assisted2Attendance_I } from "../../interfaces/assisted";
// import { Attendance_I } from "../../interfaces/attendance";

export interface AssistedListItem_I {
  name: string;
  age: number;
  attendances: Array<Assisted2Attendance_I>;
  clicked: () => void;
}

export function AssistedListItem(props: AssistedListItem_I) {
  return (
    <div
      onClick={props.clicked}
      className="flex items-end px-2 py-4 justify-between  border-b cursor-pointer border-gray-100 hover:bg-zinc-100 hover:rounded-lg"
    >
      <span className="text-lg">
        {props.name}
        <small className=" mx-1 text-sm text-gray-500">
          ({props.age} anos)
        </small>
      </span>
      <div>
        <span className="text-sm mx-1">
          Atendimentos{" "}
          {
          props.attendances.length > 0
          ? props.attendances.map((el) => (el.status === Assisted2AttendanceStatus_I.EFFECTIVE ? 1 : 0)).reduce((a: any, b: any) => a + b)
          : 0
        }
          /{props.attendances.length}
        </span>
        {props.attendances.map((el) => (
          <span key={el.id} className={`ml-1  badge-${getStylesAttendanceStatus(el.status).color}`}>
            {el.name}
          </span>
        ))}
      </div>
    </div>
  );
}
