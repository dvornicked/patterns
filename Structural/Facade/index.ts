class Notify {
  send(template: string, to: string) {
    console.log(`Sending ${template}: ${to}`)
  }
}

class Log {
  log(message: string) {
    console.log(message)
  }
}

class Template {
  private templates = [{ name: 'hi', template: '<h1>Hi</h1>' }]

  getByName(name: string) {
    return this.templates.find(t => t.name === name)
  }
  addTemplate(name: string, template: string) {
    this.templates.push({ name, template })
  }
}

class NotificationFacade {
  private notify: Notify
  private logger: Log
  private template: Template

  constructor() {
    this.notify = new Notify()
    this.template = new Template()
    this.logger = new Log()
  }

  send(to: string, templateName: string) {
    const data = this.template.getByName(templateName)
    if (!data) {
      this.logger.log('Template is not found')
      return
    }
    this.notify.send(data.template, to)
    this.logger.log('Template sent')
  }
}

const s = new NotificationFacade()
s.send('svc@dvornick.ru', 'hi')
