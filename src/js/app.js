/* eslint no-console: 0 */
import Person from './Person';
import Team from './Team';

const person1 = new Person('Эльдар', 'Daemon', 100, 3, 50, 20);
const person2 = new Person('Паша', 'Zombie', 120, 6, 70, 100);
const person3 = new Person('Лёня', 'Bowman', 300, 2, 50, 40);

const team = new Team(person1, person3, person2);

for (const person of team) {
  console.log(person);
}
