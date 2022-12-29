const { Select } = require("enquirer");
const { Input } = require("enquirer");
const { prompt } = require("enquirer");

class View {
  showTopics(topics) {
    // const topics = await this.model.getTopics()

    const promptNew = new Select({
      name: "input",
      message: "choose theme",
      choices: topics,
    });

    return promptNew.run();
  }

  async ShowQuestion(questions) {
    const question = questions;

    const answers = await prompt(question);
    return Object.values(answers);
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
