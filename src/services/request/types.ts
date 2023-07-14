export interface UserRequest {
  certificados?: Array<Certificate>;
  id: number;
  data: Date;
  requisicaoStatus: string;
  observacao?: string;
}

export interface Certificate {
  id: number;
  horas: number;
  titulo: string;
  data: Date;
  statusCertificado: string;
}
