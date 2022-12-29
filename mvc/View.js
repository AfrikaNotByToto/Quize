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
