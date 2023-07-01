import Header from "./components/Header/Header"
import Login from "./components/Login/Login"
import LoginPageFooter from "./components/Login/LoginPageFooter"
import NavigationBar from "./components/NavigationBar/NavigationBar"

function App() {


  return (
    <>
      <Header></Header>
      <NavigationBar></NavigationBar>
     <div className="bg-[#f1f2f4] py-10">
     <Login></Login>
     </div>
      <LoginPageFooter></LoginPageFooter>
    </>
  )
}

export default App
