const chalk = require('chalk');
const { arch } = require('os');
const rl = require('readline-sync');
const Controller = require('./Controller');
const Model = require('./Model');

class View {
  viewMenu(data) {
    let arr = data;
    let path = `./topics/${
      arr[Math.floor(Math.random() * (arr.length - 1 - 0) + 0)]
    }`;
    const n = rl.question(`
     1 Тест на знание себя бесплатно и без регистрации.
     2 Кто же ты такой?
     3 Хочешь узнать про себя больше?

     `);
    console.clear();
    if (n === 1) path = `./topics/${arr[n]}`;
    if (n === 2) path = `./topics/${arr[n]}`;
    if (n === 3) path = `./topics/${arr[n]}`;
    return path;
  }

  viewQuest(data) {
    const arr = data.split('\n').filter((el) => el !== '');
    const obj = {};
    for (let i = 0; i < arr.length; i += 2) {
      obj[arr[i]] = arr[i + 1];
    }

    return obj;
  }

  async game(viewQuestions) {
    let obj = viewQuestions;
    let score = 0;
    for (let key in obj) {
      let question = rl.question(chalk.bold.blue(`
       ${key}
       Твой ответ: `));
      if (question === obj[key]) {
        score += 1;
        console.log(`\n       Точно 🤩`);
      } else {
        console.log(chalk.red('\n       А вот и нет: ') + obj[key]);
      }
    }
    console.log(`Твой результат: ${chalk.cyan(score)}`);
  }

  async intro() {
    console.clear();
    const name = rl.question(chalk.magenta('                    Как тебя зовут?\n'));
    console.clear();
    rl.question(`                     Поиграем?, ${chalk.magenta(name)}`);
  }

  async outro() {
    setTimeout(() => {
      const model = new Model();
      const view = new View();
      const controller = new Controller(model, view);
      const again = rl.question(chalk.blue('      Повторим? 🔁'));
      if (again === 'да' || again === 'Да') {
        console.clear();
        controller.run();
      }
    }, 2000);
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
