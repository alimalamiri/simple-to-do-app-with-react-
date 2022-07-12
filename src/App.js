import TodoCard from './component/TodoCard'

function App() {


  return (
    <div>
      <h1> My Todos </h1>
      <TodoCard title="work" info="daily work that you should do it" />
      <TodoCard title="rest" info="you can rest for one houre after you arive home" />
      <TodoCard title="learn more" info="you should learn about something every day, it's a good way to improve yourself" />
      <TodoCard title="do homeworks" info="do your homework witch you learn about that or practices them" />
      <TodoCard title="sleep" info="you need to sleep well if you want have a healty body" />
    </div>
  );
}

export default App;
