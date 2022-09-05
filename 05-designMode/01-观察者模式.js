/**
 * 观察者
 */
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(news) {
    console.log(`${this.name} received ${news}`);
  }
}

/**
 * 发布者
 */
class Publisher {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  removeObserver(observer) {
    this.observerList.splice(
      this.observerList.findIndex((obs) => obs.name === observer.name),
      1
    );
  }

  update(news) {
    this.observerList.forEach((observer) => observer.update(news));
  }
}

const observer1 = new Observer('test1');

const observer2 = new Observer('test2');


const publisher = new Publisher();

publisher.addObserver(observer1);

publisher.addObserver(observer2);

publisher.update('news');