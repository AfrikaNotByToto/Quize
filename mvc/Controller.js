class Controller {
  #model;

  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  run() {
    const model = this.#model;
    // отображаем ту страницу, на которой мы сейчас находимся
    switch (model.getPage()) {
      case "start": {
        const topic = this.#view.renderSelectTopicPage(model.getTopics());
        model.chooseTopic(topic);
        return this.run();
      }
      // выбрана тема
      // getQuestions(), stopGame() - from model
      case "choose-topic": {
        const choice = this.#view.renderSelectTopicPage(
          this.#model.chooseTopic()
        );
        if (choice) {
          this.#model.getQuestions(choice);
        } else {
          this.#model.stopGame();
        }
        return this.run();
      }
      // дан ответ на вопрос
      // renderGiveAnswer() - from view
      // gaveAnswer(), rightAnswer(), wrongAnswer - from model
      case "gave-answer": {
        const answer = this.#view.renderGiveAnswer(this.#model.gaveAnswer());
        if (answer) {
          this.#model.rightAnswer();
        } else {
          this.#model.wrongAnswer();
        }
        return this.run();
      }
      default:
        throw new Error("Wrong page");
    }
  }
}

module.exports = Controller;
