import React from 'react';
import { shallow , mount} from 'enzyme';
import MagigBox from './views/Editor/magicbox';

    describe('indirectly test', () => {
      const wrapper = shallow(<MagigBox />);
      const instance = wrapper.instance();   

     it('create 2DArray test',()=>{
    // expect(instance.make2DArray(3)).toEqual( [ [0,0,0], [0,0,0],[0,0,0] ]);  
      expect(instance.make2DArray(5)).toEqual( [ 
        [0,0,0,0,0], 
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0] 
      ]);   


     })

     it('create inputArray test',()=>{
     
    //  expect(instance.inputArray(3,5)).toEqual( [5,6,7,8,9,10,11,12,13]);  
   
     expect(instance.inputArray(5,1)).toEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]); 
  
      })

      it('moveUpRight test',()=>{
        instance.moveUpRight(1,1,1);
        expect(instance.get2DArray()).toEqual([ 
                  [0,0,1,0,0], 
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0] 
                ]);     
        instance.moveUpRight(0,2,2);
                expect(instance.get2DArray()).toEqual([ 
                  [0,0,1,0,0], 
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,2,0] 
                ]);  
        instance.moveUpRight(4,3,3);   
                expect(instance.get2DArray()).toEqual([ 
                  [0,0,1,0,0], 
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,3],
                  [0,0,0,2,0] 
                ]);  
        instance.moveUpRight(3,4,4);   
                expect(instance.get2DArray()).toEqual([ 
                  [0,0,1,0,0], 
                  [0,0,0,0,0],
                  [4,0,0,0,0],
                  [0,0,0,0,3],
                  [0,0,0,2,0] 
                ]);
         });

        it('moveRightGround test',()=>{
          instance.make2DArray(5)
          instance.moveRightGround(0,2,2)
           expect(instance.get2DArray()).toEqual([ 
            [0,0,0,0,0],  
            [0,0,0,0,0],  
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,2,0] 
          ]);  
          
           
      
           })
            it('moveDown test',()=>{
              
            expect(instance.moveDown(1,1,4)).toEqual({
              y: 2,
              x: 1
            });  
            
             
        
             })
             it('moveUpLeftCorner test',()=>{
              instance.make2DArray(5)
              expect(instance.moveUpLeftCorner(1,4,1)).toEqual({
                y: 0,
                x: 0
              });                    
               
          
               })

             it('moveStartPos test',()=>{
             
              expect(instance.getStartPos(5)).toEqual(
                 { 
                   y: 0,
                   x: 2
                }
                ); 
                expect(instance.getStartPos(3)).toEqual(
                  { 
                    y: 0,
                    x: 1
                 }
                 );             
                     
               
          
                })

        it('IsUpRightAvailable test',()=>{
        
              expect(instance.IsUpRightAvailable(4,1)).toEqual(true);  
          
             
               
          
               });

        it('Set value test',()=>{
          instance.make2DArray(5)
          instance.setVaule(1,1,2);
          expect(instance.get2DArray()).toEqual([
                 [0,0,0,0,0],  
                 [0,2,0,0,0],  
                 [0,0,0,0,0],
                 [0,0,0,0,0],
                 [0,0,0,0,0] 


          ]);  

          });

          
          it('Fill All Boxes test',()=>{
          
         console.log(instance.fillAllBoxes(5,1)  )
        //    // Please remove  await this.timer1(500); first
        //     expect(instance.get2DArray()).toEqual([
        //           [17  ,24 ,1  ,8    ,15],  
        //           [23 ,5   ,7  ,14   ,16],  
        //           [4   ,6   ,13  ,20  ,22],
        //           [10  ,12  ,19  ,21  ,3],
        //           [11  ,18  ,25  ,2   ,9] 



        // ]);  
     
          
            });
    });
