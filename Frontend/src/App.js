import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layout'
import Orb from "./Components/Orb/Orb";
import { useMemo, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Incomes from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";
import Navigation from "./Components/Navigation/navigation";


function App() {
  const [active, setActive] = useState(1)


  const displayData = () =>{
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Incomes/>
      case 4:
        return <Expenses/>
      default: 
        return <Dashboard/>
    }
  }

  const orbMemo = useMemo(() => {
    return<Orb/>
  },[])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
       <MainLayout>
         <Navigation active={active} setActive={setActive} />
         <main>
          {displayData()}
         </main>
       </MainLayout>
    </AppStyled>
  );
}

const AppStyled =styled.div`
  height: 10vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 5;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 34px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width:0;
    }
  }
`;

export default App;
