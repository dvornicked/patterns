class DocumentItem {
  public text: string
  private state: DocumentItemState

  constructor() {
    this.setState(new DraftDocumentItemState())
  }

  getState() {
    return this.state
  }

  setState(state: DocumentItemState) {
    this.state = state
    this.state.setContext(this)
  }

  publish() {
    this.state.publish()
  }

  delete() {
    this.state.delete()
  }
}

abstract class DocumentItemState {
  public name: string
  public item: DocumentItem

  public setContext(item: DocumentItem) {
    this.item = item
  }

  public abstract publish(): void
  public abstract delete(): void
}

class DraftDocumentItemState extends DocumentItemState {
  constructor() {
    super()
    this.name = 'DraftDocument'
  }
  public publish(): void {
    console.log(`Sent text: ${this.item.text}`)
    this.item.setState(new PublishDocumentItemState())
  }
  public delete(): void {
    console.log('Doc deleted')
  }
}

class PublishDocumentItemState extends DocumentItemState {
  constructor() {
    super()
    this.name = 'PublishDocument'
  }
  public publish(): void {
    console.log("Can't publish published doc")
  }
  public delete(): void {
    console.log('Returned to draft')
    this.item.setState(new DraftDocumentItemState())
  }
}

const item = new DocumentItem()
item.text = 'Post'
console.log(item.getState())
item.publish()
console.log(item.getState())
item.delete()
console.log(item.getState())
