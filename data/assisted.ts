import moment from "moment";
import {
  Assisted_I,
  Assisted2AttendanceStatus_I,
  Assisted2Attendance_I,
} from "../interfaces/assisted";
import Attendance from "./attendances";

function getAttendanceRandom(statuses: Array<Assisted2AttendanceStatus_I>) {
  return Attendance.index
    .map((el: any, i: number) => ({
      ...el,
      status: statuses[i],
      updatedAt: moment()
        .subtract(Math.random() * 1 - 10 + i, "day")
        .toISOString(),
    }))
    .splice(0, statuses.length);
  // const aux = Math.random() * 3;
  // const list = [
  //   Assisted2AttendanceStatus_I.EFFECTIVE,
  //   Assisted2AttendanceStatus_I.PRIORITY,
  //   Assisted2AttendanceStatus_I.WAIT,
  // ];

  // return Attendance.index.map((el, i) => ({ ...el, status[i] })).slice(0, status.length);
}

const Index: Array<Assisted_I> = [
  {
    id: "as00001",
    name: "Mariana Fernandes",
    age: 12,
    avatar_url:
      "https://images.unsplash.com/photo-1601057956918-acb8d894b1cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    responsible_family: [{ name: "Marta Ferreitra", phone: "27 22323-2323" }],
    attendances: getAttendanceRandom([Assisted2AttendanceStatus_I.WAIT]),
  },
  {
    id: "as00002",
    name: "Margarida Guimaraes Fernandes",
    age: 12,
    avatar_url:
      "https://images.unsplash.com/photo-1611890293555-2cb0075ecd3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    responsible_family: [{ name: "Marta Ferreitra", phone: "27 22323-2323" }],
    attendances: getAttendanceRandom([
      Assisted2AttendanceStatus_I.EFFECTIVE,
      Assisted2AttendanceStatus_I.EFFECTIVE,
    ]),
  },
  {
    id: "as00003",
    name: "João Felipe",
    age: 12,
    avatar_url:
      "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    responsible_family: [{ name: "Marta Ferreitra", phone: "27 22323-2323" }],
    attendances: getAttendanceRandom([
      Assisted2AttendanceStatus_I.EFFECTIVE,
      Assisted2AttendanceStatus_I.PRIORITY,
    ]),
  },
  {
    id: "as00004",
    name: "Ameria Fanthwer dos Santos",
    age: 6,
    avatar_url:
      "https://images.unsplash.com/photo-1593194777536-e155e6d100b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1416&q=80",
    responsible_family: [{ name: "Matheus Fanthwer", phone: "27 22323-2323" }],
    attendances: getAttendanceRandom([
      Assisted2AttendanceStatus_I.EFFECTIVE,
      Assisted2AttendanceStatus_I.PRIORITY,
      Assisted2AttendanceStatus_I.WAIT,
    ]),
  },
  // {
  //   id: "as00002",
  //   name: "Algusto dos Anjos",
  //   age: 10,
  //   avatar_url:
  //     "https://images.unsplash.com/photo-1601057956918-acb8d894b1cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //   responsible_family: [{ name: "Marta Ferreitra", phone: "27 22323-2323" }],
  //   attendances: [
  //     {
  //       id: "at0002",
  //       name: "Karatê",
  //       status: AttendanceStatus.EFFECTIVE,
  //       color: "orange",
  //     },
  //     {
  //       id: "at0001",
  //       name: "Artes",
  //       status: AttendanceStatus.WAIT,
  //       color: "red",
  //     },
  //   ],
  // },
  // {
  //   id: "as00003",
  //   name: "Amarildo dos Santos",
  //   age: 10,
  //   avatar_url:
  //     "https://images.unsplash.com/photo-1601057956918-acb8d894b1cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //   responsible_family: [{ name: "Marta Ferreitra", phone: "27 22323-2323" }],
  //   attendances: [
  //     {
  //       id: "at0003",
  //       name: "Psicólogo",
  //       status: AttendanceStatus.EFFECTIVE,
  //       color: "orange",
  //     },
  //     {
  //       id: "at0002",
  //       name: "Karatê",
  //       status: AttendanceStatus.EFFECTIVE,
  //       color: "green",
  //     },
  //     {
  //       id: "at0001",
  //       name: "Artes",
  //       status: AttendanceStatus.EFFECTIVE,
  //       color: "red",
  //     },
  //   ],
  // },
  // {
  //   id: "as00004",
  //   name: "Marina Silva",
  //   age: 20,
  //   avatar_url: "",
  //   responsible_family: [{ name: "Marta Ferreitra", phone: "27 22323-2323" }],
  //   attendances: [
  //     {
  //       id: "at0003",
  //       name: "Psicólogo",
  //       status: AttendanceStatus.WAIT,
  //       color: "orange",
  //     },
  //     {
  //       id: "at0005",
  //       name: "Linguas",
  //       status: AttendanceStatus.WAIT,
  //       color: "grey",
  //     },
  //   ],
  // },
];

export default {
  index: Index,
};
