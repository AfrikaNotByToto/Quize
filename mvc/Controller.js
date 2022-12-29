const Model = require("./Model");
const View = require("./View");

class Controller {
  #model;

  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  async run() {
    const topics = await this.model.chooseTopic();
    const theme = await this.view.showTopics(topics); //из вью
    const questions = await this.model.chooseQuestion(topic);
    const sortQA = await this.view.ShowQuestion(questions); //из вью
    const correctAnswers = await this.model.correstAnswer(topic);
    let result = 0;
    let pass = sortQA.length;
    for (let i = 0; i < sortQA.length; i++) {
      if (
        sortQA[i].toString().toLowerCase() ===
        correctAnswers[i].toString().toLowerCase()
      ) {
        result += 1;
      }
    }
    console.log(`\n\nВы ответили на ${result} вопросов из ${pass} \n\n`);
  }
}

//   run() {
//     const model = this.#model;
//     // отображаем ту страницу, на которой мы сейчас находимся
//     switch (model.getPage()) {
//       case 'start': {
//         const topic = this.#view.renderSelectTopicPage(model.getTopics());
//         model.chooseTopic(topic);
//         return this.run();
//       }
//       // выбрана тема
//       // getQuestions() - заменила на chooseQuestion из модели
//       // stopGame() - from model
//       case 'choose-topic': {
//         const choice = this.#view.renderSelectTopicPage(
//           this.#model.chooseTopic()
//         );
//         if (choice) {
//           this.#model.chooseQuestion(choice);
//         } else {
//           this.#model.stopGame();
//         }
//         return this.run();
//       }
//       // дан ответ
//       // renderGiveAnswer() - from view
//       // gaveAnswer() - from model (здесь, как я понимаю, должен отражаться первый вопрос игроку из топика)
//       // rightAnswer() - заменила на correstAnswer из модели
//       // wrongAnswer() - from model (если ответ неверный)
//       case 'gave-answer': {
//         const answer = this.#view.renderGiveAnswer(this.#model.gaveAnswer());
//         if (answer) {
//           this.#model.correstAnswer();
//         } else {
//           this.#model.wrongAnswer();
//         }
//         return this.run();
//       }
//       default:
//         throw new Error('Wrong page');
//     }
//   }
// }

module.exports = Controller;
