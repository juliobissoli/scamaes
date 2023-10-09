

export interface AttendanceSchedule {
  weekDay: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  initHour: number;
  endHour: number
  responsible: string;
}

export interface AttendanceClass_I{
  responsible: string;
  hour: string
  totalAssisted: number; 

}



export interface Attendance_I {
  id: string;
  name: string;
  class: Array<AttendanceClass_I>
  description: string;
  totalAssistedEffective: number;
  totalAssistedWait: number;
  totalAssistedPriority: number;
  // status?: AttendanceStatus;
  // color: "red" | "green" | "grey" | "blue" | "purple" | "orange";
  // schedule: Array<AttendanceSchedule>;
}


