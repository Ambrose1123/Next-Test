import TodoForm from "./components/TodoForm";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">To-Do List App</h1>
      <TodoForm />
    </main>
  );
}
