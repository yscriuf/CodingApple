import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, changeName } from "../store";

export function Cart() {

  let state = useSelector((state)=> state)
  let dispatch = useDispatch()
  console.log(state);

  return(
    <Table>
      <button onClick={()=>{
        dispatch(changeName());
      }}>
        {state.user.age}
      </button>

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
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.count}</td>
                <td>
                  <button onClick={()=>{
                    dispatch(changeName())
                  }}>+</button>
                </td>
              </tr>
          )
        })
      }
      </tbody>
      {state.user.name}
    </Table> 
  );
}