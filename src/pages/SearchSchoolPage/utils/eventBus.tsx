// 创建一个简单的事件总线
interface EventBus {
  listeners: { [key: string]: Array<(data: any) => void> }
  subscribe(event: string, callback: (data: any) => void): () => void
  emit(event: string, data: any): void
  unsubscribe(event: string, callback: (data: any) => void): void
}

export const eventBus: EventBus = {
  listeners: {},
  subscribe(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(callback)

    // 返回一个取消订阅的函数
    return () => {
      this.unsubscribe(event, callback)
    }
  },
  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => {
        callback(data)
      })
    }
  },
  unsubscribe(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(
        cb => cb !== callback,
      )
    }
  },
}
