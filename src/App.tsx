import ParentComponent from "./components/ParentComponent";

function App() {
  console.log("App has been re-rendered");

  return (
    <h1>
      <ParentComponent />
    </h1>
  );
}

export default App;
