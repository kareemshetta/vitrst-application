import "./App.css";
// import ErrorCom from "./components/Error";
import LoginForm from "./components/form/LoginForm";

function App() {
  return (
    <>
      <div>
        {/* <ErrorCom message="test"></ErrorCom> */}
        <LoginForm onSubmit={() => {}}></LoginForm>
      </div>
    </>
  );
}

export default App;
