class UserA {
  githubToken: string
  jwtToken: string
}

interface AuthStrategy {
  auth(user: UserA): boolean
}

class Auth {
  constructor(private strategy: AuthStrategy) {}
  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy
  }

  public authUser(user: UserA): boolean {
    return this.strategy.auth(user)
  }
}

class JWTStrategy implements AuthStrategy {
  auth(user: UserA): boolean {
    if(user.jwtToken) {
      return true
    }
    return false
  }
}

class GitHubStrategy implements AuthStrategy {
  auth(user: UserA): boolean {
    if(user.githubToken) {
      return true
    }
    return false
  }
}

const userA = new UserA()
userA.jwtToken = 'token'
const authA = new Auth(new JWTStrategy())
console.log(authA.authUser(userA))
authA.setStrategy(new GitHubStrategy())
console.log(authA.authUser(userA))
