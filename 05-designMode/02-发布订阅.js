class EventBus {
  constructor() {
    this.events = {};
  }

  /**
   * 订阅消息
   */
  listen(name, func) {
    if (!this.events[name]) this.events[name] = [];
    this.events[name].push(func);
  }

  /**
   * 发布消息
   */
  emit(name, ...params) {
    if (!this.events[name]) return;
    this.events[name].forEach((fn) => {
      fn(...params);
    });
  }

  /**
   * 清楚消息
   */
  remove(name, func) {
    this.events[name].splice(
      this.events[name]?.findIndex((event) => event === func),
      1
    );
  }
}

const eventbus = new EventBus();

function log() {
  console.log(...arguments);
}

eventbus.listen('click', log);

eventbus.remove('click', log);

eventbus.listen('click', function () {
  console.log(...arguments, 4);
});

eventbus.emit('click', 1, 2, 3);
