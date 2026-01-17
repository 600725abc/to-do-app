import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
    if (todos.length === 0) {
        return <div className="text-center text-gray-400 mt-8">No tasks yet. Add one above!</div>;
    }

    return (
        <div className="mt-6">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;
