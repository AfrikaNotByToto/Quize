const fs = require("fs");
const readline = require("readline-promise").default;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class View {
  constructor() {}

  async showTopics(arr) {
    const topic = await rl.questionAsync(
      `\nВыберите категорию!\n\n${arr[0]}\n${arr[1]}\n${arr[2]}\n\n`
    );
    return topic;
  }

  async getQuestion(question) {
    const points = [];
    for (let i = 0; i < arr.length - 1; i += 2) {
      const answer = await int.questionAsync(`\n${question[i]}\n\n`);
      if (answer === arr[i + 1]) {
        points.push(10);
      } else points.push(0);
    }
    return points;
  }
}

// const readlineSync = require('readline-sync');

// class View {
//   renderSelectTopicPage(themes) {
//     // нам пришёл список тем, нужно вывести их на экран
//     // здесь твой код...

//     // затем даём пользователю возможность выбрать тему
//     const topic = readlineSync.question('Введите тему: ');

//     // и возвращаем контроллеру выбранную тему
//     return topic;
//   }
// }

module.exports = View;
