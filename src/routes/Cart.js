import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export function Cart() {

  let cart = useSelector((state)=>{ return state.cart })
  console.log(cart);

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
        cart.map((element, i)=>{
          return (
              <tr>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.count}</td>
                <td>gd</td>
              </tr>
          )
        })
      }
      </tbody>
    </Table> 
  );
}