import { Attendance_I } from "../interfaces/attendance";

const Index: Array<Attendance_I> = [
  {
    id: "att001",
    name: "Artes",
    totalAssistedEffective: Math.random() * 30,
    totalAssistedWait: Math.random() * 30,
    totalAssistedPriority: Math.random() * 30,
    class: [
      {
        hour: "Ter/Qui 12 as 14",
        // schedule: [
        //   {day: 1, int: 7, end: 9},
        //   {day: 1, int: 7, end: 9},
        //   {day: 1, int: 7, end: 9},
        // ]
        responsible: "Marcia Santos",
        totalAssisted: Math.random() * 30,
      },
    ],
    description:
      "Turma para desenvolvimento da coordenação motora fina através de técnicas artísticas",
  },
  {
    id: "att002",
    name: "Karatê",
    totalAssistedEffective: Math.random() * 30,
    totalAssistedWait: Math.random() * 30,
    totalAssistedPriority: Math.random() * 30,
    class: [
      {
        hour: "Seg/Qua/Sex 12 as 14",
        responsible: "Marcelo Cirino",
        totalAssisted: Math.random() * 30,
      },
      {
        hour: "Ter/Qui 7 as 11",
        responsible: "Marcelo Cirino",
        totalAssisted: Math.random() * 30,
      },
    ],
    description:
      "Turma para desenvolvimento da coordenação motora fina através de técnicas artísticas",
  },
  {
    id: "att003",
    name: "Terapia ocupacional",
    totalAssistedEffective: Math.random() * 30,
    totalAssistedWait: Math.random() * 30,
    totalAssistedPriority: Math.random() * 30,
    class: [],
    description: "Turma para atividades interdiciplinares",
  },
];

export default {
  index: Index,
};
