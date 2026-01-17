import React from 'react';
import { Trash2 } from 'lucide-react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <div className={`flex items-center justify-between p-4 mb-4 rounded-xl transition-all duration-300 ${todo.completed ? 'shadow-neu-pressed text-gray-400' : 'shadow-neu-flat bg-neu-base'}`}>
            <div className="flex items-center gap-3">
                <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all ${todo.completed ? 'bg-blue-400 border-transparent shadow-inner' : 'shadow-neu-btn'}`}
                >
                    {todo.completed && <span className="text-white text-xs">✓</span>}
                </button>
                <span className={`text-lg ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
            </div>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="p-2 rounded-full text-red-400 shadow-neu-btn hover:text-red-600 active:shadow-neu-pressed transition-all"
            >
                <Trash2 size={18} />
            </button>
        </div>
    );
}

export default TodoItem;
