export interface ISendChatRequest {
    name: string;
    createdBy: string;
    message: string;
    createdFor: string;
    employeeId: string;
}

export interface IChatResponse {
    _id: string;
    employeeId: string;
}