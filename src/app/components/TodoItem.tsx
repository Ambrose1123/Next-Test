interface TodoItemProps {
    todo: {
      activity: string;
      price: number;
      type: string;
      bookingRequired: boolean;
      accessibility: number;
    };
    onDeleteTodo: () => void;
  }
  
  export default function TodoItem({ todo, onDeleteTodo }: TodoItemProps) {
    return (
      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
        <div>
          <p>
            <strong className="text-blue-600">{todo.activity}</strong> 
            <span className="text-green-600"> (${todo.price})</span>
          </p>
          <p className="text-sm text-gray-500">
            Type: {todo.type} | Accessibility: {todo.accessibility}
          </p>
        </div>
        <button
          onClick={() => onDeleteTodo()}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    );
  }
  