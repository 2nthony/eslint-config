const username = 'John'
const persons = ['John', 'Doe']

main()

function _Comp() {
  if (username) {
    return username
  }
  else {
    username.slice(0)
  }
  return (
    <div className="prose">
      {persons.map((person, i) => (
        <div key={i}>{person}</div>
      ))}
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
