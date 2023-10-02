const username = 'John'

main()

function _Comp() {
  return (
    <div className="prose">
      <div>component</div>
    </div>
  )
}

function main() {
  if (username) {
    return 1
  }
  else {
    return 2
  }
}

class Person {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

const person = new Person(username)
person.getName()
