import { NextPage } from "next";
import { useRouter } from "next/router";
import { ArrowsOutSimple, FunnelSimple, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { AssistedListItem } from "../../components/assisted/assisted_list_item";
import { ModalFilterAssisted } from "../../components/assisted/modal-filter";
import TextField from "../../components/common/text_field";
import { Pagination } from "../../components/common/pagination";
import AssistedData from "../../data/assisted";
import AttendanceData from '../../data/attendances'
import Logs from '../../data/logs'
import { Assisted_I } from "../../interfaces/assisted";
import { AttendanceClass_I, Attendance_I } from "../../interfaces/attendance";
import { Logs_I } from "../../interfaces/logs";
import moment from "moment";
import { LastLogBox } from "../../components/logs/last_logs_box";






const Assisted: NextPage = (props) => {
  const router = useRouter();
  const [modalIsVisible, toggleModalIsVisible] = useState(false);

  // Simular get na API
  const AssistedList: Array<Assisted_I> = [
    ...AssistedData.index,
    ...AssistedData.index,
    ...AssistedData.index,
    ...AssistedData.index,
    ...AssistedData.index,
  ].splice(0, 12);

 
  const attendancesToday: Array<any> = []
  AttendanceData.index.forEach((el: any) => {
    const todayWeek = moment().format('ddd').toUpperCase()

    el.class.forEach((c: AttendanceClass_I) => {  
      if(c.hour.toUpperCase().includes(todayWeek)){
        attendancesToday.push({...c,  name: el.name})
      }
    });
    
  })
  const lastLogs: Array<Logs_I> = Logs.index

  return (
    <div className="flex md:flex-row sm:flex-col w-full h-full ">
      {
        modalIsVisible
          ? (<ModalFilterAssisted close={() => toggleModalIsVisible(!modalIsVisible)} />)
          : ("")
      }



      <div className="w-full md:w-3/4 p-8 h-[100vh] box-limited">
        <div className="page-wrapper-sm">
          <header className="flex justify-between	 items-end border-b border-gray-100 py-2 mb-8">
            <h1 className="text-2xl">Assistidos</h1>
            <div className="flex items-center ">
              <TextField type='text' placeholder="Buscar" sulfix={<MagnifyingGlass size={20} />} />
              <button
                onClick={(event) => {
                  event.preventDefault();
                  toggleModalIsVisible(!modalIsVisible)
                }}
                className="mx-2 tbn-outlined-grey"
              >
                <div className="flex items-center">
                  <span className="mr-2">Filtrar</span>
                  <FunnelSimple size={20} />
                </div>
              </button>
              <button
                className="tbn-green"
                onClick={() => router.push(`assisted/register`)}
              >
                Cadastrar
              </button>
            </div>
          </header>

          <section className="mt-4 h-[75vh] box-limited">
            {AssistedList.map((assisted, idx) => (
              <AssistedListItem
                key={idx}
                clicked={() => router.push(`assisted/${assisted.id}`)}
                name={assisted.name}
                age={assisted.age}
                attendances={assisted.attendances}
              />
            ))}
          </section>
          <footer className="mt-2 flex justify-between">
            <button className="tbn-outlined-grey">Exportar tabela</button>
            <Pagination />
          </footer>
        </div>
      </div>
      <div className="w-1/4 bg-gray-50 border px-5 py-8 flex flex-col">
        <button className="tbn-green w-full">Falar com colaborador</button>
        <div className="highlight-box mt-4">
          <div className="px-2 pt-1">
            <h5 className=" text-xl mb-2">Atendimentos de hoje</h5>
            {
              attendancesToday.map((el, i) => (

                <div 
                key={i}
                className="flex flex-col py-2 border-t border-zinc-100">
                  <header className="flex justify-between items-end">
                    <span>{el.name}</span>
                    <small className="text-sm">{el.hour}</small>
                  </header>
                  <small className="text-gray-400 text-sm mt-1">{el.responsible}</small>
                </div>
              ))
            }
          </div>
        </div>

        <LastLogBox title="Movimentações" />
        {/* <div className="highlight-box mt-4">
          <div className="px-2 pt-1">
            <header className="flex justify-between">
              <h5 className=" text-xl mb-2"> Movimentações </h5>
              <button>
              <ArrowsOutSimple size={24} />
              </button>
            </header>
            {
              lastLogs.map((el, i) => (

                <div key={i} className="flex flex-col py-2 border-t border-zinc-100">
                  <header className="flex justify-between items-end">
                    <span>{el.action}</span>
                    <small className="text-sm">{moment(el.date).fromNow()}</small>
                  </header>
                  <small className="text-gray-400 text-sm mt-1">{el.message}</small>
                </div>
              ))
            }
          </div>
        </div> */}
        
      </div>
    </div>
  );
};

export default Assisted;
