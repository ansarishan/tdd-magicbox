import React from 'react';
export default class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        counter: 0,
        input2:3,
        input3:5,
        twoDArr:[],
        newX:0,
        newY:0,
        matrix:3,
      }
    }
   
    handleOnchange=(event)=>{
      
        let input2 = event.target.value
       
        this.setState({ input2 })
    }
    handleOnchange1=(event)=>{
      
      let input3 = event.target.value
     
      this.setState({ input3 })
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
      var arr =[];
      var range = (num *num) + start;
      for (var i = start; i <range; i++) {
        arr.push(i)
        ;
        
      }
      
      
            return arr;
    }
    moveUpRight=(y,x,input)=>{
      var arr =this.state.twoDArr;

    if(y==0){
    return  this.moveRightGround(y,x,input);
  

    }
    if(x==this.state.matrix-1){
      return  this.moveUpLeftCorner(y,x,input);
    
  
      }
      if(!this.IsUpRightAvailable(y,x)){

        return this.moveDown(y,x,input);
      }
      var newX = x+1, newY=y-1;
      arr[newY][newX] = input;
      this.setState({twoDArr:arr})
            return {
              y:newY,
              x:newX
            };
    }
    moveRightGround=(y,x,input)=>{
       var arr =this.state.twoDArr;
       var newX =x +1, newY=this.state.matrix-1;
       if(newX>this.state.matrix-1){
        return this.moveDown(y,x,input);
        
       }
       else{
        arr[newY][newX] = input;
       }
             this.setState({twoDArr:arr})
       return {
        y:newY,
        x:newX
      };
    }
    moveDown=(y,x,input)=>{
      var arr =this.state.twoDArr;
     var newX =x, newY=y+1;
      arr[newY][newX] = input;

      this.setState({twoDArr:arr})
      return {
        y:newY,
        x:newX
      };
   }
   moveUpLeftCorner=(y,x,input)=>{
    var arr =this.state.twoDArr;
    var newX =0, newY=y-1;
    arr[newY][newX] = input;

    this.setState({twoDArr:arr})
    return {
      y:newY,
      x:newX
    };
 }
 getStartPos=(matrix)=>{
 
  var newX =parseInt(matrix/2), newY=0;
  return {
    y:newY,
    x:newX
  };
}
get2DArray=()=>{
return this.state.twoDArr;
}
IsUpRightAvailable=(y,x)=>{
  var arr =this.state.twoDArr;
  var newX = x+1, newY=y-1;

 return   arr[newY][newX]===0;

}
 timer1 = ms => new Promise(res => setTimeout(res, ms));
  fillAllBoxes= async (matrix,startNum)=>{
  this.make2DArray(matrix)
  var arr = this.inputArray(matrix,startNum);
 
  var twoDArr = this.state.twoDArr;

  var obj = this.getStartPos(matrix);
  
  twoDArr[obj.y][obj.x]=startNum;
     
  console.log(twoDArr);
  
  for(var i=1;i<arr.length;i++) {
    await this.timer1(500);
 
      obj = this.moveUpRight(obj.y,obj.x,arr[i]);
   
   

  }


}
 

setVaule=(y,x,value)=>{
var arr = this.state.twoDArr;
arr[y][x]=value;
this.setState(
  {
    twoDArr:arr
  });
}
renderTableData() {
  return this.state.twoDArr.map((student, index) => {
     const { id, name, age, email } = student //destructuring
     return (
        <tr key={index}>
           <td style={{border: '1px solid green'}} >{student}</td>
          
        </tr>
     )
  })
}
    render() {
  
      return (
        <div>
          
        Matrix (odd number):<input type="text" value={this.state.input2} id="input2" name="input2" onChange={(e)=>this.handleOnchange(e)} />
          <button onClick={() => this.fillAllBoxes(this.state.input2,1)} >Magic</button>
         
         
          <table cellPadding="20" style={{'font-weight':'bold','font-size':'24px'}} >
         
         <tbody>
            {this.state.twoDArr.map((row,idx) =>
               <tr key={idx}>
                   {row.map(col =>
                       <td key={idx}>{col}</td>
                   )}
               </tr>
            )}
         </tbody>
      </table>

        
            {/* {JSON.stringify(this.state.twoDArr)} */}
        </div>
      )
    }
  }