import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "../store/userSlice";
import { changeCount } from "../store/cartSlice";

export function Cart() {

  let state = useSelector((state)=> state)
  let dispatch = useDispatch()
  console.log(state);

  return(
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
      {
        state.cart.map((element, i)=>{
          return (
              <tr key={i}>
                <td>{i}</td>
                <td>{element.name}</td>
                <td>{element.count}</td>
                <td>
                  <button onClick={()=>{
                    dispatch(changeCount(element.name))
                  }}>+</button>
                </td>
              </tr>
          )
        })
      }
      </tbody>
    </Table> 
  );
}