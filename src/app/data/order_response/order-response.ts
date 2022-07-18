export class OrderResponse {
  status: string;
  code: number;

  constructor(status: string, code: number) {
    this.status = status;
    this.code = code;
  }

  public static isError(orderResponse: OrderResponse): boolean {
    return orderResponse.code > 0xf;
  }

  public static isOk(orderResponse: OrderResponse): boolean {
    return orderResponse.code <= 0xf;
  }
}
