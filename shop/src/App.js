//import logo from './logo.svg';
import {useState} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';
import bg from './img/Mainbg.jpeg';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';

// let PinkBtn = styled.button`
//     background: yellow;
//     color: black;
//     padding : 10px;
// `

function App() {
  
  let [apparel,setApparel] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<div>Main-Page</div>}/>
      <Route path="/detail" element={<div>Detail-Page</div>}/>
      <Route path="/about" element={<div>About-Page</div>}/>
      </Routes>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">MY FAVORITE SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/') }}>MAINPAGE</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>DETAIL</Nav.Link>
            <Nav.Link href="#pricing">WISHLIST</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">GotoMainPage</Link>
      <Link to="/detail">GotoDetailpage</Link> */}


    <Routes>
        <Route path="/" element={
          <>
          <div className = "main-bg"> </div>
          <div className="container">
               <div className = "row">
            { apparel.map((a,i)=>{
              return( <Card apparel={apparel[i]} i={i+1}> </Card>
              )
            })
          }
        </div>
      </div>
      <button onClick = {()=> { 
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((결과)=>{
          console.log(결과.data)
          console.log(apparel)
          let copy = [...apparel, ...결과.data];
          setApparel(copy);
        })

        Promise.all([axios.get('/url1'),axios.get('/url2'),axios.get('/url3')])
        .then(()=>{

        })

        fetch('https://codingapple1.github.io/shop/data2.json')

      }}>더보기</button>
      </>
    } />
     <Route path="/detail/:id" element={<Detail apparel={apparel} />} />

     <Route path="*" element={<div>404페이지입니다.</div>} />

     <Route path="/about" element={<About/>}>
      <Route path="member" element={<div>This is memeber.</div>} />
      <Route path="location" element={<div>This is location.</div>} />
    </Route>


    </Routes>


      {/* <div className = "main-bg"> </div>
      <div className="container">
        <div className = "row"> */}
          {/* <Card apparel={apparel[0]} i={1}> </Card>
          <Card2 apparel={apparel[1]} i={2}></Card2>
          <Card3 apparel={apparel[2]} i={3}></Card3> */}
          {/* {
            apparel.map((a,i)=>{
              return(
                <Card apparel={apparel[i]} i={i+1}> </Card>
              )

            })
          } */}
        {/* </div> */}
      {/* </div> */}

    </div>
  );
}

function About(){
  return(
    <div>
      <h4>CompanyInfo.</h4>
      <Outlet></Outlet>
    </div>
  )
}

// function Detail(props){
//   let {id} = useParams();

//   return(
//     <div className="container">
//       <PinkBtn>버튼</PinkBtn>
//       <div className = "row">
//         <div classsName = "col-md-6">
//         <img src="http://reetkeem.com/web/product/big/202210/743eda0c37a93a9b2833f9b53217d311.jpg" 
//         width ="80%"/>
//       </div>
//       <div classsName = "col-md-6 mt-4">
//             <h4 className = "pt-5">{props.apparel[0].title}</h4>
//             <p>{props.apparel[0].content}</p>
//             <p>{props.apparel[0].price}원</p>
//             <button className = "btn btn-danger">주문하기</button>
//       </div>
//     </div>
//    </div>
//   )
// }


function Card(props){

  return (
    <div classsName = "col-md-4">
            <img src="http://reetkeem.com/web/product/big/202210/743eda0c37a93a9b2833f9b53217d311.jpg" width ="80%"/>
            <h4>{props.apparel[0].title}</h4>
            <p>{props.apparel[0].price}</p>
          </div>
  )
}

function Card2(props){

  return (
    <div classsName = "col-md-4">
            <img src = "http://reetkeem.com/web/upload/NNEditor/20221025/raw_46.jpg" width = "80%"/>
            <h4>{props.apparel[1].title}</h4>
            <p>{props.apparel[1].price}</p>
          </div>
  )
}

function Card3(props){

  return (
    <div classsName = "col-md-4">
            <img src = "http://reetkeem.com/web/upload/NNEditor/20220204/IMG_4646202.jpg" width = "80%"/>
            <h4>{props.apparel[2].title}</h4>
            <p>{props.apparel[2].price}</p>
          </div>
  )
}

export default App;
