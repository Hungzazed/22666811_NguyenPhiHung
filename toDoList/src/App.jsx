import { useEffect, useMemo, useReducer, useRef, useState } from 'react'

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      dispatch({ type: 'SET', payload:  storedTodos});
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const filteredTodos = useMemo(() => {
    return {
      incomplete: todos.filter(todo => !todo.completed),
      completed: todos.filter(todo => todo.completed)
    }
  }, [todos])
  
  const handleAddTodo = () => {
    if (!inputValue) return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    dispatch({ type: 'ADD', payload: newTodo })
    setInputValue('');
    inputRef.current.focus()
  }
  
  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE', payload: id });
  }
  
  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE', payload: id })
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </header>

      <section>
        <h2>Incomplete Tasks</h2>
        <ul>
          {filteredTodos.incomplete.map((todo) => (
            <div key={todo.id}>
             <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={() => handleToggleTodo(todo.id)}>
              {todo.text}
             </span>
             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          ))}
        </ul>
      </section>

      <section>
        <h2>Completed Tasks</h2>
        <ul>
          {filteredTodos.completed.map((todo) => (
            <div key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={() => handleToggleTodo(todo.id)}>
             {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
           </div>
          ))}
        </ul>
      </section>
    </div>
  );
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'TOGGLE':
      return state.map(todo => {
        return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      });
    case 'DELETE':
      return state.filter(todo => todo.id != action.payload);
    case 'SET':
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export default App
