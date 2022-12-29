const fs = require('fs').promises;

class Model {
constructor() {

}

async chooseTopic () {
  const topic = await fs.readdir('./topics', 'utf-8');
  return topic.map((el) => el.split('_')[0]);
}

chooseTopic()

async chooseQuestion (topic) {
const question = await fs.readFile(`./topics/${topic}_flashcard_data.txt`, 'utf-8');
let splitQestion = question.split('\n\n').map((el) => el.split('\n'));

let result = [];
for(let i = 0; i < splitQestion.length; i += 1) {
  result.push(splitQestion[i][1])
}
return result
}


  // Сначала приложение находится на стартовой странице выбора темы.
  // Подумай, какие ещё страницы будут в твоём приложении?
  // #page = 'select-topic';

  // Подумай какие данные будут нужны View, чтобы рендерить эти страницы.
  // Исходя из этих данных определись какие поля будет содержать модель.

  getPage() {
    return this.#page;
  }

  // chooseTopic(topic) {
  //   // Тема выбрана, сделай необходимые изменения в модели (в т.ч. измени this.page).
  //   // Чтобы сделать эти изменения подумай какая следующая страница будет отображена
  //   // и какие данные нужны View, чтобы отрендерить эту страницу
  //   // ...
  // }
}

module.exports = Model;
