import './App.css';
import pinn from './pinn.jpg';

function App() {//JSX 문법 , 리액트는 데이터 바인딩이 용이함 (물론 vue도)
                // {변수명, 함수}
                // style은 무조건 object, {} 이용
                // style 왼쪽은 camelCase루

  let posts = '02.데이터 바인딩';

  return (
    <div className="App"> 
     <div className="black-nav">
        <div style={{ fontSize : '30px' }}>Hyuna's 티끌 모아 태산 </div>   
     </div>
     <img src={pinn} alt="pinn" style={{ padding: '10px' }} /> 
     <h4>{posts}</h4>  
    </div>
  );
}

export default App;
