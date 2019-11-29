import React from 'react';
import { object } from 'prop-types';
export default class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        counter: 0,
        input2:'',
        twoDArr:[],
        newX:0,
        newY:0,
        matrix:3,
      }
    }
    incrementCounter = (two) => {
      let counter;
      counter = two ? this.state.counter + 2 : this.state.counter + 1;
      
      this.setState({ counter })
    }
    handleOnchange=(event)=>{
      
        let input2 = event.target.value
       
        this.setState({ input2 })
    }
    removeCommas=(str)=>{
      
      return str.replace(/,/g, '');
    }
    make2DArray=(num)=>{
      var arr = this.state.twoDArr;
      
      for (var i = 0; i < num; i++) {
        arr[i] = [];
        for (var j = 0; j < num; j++) {
          arr[i][j]=0;
        }
      }
      
      this.setState({twoDArr:arr,matrix:num})
            return arr;
    }
    inputArray=(num,start)=>{
      var arr =[]
      var range = (num *num) + start;
      for (var i = start; i <range; i++) {
        arr.push(i)
        ;
        
      }
      
      
            return arr;
    }
    moveUpRight=(y,x,input)=>{
      var arr =this.state.twoDArr;
      var newX = x+1, newY=y-1;
      arr[newY][newX] = input;
      this.setState({twoDArr:arr})
            return arr;
    }
    moveRightGround=(y,x,input)=>{
       var arr =this.state.twoDArr;
       var newX =x +1, newY=this.state.matrix-1;
       arr[newY][newX] = input;

       this.setState({twoDArr:arr})
            return arr;
    }
    moveRight=(y,x,input)=>{
      var arr =this.state.twoDArr;
      var newX =x +1, newY=y;
      arr[newY][newX] = input;

      this.setState({twoDArr:arr})
           return arr;
   }
   moveUpLeftCorner=(y,x,input)=>{
    var arr =this.state.twoDArr;
    var newX =0, newY=y-1;
    arr[newY][newX] = input;

    this.setState({twoDArr:arr})
         return arr;
 }
 moveStartPos=(input)=>{
  var arr =this.state.twoDArr;
  var newX =parseInt(this.state.matrix/2), newY=0;
  arr[newY][newX] = input;

  this.setState({twoDArr:arr})
       return arr;
}
 
   
    formatInput2 =(dec,curr)=>{
        let input2;
        input2 = this.state.input2;

        input2 = this.makeValue(input2);
        input2 = this.addCommas(input2);
        input2 = this.addDecimal(input2,dec);
        
      
        
        input2 = this.addBracket(input2)
        input2=this.addCurrency(input2,curr)
        this.setState({ input2 });

    }
    makeValue=(s)=>{
      
 
  s = isNaN(s)?"0":s;  // if non-numeric than convert into 0

   s= s.replace(/,/g, '');  //1.1

return s;
    }
    addCommas=(s)=>{

      s=this.removeCommas(s)
      var d = s.indexOf('.');
      var s2 = d === -1 ? s : s.slice(0, d);

   // insert commas every 3 digits from the right
   for (var i = s2.length - 3; i > 0; i -= 3)
   {  s2 = s2.slice(0, i) + ',' + s2.slice(i);

  
    }
      return s2;

     }
 
    addDecimal=(s,dec)=>{
      var d = s.indexOf('.');
      var s2 = "";
   
      if (d !== -1)
       {
         s2 +=  s.slice(d).substr(0,1+dec); // set decimal by input parameter
 
        }
       else
       {
        s2 += (0).toFixed(dec).substr(1,2+dec) // set decimal by input parameter
       }
       return s+s2;
    }
    addBracket =(s,curr)=>{
      s= s.replace(curr,'');
      if(parseInt(s)< 0)
      s = "("+ s.replace('-','')+")"
    return s;

    }
    addCurrency =(s,curr)=>{
return curr +""+s;
    }
    render() {
      const { two } = this.props;
      return (
        <div>
          
          <input type="text" value={this.state.input2} id="input2" name="input2" onChange={(e)=>this.handleOnchange(e)} ></input>
          <button onClick={() => this.formatInput2(2,"$")} >Magic</button>
        </div>
      )
    }
  }