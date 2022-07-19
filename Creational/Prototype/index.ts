interface Prototype<T> {
  clone(): T
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date

  constructor(public email: string, public name: string) {
    this.createdAt = new Date()
  }

  clone(): UserHistory {
    const target = new UserHistory(this.email, this.name)
    target.createdAt = this.createdAt
    return target
  }
}

const admin = new UserHistory('mail@dvornick.ru', 'Andrey')
const user = admin.clone()
console.log(user.name)
