import { Collaborator_I } from "./collaborator";

export interface Logs_I {
    
        date: string;
        regarding: Array<string>;
        action: string;
        message: string
        collaborator: Collaborator_I
    
}