import moment from "moment";
import { CollaboratorRoles } from "../interfaces/collaborator";
import { Logs_I } from "../interfaces/logs";


const Index: Array<Logs_I> = [
    {
        date: moment().subtract(1, 'day').format('YYYY-MM-DD HH:mm'),
        regarding: ['Atendimento', 'Assistido'],
        action: 'Alterar estado',
        message: 'Assistido Marcelo passou de em espera para atendido em Arte',
        collaborator: {
            id: 'colab01',
            nome: 'Marcelo',
            role: CollaboratorRoles.ADMIN,
            avatarUrl: ''
        }
    },
    {
        date: moment().subtract(1, 'day').format('YYYY-MM-DD HH:mm'),
        regarding: ['Atendimento', 'Assistido'],
        action: 'Alterar estado',
        message: 'Assistido Marcelo passou de em espera para atendido em Arte',
        collaborator: {
            id: 'colab01',
            nome: 'Marcelo',
            role: CollaboratorRoles.ADMIN,
            avatarUrl: ''
        }
    },
    {
        date: moment().subtract(1, 'day').format('YYYY-MM-DD HH:mm'),
        regarding: ['Atendimento', 'Assistido'],
        action: 'Alterar estado',
        message: 'Assistido Marcelo passou de em espera para atendido em Arte',
        collaborator: {
            id: 'colab01',
            nome: 'Marcelo',
            role: CollaboratorRoles.ADMIN,
            avatarUrl: ''
        }
    }
]


export default {
    index: Index,
  };
  