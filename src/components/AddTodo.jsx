import React, { useState } from 'react';
import { Plus } from 'lucide-react';

function AddTodo({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-4">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 p-3 rounded-xl bg-neu-base shadow-neu-pressed outline-none focus:ring-2 focus:ring-blue-200/50 transition-all text-neu-text placeholder-gray-400"
            />
            <button
                type="submit"
                className="p-3 rounded-full bg-neu-base text-blue-500 shadow-neu-btn active:shadow-neu-pressed active:scale-95 transition-all"
            >
                <Plus size={24} />
            </button>
        </form>
    );
}

export default AddTodo;
