import React, {useState, useEffect} from 'react'
import './App.css';
import { Container } from 'reactstrap';

function App() {


  // Nomor 1
  function reverseString(str){
    var newStr = '';
    var containerStr;
    for (let i = str.length-1; i >= 0; i--){
      if (str[i]==str[5]){
        containerStr = str[5];
      } else {
        newStr += str[i];
      }
      if (i == 0){
        newStr += containerStr;
      }
    }
    return newStr;
  }
  // console.log("======= Nomor 1 =======");
  // console.log(reverseString("NEGIE1"));
  const reverseStrings = reverseString("NEGIE1");
  // console.log("======= Nomor 1 =======");

  // Nomor 2
  const sentence = "Saya sangat senang mengerjakan soal algoritma"
  const longest = (sentence) => {
    const splitSentence = sentence.split(" ");
    const sortSentence = splitSentence.sort(
      (sentenceA, sentenceB) => {
        return sentenceB.length-sentenceA.length;
      }
    );
    return sortSentence[0];
  }
  // console.log("======= Nomor 2 =======");
  // console.log(longest(sentence));
  const longests = longest(sentence);
  // console.log("======= Nomor 2 =======");

  // Nomor 3
  const [sum, setSum] = useState(null);
  function compareStr(){
    var INPUT = ["xc", "dz", "bbb", "dz"];
    var QUERY = ["bbb", "ac", "dz"];
    let tempArray = []
    for (let i = 0; i <QUERY.length; i++ ){
      let tempSum = 0;
      for (let j = 0; j <INPUT.length; j++ ){
        if (INPUT[j] == QUERY[i]){
          tempSum = tempSum + 1;
        }
      }
      console.log("======= Nomor 3 =======");
      console.log("OUTPUT = [", tempSum, ", ]");
      console.log("======= Nomor 3 =======");
      tempArray.push(tempSum);
    }
    setSum(tempArray);
    // return sum;
  }
  // const compareStrs = 
  // compareStr();

  const [sumA, setSumA] = useState(null);
  const [sumB, setSumB] = useState(null);
  const [finalSum, setFinalSum] = useState(null);

  // Nomor 4
  function diagonalSubtraction(mtx){
    let tempSumA= 0;
    let tempSumB = 0;
    for (let i = 0; i <mtx.length; i++){
      tempSumA += mtx[i][i];
      tempSumB += Matrix[i][mtx.length - 1 - i];
    }
    const tempFinalSum = Math.abs(tempSumB - tempSumA);
    setSumA(tempSumA);
    setSumB(tempSumB);
    setFinalSum(tempFinalSum);
    // console.log("======= Nomor 4 =======");
    // console.log("diagonal pertama =", tempSumA );
    // console.log("diagonal kedua =", tempSumB );
    // console.log("maka hasilnya adalah ", tempSumA, " - ", tempSumB ,"=", tempFinalSum);
    // console.log("======= Nomor 4 =======");
  }
  const Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
  // const diagonalSubtractions = 
  // diagonalSubtraction(Matrix);
  useEffect(()=> {
    compareStr();
    diagonalSubtraction(Matrix)
  },[])

  return (
    <Container>
      <h2>Nomor 1</h2>
      <p>{reverseStrings}</p>
      <h2>Nomor 2</h2>
      <p>{longests}</p>
      <h2>Nomor 3</h2>
      <p>OUTPUT = [ {sum ? sum[0]:0}, {sum ? sum[1]:0}, {sum ? sum[2]:0} ]</p>
      <h2>Nomor 4</h2>
      <p>diagonal pertama = {sumA}</p>
      <p>diagonal kedua = {sumB}</p>
      <p>maka hasilnya adalah {sumA} - {sumB} = {finalSum}</p>
    </Container>
  );
}

export default App;
