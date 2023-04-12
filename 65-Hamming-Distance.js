const hammingDistance=(p1,p2)=>{
 let hamm =0
for (let i=0 ; i< p1.length; i++){
  if(p1[i] != p2[i]) hamm +=1
}
return hamm;
}
console.log(hammingDistance('karolin','kathrin'))
console.log(hammingDistance('11011','10100'))