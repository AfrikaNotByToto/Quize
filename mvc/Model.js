const fs = require('fs').promises;

class Model {
  async chooseTopic() {
    const topic = await fs.readdir('../topics', 'utf-8');
    console.log(topic.map((el) => el.split('_')[0]));
  }

  async chooseQuestion(topic) {
    const questions = await fs.readFile(
      `../topics/${topic}_flashcard_data.txt`,
      'utf-8'
    );
    const splitQuestion = questions.split('\n\n').map((el) => el.split('\n'));
    const result = [];
    for (let i = 0; i < splitQuestion.length; i += 1) {
      result.push({
        type: 'input',
        name: `quest${i}`,
        message: splitQuestion[i][0],
        answer: splitQuestion[i][1],
      });
    }
    return result;
  }

  async correstAnswer(topic) {
    const questions = await fs.readFile(
      `../topics/${topic}_flashcard_data.txt`,
      'utf-8'
    );
    const splitQuestion = questions.split('\n\n').map((el) => el.split('\n'));
    const result = [];
    for (let i = 0; i < splitQuestion.length; i += 1) {
      result.push(splitQuestion[i][1]);
    }
    return result;
  }
  // Сначала приложение находится на стартовой странице выбора темы.
  // Подумай, какие ещё страницы будут в твоём приложении?
  // #page = 'select-topic';

  // Подумай какие данные будут нужны View, чтобы рендерить эти страницы.
  // Исходя из этих данных определись какие поля будет содержать модель.

  // chooseTopic(topic) {
  //   // Тема выбрана, сделай необходимые изменения в модели (в т.ч. измени this.page).
  //   // Чтобы сделать эти изменения подумай какая следующая страница будет отображена
  //   // и какие данные нужны View, чтобы отрендерить эту страницу
  //   // ...
  // }
}

module.exports = Model;
