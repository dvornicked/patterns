interface IPaymentAPI {
  getPaymentDetail(id: number): IPaymentDetail | undefined
}

interface IPaymentDetail {
  id: number
  sum: number
}

class PaymentAPI implements IPaymentAPI {
  private data: IPaymentDetail[] = [{ id: 1, sum: 1000 }]
  getPaymentDetail(id: number) {
    return this.data.find(d => d.id === id)
  }
}

class PaymentAccessProxy implements IPaymentAPI {
  constructor(private api: PaymentAPI, private userId: number) {}
  getPaymentDetail(id: number): IPaymentDetail | undefined {
    if (this.userId === 1) return this.api.getPaymentDetail(id)
    console.log('Error 403')
  }
}

const proxyA = new PaymentAccessProxy(new PaymentAPI(), 1)
console.log(proxyA.getPaymentDetail(1))

const proxyB = new PaymentAccessProxy(new PaymentAPI(), 2)
console.log(proxyB.getPaymentDetail(1))