let n=+prompt('nhập số cần xét: ')
let x=true
if(n<2){x=false} else{
    for(let i=2;i<=Math.sqrt(n-1);i++){
     if(n%i==0){x=false;
        break} 
  }
}
if (x==true){document.write(n+" là số nguyên tố")}
else{
    document.write(n+" không là số nguyên tố")
} 