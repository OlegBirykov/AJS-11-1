export default class Team {
  constructor(...persons) {
    this.members = new Set(persons);
  }

  [Symbol.iterator]() {
    let currentIndex = 0;
    const members = [...this.members];
    const lastIndex = members.length - 1;

    return {
      next() {
        if (currentIndex <= lastIndex) {
          return {
            done: false,
            value: members[currentIndex++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
