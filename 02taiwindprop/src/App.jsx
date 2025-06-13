import Card from './component/card.jsx';
function App() {
  
  return (
  <div>
   <h1 className=" font-bold">helo</h1>
  <a className="text-blue-500 hover:underline" href="https://www.google.com/">Link</a>
  <Card username="neel" btntext="Click Me"/>
  <Card username="hitesh" />
  </div>
  );
}

export default App;