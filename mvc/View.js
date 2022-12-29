const chalk = require('chalk');
const rl = require('readline-sync');
const Controller = require('./Controller');
const Model = require('./Model');

class View {
  viewMenu(data) {
    let arr = data;
    let path = `./topics/${
      arr[arr.length - 1]
    }`;
    const n = rl.question(`
     Выбери тему:
     1 
     2 
     3 Какое ты мороженое?
     
     `);
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

    for (let key in obj) {
      let question = rl.question(`
       ${key}
       Твой ответ: `);
      if (question === obj[key]) {
        console.log(`\n       Точно 🤩`);
      } else {
        console.log(`\n       А вот и нет, правильно: ` + obj[key]);
      }
    }
  }

  async intro() {
    console.clear();
    rl.question(`                     Поиграем?`);
  }

  async outro() {
    setTimeout(() => {
      const model = new Model();
      const view = new View();
      const controller = new Controller(model, view);
      const again = rl.question(`      Повторим? 🔁
       Нажми 1, если согласен😉
         
       `);
      if (again === 1) {
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
