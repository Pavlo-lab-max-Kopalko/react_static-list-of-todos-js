// eslint-disable-next-line import/no-cycle
import { todos } from '../../App';

import { TodoInfo } from '../TodoInfo';

export const TodoList = () => {
  if (todos.length === 0) {
    return null;
  }

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo todo={todo} />
      ))}
    </section>
  );
};
