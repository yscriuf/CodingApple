// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 

// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 

type Info = { name : string, phone : number, email : string }
type AgeInfo = Info & { age : number }

let obj :AgeInfo = {
  name : "kim",
  phone : 123,
  email : 'abc@naver.com',
  age : 16
}