import { Attendance_I } from "./attendance"

export interface Assisted_I {
  id: string;
  name: string;
  age: number;
  avatar_url: string;
  responsible_family: Array<ResponsibleFamily>;
  attendances: Array<Assisted2Attendance_I>;
}
interface ResponsibleFamily {
  name: string;
  phone: string;
}

export enum Assisted2AttendanceStatus_I {
  EMPYT = -1,
  WAIT = 0,
  EFFECTIVE = 1,
  PRIORITY = 2,
}

export interface Assisted2Attendance_I extends  Attendance_I {
  status: Assisted2AttendanceStatus_I;
  name: string;
  updatedAt: Date;

  // description?: string;
  // class?: 
}


export function getStylesAttendanceStatus(status: Assisted2AttendanceStatus_I){
  if(status === Assisted2AttendanceStatus_I.WAIT) return {color: 'grey',       shortLabel:'espera', label: 'em espera de vaga'}
  if(status === Assisted2AttendanceStatus_I.EFFECTIVE) return {color: 'green', shortLabel:'efetivo', label: 'vaga efetivada'}
  if(status === Assisted2AttendanceStatus_I.PRIORITY) return {color: 'red',    shortLabel:'prioritário', label: 'em espera prioritária'}
  else return {color: 'orange',    shortLabel:'indefinido', label: 'estado não definido'}
}