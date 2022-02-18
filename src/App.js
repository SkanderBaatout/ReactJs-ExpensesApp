import Expenses  from "./components/Expenses";
function App() {
  const expenses= [
    {
      id:"e1",
      titre:"Education",
      prix:5500,
      date:new Date(2022,2,14),
    },
    {
      id:"e2",
      titre:"Camping",
      prix:55,
      date:new Date(2022,3,26),
    },
    {
      id:"e3",
      titre:"Voyage",
      prix:2500,
      date:new Date(2023,8,4),
    },
    {
      id:"e4",
      titre:"Phone",
      prix:2200,
      date:new Date(2024,11,16),
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
