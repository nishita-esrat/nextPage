import { Outlet } from "react-router-dom";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
