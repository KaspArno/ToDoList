export interface Todo {
  description: string,
  done: boolean,
  created: Date,
  updated: Date,
  due: Date | null
}
