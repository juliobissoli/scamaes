export enum CollaboratorRoles {
    EMPTY = -1,
    ADMIN = 0,
    SOCIAL_ASSISTENTE = 1,
    INSTRUCTOR = 2,
    INTERN = 3,

}

export interface Collaborator_I     {
    collaborator: {
        id: string;
        nome: string,
        role: CollaboratorRoles,
        avatarUrl: string
    }
}