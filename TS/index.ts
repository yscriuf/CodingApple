// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.

// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 

// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 

// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

 

// (예시)

// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.

// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.


function 결혼가능하냐(월소득 : number, 집 : boolean, 매력점수 : string) : string | void {
  let score :number = 0;
  집 ? score += 500 : null;
  매력점수 === "상" ? score += 100 : null;
  score += 월소득;
  if(score >= 600){
    return "결혼가능";
  }
  else{
    return;
  }
}

console.log(결혼가능하냐(700, false, '중'));
console.log(결혼가능하냐(100, false, '상'));