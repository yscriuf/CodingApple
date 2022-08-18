function print(name? : string) : void{
  if(typeof(name) === 'undefined'){
    console.log('이름 없습니다.');
  }
  else{
    console.log(name);
  }
}

print('김지현');
print();