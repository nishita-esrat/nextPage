import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import Loading from "./component/loading";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-136px)]">
        {navigation.state === "loading" ?  <Loading/>: <Outlet />}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
