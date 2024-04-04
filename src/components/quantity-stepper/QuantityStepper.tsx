import React, { useState } from 'react'
import './quantity.css'

interface Props {
  style?: any,
  stepVal?: number,
  qtySelected?: number
  selectedItems?: number,
  setSelectedItems?: any,
  isQtyReq?:boolean,
  getQty?:(a:number) => void,
  maxQty?: number,
  uniqueId?: string, 
  inCart?: number | null
}

const QuantityStepper: React.FC<Props> = ({
  style,
  stepVal = 1,
  qtySelected,
  selectedItems,
  setSelectedItems,
  isQtyReq,
  getQty,
  maxQty,
  uniqueId, 
  inCart
}) => {
  const [qty, setQty] = useState(stepVal);
  const [checkQty, setCheckQty] = useState(false);
  const [_displayModal, setDisplayModal] = useState(false);

  const makeEmptyHandler = (e:any) => {
    if(e.target.value === 0) {
      setCheckQty(true);
      e.target.value = '';
    } else {
      setCheckQty(false);
      return;
    }
  }

  const qtyMinus = () => {
        if(qty > 0) {
            let qtyNum = Math.round(qty-Number(stepVal));
            setQty(qtyNum);
            if (selectedItems !== undefined && selectedItems >= 0 && qtyNum === 0 && !inCart) {
              // eslint-disable-next-line no-lone-blocks
              {setSelectedItems(selectedItems-1)}
              if (getQty !== undefined) {
                isQtyReq && getQty(qtyNum);
              }
              if(qtyNum === 0) {
                let selectQty = {
                  uniqueId: uniqueId, QTY: "delete"
               }
               console.log(selectQty);

              // dispatch<any>(getSelectedItems(selectQty))
            }
            if(selectedItems >= 0 && qtyNum===0 && !inCart) {setSelectedItems(selectedItems-1)}
            if (getQty !== undefined) {
              isQtyReq && getQty(qtyNum);
            }
            if(qtyNum === 0) {
              let selectQty = {
                uniqueId: uniqueId, QTY: "delete"
              }
              setQty(Number(selectQty))
              // dispatch<any>(getSelectedItems(selectQty))
            } else {
              let selectQty = {
                uniqueId: uniqueId, QTY: qtyNum, inCartQty : inCart
              }
              setQty(Number(selectQty));
              // dispatch<any>(getSelectedItems(selectQty))
            }
        }
      }
  }

  const qtyPlus = () => {
    if(selectedItems !== undefined &&selectedItems > 0 && qty===0 && !inCart) {setSelectedItems(selectedItems+1)}
    let qtyNum = Math.round(qty+Number(stepVal));
    if(maxQty && qtyNum > maxQty)  return;
    if(maxQty!==undefined &&  maxQty === 0) { setDisplayModal(true); return;}
    let selectQty = {
      uniqueId: uniqueId, QTY: qtyNum, inCartQty : inCart
    }
    // dispatch<any>(getSelectedItems(selectQty))
    setQty(qtyNum);
    if (getQty !== undefined) {
      isQtyReq && getQty(qtyNum)
    }
  }

  const qtyChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if(maxQty && Number(value) > maxQty)  return;
    if(maxQty!==undefined &&  maxQty === 0) { setDisplayModal(true); return;}
    let checkInputNumber = /^[0-9]+$/;
    let checkNumber = checkInputNumber.test(value);
    if(checkNumber || e.target.value === ''){
      setQty(Number(e.target.value));
    }
    if(e.target.value.length > 5 ) {
      let calc = (70/e.target.value.length)+3;
      e.target.style.fontSize = calc+'px';
    }
    else
    {
      e.target.style.fontSize = '16px';
    }
  }


  const updateChangeHandler = (value:any) => {
 
    if(
      selectedItems !== undefined && 
      selectedItems>=0 && 
      checkQty===true && 
      !inCart) {
        setSelectedItems(selectedItems+1)
      }
 
    let onChangeQty;
    let qtyNum
 
    if(maxQty !== undefined) {
      qtyNum = Number(qty);
    } else {
      if(qty !== 0 && qty !== Number(stepVal) ){
        onChangeQty = (Number(qty)/Number(stepVal));
        onChangeQty = (Math.floor(onChangeQty)*Number(stepVal));
        qtyNum = Math.round(Number(onChangeQty)+Number(stepVal));
      } else if(qty === stepVal) {
        qtyNum = Number(stepVal);
      } else {
        qtyNum = 0;
      }
    }
 
    if(qtyNum === 0) { 
      if (
        selectedItems !== undefined && 
        selectedItems>=0 && 
        !inCart) {
          setSelectedItems(selectedItems-1)
        }
      let selectQty = {
        uniqueId: uniqueId, QTY: "delete"
      }
      // dispatch<any>(getSelectedItems(selectQty))
      setQty(Number(selectQty))
      
    } else {
      let selectQty = {
        uniqueId: uniqueId, QTY: qtyNum, inCartQty : inCart
      }
      setQty(Number(selectQty))
      // dispatch<any>(getSelectedItems(selectQty))
    }
 
    setQty(Number(qtyNum));
    if (getQty !== undefined) {
      isQtyReq && getQty(qtyNum);
    }
  }

  return (
    <div className="container">
      <div className='qty'>
        <div style={style}>

          {/* Minus */}
          <div 
            data-testid="plus-button" 
            role="button" 
            id="minus" 
            className='minus'
            style={style}
            onClick={qtyMinus}>
              -
          </div>

          {/* Value */}
          <div>
            <input 
              data-testid="qty-val" 
              id="qty-val" 
              type="number" 
              className='qtyVal' 
              style={style}
              value={qty} 
              defaultValue={stepVal}
              onFocus={(e)=>{makeEmptyHandler(e)}} 
              onBlur={(e)=>{updateChangeHandler(e)}}
              onChange={(e)=>{qtyChangeHandler(e)}}  
              />
          </div>

            {/* Plus */}
          <div 
            data-testid="plus-button" 
            role="button" 
            id="plus" 
            className='plus'
            style={style}
            onClick={qtyPlus}>
              +
          </div>

        <div>
      </div>
        </div>
      </div>
    </div>
  );

}
export default QuantityStepper;

    // <div className='qty'>
    //   <div style={style}>
//       <div data-testid="minus-button" role="button" id="minus" className='minus' onClick={() => qtyMinus()} style={style}>-</div>
//       <div>
//           <input data-testid="qty-val" id="qty-val" type="number" onBlur={(e)=>{updateChangeHandler(e)}} onFocus={(e)=>{makeEmptyHandler(e)}} onChange={(e)=>{qtyChangeHandler(e)}} className='qtyVal' style={style} value={qty} />
//         </div>
//         <div data-testid="plus-button" role="button" id="plus" className='plus' onClick={qtyPlus} style={style}>+</div>
//       </div>
//     </div>
//   )
// }}