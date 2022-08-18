// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 

// 1. 이 타입은 object 자료형이어야합니다.

// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 

// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  

type NewType = { color : string, size : number, readonly position : number[] }

let newObj :NewType = {
  color : "red",
  size : 15,
  position : [1, 2, 3]
}

console.log(newObj)

newObj.color = "white";
newObj.size = 13;
newObj.position = [4, 5, 6];