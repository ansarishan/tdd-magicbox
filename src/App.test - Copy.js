import React from 'react';
import { shallow , mount} from 'enzyme';
import MagigBox from './views/Editor/magicbox';

    describe('indirectly test', () => {
      const wrapper = shallow(<MagigBox />);
      const instance = wrapper.instance();   
    //   it('makeValue', () => {
        
    
    //    expect(instance.makeValue("abcd")).toBe("0");   
       
    //  });

     it('create 2DArray test',()=>{
    // expect(instance.make2DArray(3)).toEqual( [ [0,0,0], [0,0,0],[0,0,0] ]);  
      expect(instance.make2DArray(5)).toEqual( [ [0,0,0,0,0], [0,0,0 ,0,0],[0,0,0 ,0,0],[0,0,0 ,0,0],[0,0,0 ,0,0] ]);   


     })

   //  it('create inputArray test',()=>{
     
     // expect(instance.inputArray(3,5)).toEqual( [5,6,7,8,9,10,11,12,13]);  
   
   //  expect(instance.inputArray(5,10)).toEqual( [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]); 
  
    //   })

    //  it('moveUpRight test',()=>{
        
        // expect(instance.moveUpRight(2,0,555)).toEqual([ 
        //   [0,0,0,0,0], 
        //   [0,555,0,0,0],
        //   [0,0,0,0,0],
        //   [0,0,0,0,0],
        //   [0,0,0,0,0] 
        // ]);     
    
        // expect(instance.moveUpRight(1,1,555)).toEqual([ 
        //   [0,0,555,0,0], 
        //   [0,555,0,0,0],
        //   [0,0,0,0,0],
        //   [0,0,0,0,0],
        //   [0,0,0,0,0] 
        // ]);     
      
        // expect(instance.moveUpRight(2,0,555)).toEqual([ 
        //   [0,0,0], 
        //   [0,555,0],
        //   [0,0,0] 
        // ]);     
    
        // expect(instance.moveUpRight(1,1,555)).toEqual([ 
        //   [0,0,555], 
        //   [0,555,0],
        //   [0,0,0] 
        // ]);     
    
       //  });

       //  it('moveRightGround test',()=>{
        
          // expect(instance.moveRightGround(0,3,1)).toEqual([ 
          //   [0,0,0,0,0],  
          //   [0,0,0,0,0],  
          //   [0,0,0,0,0],
          //   [0,0,0,0,0],
          //   [0,0,0,0,1] 
          // ]);  
      
          // expect(instance.moveRightGround(0,1,555)).toEqual([ 
          //   [0,0,555], 
          //   [0,555,0],
          //   [0,0,555] 
          // ]);     
      
           
      
          // })
          //  it('moveRight test',()=>{
        
          //   expect(instance.moveRight(3,2,1)).toEqual([ 
          //     [0,0,0,0,0],  
          //     [0,0,0,0,0],  
          //     [0,0,0,0,0],
          //     [0,0,0,1,0],
          //     [0,0,0,0,0] 
          //   ]);  
        
        
             
        
          //    })
            //  it('moveUpLeftCorner test',()=>{
        
            //   expect(instance.moveUpLeftCorner(1,4,1)).toEqual([ 
            //     [1,0,0,0,0],  
            //     [0,0,0,0,0],  
            //     [0,0,0,0,0],
            //     [0,0,0,0,0],
            //     [0,0,0,0,0] 
            //   ]);  
          
          
               
          
            //    })

            it('moveStartPos test',()=>{
        
              expect(instance.moveStartPos(555)).toEqual([ 
                [0,0,555,0,0],  
                [0,0,0,0,0],  
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0] 

                // [0,555,0], 
                //  [0,0,0],
                // [0,0,0] 


              ]);  
          
             
               
          
               })
    });








//import Home from './views/Editor/testinput';
    //  it("Full Test", () => {
    //   const wrapper = mount(<Home />);
    //   wrapper.setState({ input2: '10000' });
    //   wrapper.find('button').simulate('click');
    //  // expect(wrapper.state('input2')).toBe('10,000');
    //  expect(wrapper.state('input2')).toBe('$10,000.00');

    //  //check negative
    //  wrapper.setState({ input2: '-10000' });
    //  wrapper.find('button').simulate('click');
    //  expect(wrapper.state('input2')).toBe('$(10,000.00)');
    //  });
    
    // describe('indirectly test', () => {
    //   it('makeValue', () => {
    //     const wrapper = shallow(<Home />);
    //     const instance = wrapper.instance();    
    
    //    expect(instance.makeValue("abcd")).toBe("0");   
       
    //  });
    // });
      
//       it('should add commas', () => {
//         const wrapper = shallow(<Home />);
//         const instance = wrapper.instance();    
    
//        expect(instance.addCommas("10000")).toBe("10,000");   
       
//      });


//       it('should remove the commas', () => {
//         const wrapper = shallow(<Home />);
//         const instance = wrapper.instance();
        
//        expect(instance.removeCommas("10,000")).toBe("10000");   
//      });

//      it('should add decimal dynamically', () => {
//       const wrapper = shallow(<Home />);
//       const instance = wrapper.instance();
      
//      expect(instance.addDecimal("10,000",2)).toBe("10,000.00");   
//    });

//    it('should replace - with ()', () => {
//     const wrapper = shallow(<Home />);
//     const instance = wrapper.instance();
    
//    expect(instance.addBracket("-10000")).toBe("(10000)");   
//  });
//  it('should add currency', () => {
//   const wrapper = shallow(<Home />);
//   const instance = wrapper.instance();
  
//  expect(instance.addCurrency("10000",'RS')).toBe("RS10000");   
// });
  //  });