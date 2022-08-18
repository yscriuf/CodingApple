// (숙제2) 다음과 같은 함수를 만들어보십시오.

// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 

// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고

// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 

// 철수쌤같은 선생님 object 자료를 집어넣으면 

// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.

// 그리고 타입지정도 엄격하게 해보도록 합시다. 


// (동작예시)

// 만들함수( { subject : 'math' } )  //이 경우 'math'를 return
// 만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
// 만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 
// Q. 이 자료가 array type 인지 어떻게 검사하냐고요? 구글에 물어보시면 됩니다.

function 만들함수(obj : { subject : string[] | string }) :string {
  if(Array.isArray(obj.subject)){
    return obj.subject[obj.subject.length - 1];
  }
  else{
    return obj.subject;
  }
}

console.log(만들함수( { subject : 'math' } ))  //이 경우 'math'를 return
console.log(만들함수( { subject : ['science', 'art', 'korean'] } )) //이 경우 'korean'을 return
console.log(만들함수( { hello : 'hi' } ))  //이 경우 타입에러 나면 됩니다 