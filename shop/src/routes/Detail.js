import { useEffect } from "react";
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import { Nav } from 'react-bootstrap'


let PinkBtn = styled.button`
    background: ${ props => props.bg };
    color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
`

// let NewBtn = styled.button(PinkBtn)`
//     dddddd
// `

// let Box = styled.div`
//     background : grey;
//     padding : 20px;  
// `

function Detail(props){

  let [ count, setCount ] = useState(0)
  let [ alert, setAlert ] = useState(true)
  let [fade2, setFade2] = useState('')

  useEffect(()=>{
    let a = setTimeout(()=>{setAlert(false)},2000)
    setFade2('end')
    return () => {
      clearTimeout(a);
      setFade2('')
    }
  }, [count])


  let { id } = useParams();
  let 찾은상품 = props.apparel.find(function(x){
    return x.id == id
  });
  let [탭, 탭변경] = useState(0)

  return(
        <div className="container">
          {
            alert == true
            ? <div className = "alert alert-warning">
              전품목 5% 세일
              </div>
            : null
          }
          {count}
          <button onClick={() => { setCount(count+1) }}>버튼</button>
          <Box>
          <PinkBtn bg = "blue">ThisisButton.</PinkBtn>
          </Box>
        <div className = "row">
        <div classsName = "col-md-6">
            <img src="http://reetkeem.com/web/product/big/202210/743eda0c37a93a9b2833f9b53217d311.jpg" width ="80%"/>
          </div>
          <div classsName = "col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <button className = "btn btn-danger">주문하기</button>
          </div>
        </div>

        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=> { 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{ 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=> { 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent apparel ={props.apparel} 탭 = {탭}/>

    </div>
    )
}

if ( 탭 == 0 ){
  <div>내용0</div>
} else if( 탭 ==1 ){
  <div>내용1</div>
} else if( 탭 ==2 ){
  <div>내용2</div>
}

function TabContent({탭,apparel}){

  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTImeout(()=>{ setFade('end') }, 100)
  return ()=>{
    setFade('')
  }
  }, [탭])

  return (
    <div className={'start ' + fade}>
      { [<div>apparel[0].title</div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>
  )
}

export default Detail;