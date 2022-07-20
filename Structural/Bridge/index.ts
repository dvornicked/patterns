interface IProvider {
  sendMessage(message: string): void
  connect(): void
  disconnect(): void
}

class TelegramProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message)
  }
  connect(): void {
    console.log('Connected to Telegram')
  }
  disconnect(): void {
    console.log('Disconnected from Telegram')
  }
}

class WhatsUpProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message)
  }
  connect(): void {
    console.log('Connected to WhatsUp')
  }
  disconnect(): void {
    console.log('Disconnected from WhatsUp')
  }
}

class NotificationSender {
  constructor(private provider: IProvider) {}

  send(message: string) {
    this.provider.connect()
    this.provider.sendMessage(message)
    this.provider.disconnect()
  }
}

class DelayNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider)
  }
  async sendDelayed(message: string) {
    await new Promise<void>(resolve =>
      setTimeout(() => {
        this.send(message)
        resolve()
      }, 1000)
    )
  }
}

const senderTG = new NotificationSender(new TelegramProvider())
senderTG.send('Message')

const senderWU = new NotificationSender(new TelegramProvider())
senderWU.send('Message')

