export class RegistrationResponse {
  status: string;
  code: number;

  constructor(status: string, code: number) {
    this.status = status;
    this.code = code;
  }

  public static isError(orderResponse: RegistrationResponse): boolean {
    return orderResponse.code > 0xf;
  }

  public static isOk(orderResponse: RegistrationResponse): boolean {
    return orderResponse.code <= 0xf;
  }
}
