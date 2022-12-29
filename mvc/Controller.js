const rl = require('readline-sync');

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    const menu = await this.model.makeMenu();
    const intro = this.view.intro();
    const viewMenu = await this.view.viewMenu(menu);
    const questions = await this.model.makeQuest(viewMenu);
    const viewQuestions = await this.view.viewQuest(questions);
    const game = await this.view.game(viewQuestions);
    const outro = await this.view.outro();
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
