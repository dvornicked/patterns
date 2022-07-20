class ADatabase {
  private db: Map<string, string> = new Map()
  save(key: string, value: string) {
    this.db.set(key, value)
  }
}

class PersistentDB {
  savePersistent(data: object) {
    console.log(data)
  }
}

class PersistentDBAdapter extends ADatabase {
  constructor(public database: PersistentDB) {
    super()
  }

  override save(key: string, value: string): void {
      this.database.savePersistent({key, value})
  }
}

function run(base: ADatabase) {
  base.save('key', 'value')
}

run(new PersistentDBAdapter(new PersistentDB))