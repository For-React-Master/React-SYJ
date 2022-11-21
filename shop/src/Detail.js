import { useEffect } from "react";
import {useParams} from "react-router-dom";
import styled from 'styled-components';


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


  useEffect(()=>{
    let a = setTimeout(()=>{setAlert(false)},2000)
    return () => {
      clearTimeout(a);
    }
  }, [count])


  let { id } = useParams();
  let 찾은상품 = props.apparel.find(function(x){
    return x.id == id
  });

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
    </div>
    )
}
export default Detail;