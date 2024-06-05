import React, { useEffect, useState } from 'react'
import Slider from 'react-input-slider';
import './Main/Main.css'
import getMergeSortAnimation from '../../sortingAlgos/MergeSort';
import getQuickSortAnimation from '../../sortingAlgos/QuickSort';
import Navbar from '../header/Navbar'


// Change this value for the speed of the animation.
const ANIMATION_SPEED = 3;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animation.
const SECONDARY_COLOR = 'red';

const randomIntFromInterval = (min, max) => {
    // min and max inculded
    return Math.floor(Math.random() * (max-min+1) + min);
};

const Main = () => {

    const [array, setArray] = useState([]);
    const [arraySize, setArraySize] = useState(30);

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < arraySize; i++) {
            newArray.push(randomIntFromInterval(1, 60));
        }
        setArray(newArray);
    };

    useEffect(() => {
        resetArray();
    }, [arraySize]);



    // const MergeSort = () =>{
    //     const animation = getMergeSortAnimation(array.slice());
    //     for (let i = 0; i < animation.length; i++) {
    //         const arrayBars = document.getElementsByClassName('array-bar');
    //         const isColorChange = i % 3 !== 2;
    //         if (isColorChange) {
    //             const [barOneIdx, barTwoIdx] = animation[i];
    //             const barOneStyle = arrayBars[barOneIdx].style;
    //             const barTwoStyle = arrayBars[barTwoIdx].style;
    //             const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
    //             setTimeout(() => {
    //             barOneStyle.backgroundColor = color;
    //             barTwoStyle.backgroundColor = color;
    //             }, i * ANIMATION_SPEED_MS);
    //         } else {
    //             setTimeout(() => {
    //             const [barOneIdx, newHeight] = animation[i];
    //             const barOneStyle = arrayBars[barOneIdx].style;
    //             barOneStyle.height = `${newHeight}px`;
    //             }, i * ANIMATION_SPEED_MS);
    //         }
    //     }
    // };

    const QuickSort = () =>{
        const animation = getQuickSortAnimation(array);
        for (let i=0; i<animation.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            if(i%4 === 0) {
                const [barOneId, barTwoId] = animation[i];
                const barOneStyle = arrayBars[barOneId].style;
                const barTwoStyle = arrayBars[barTwoId].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED);
            } else if (i%4 === 1) {
                const [barOneId, barTwoId] = animation[i];
                const barOneStyle = arrayBars[barOneId].style;
                const barTwoStyle = arrayBars[barTwoId].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED);
            }
            else {
                const [barOneId, newHeight] = animation[i];
                const barOneStyle = arrayBars[barOneId].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}vh`;
                    // barOneStyle.margin = `30px ${10/array.length}% auto`
                    console.log(barOneStyle.margin);
                }, i * ANIMATION_SPEED);
            }
        }

        // setTimeout(() => {
        //     props.stopAnimation();
        //     props.copyArray(array.slice());
        // }, animation.length * ANIMATION_SPEED)
        

    };

    let width ;
    if(arraySize<10){
      width = '9vw';
    }else if(arraySize < 15 && arraySize>=10){
      width = '6vw';
    }else if(arraySize>=15 && arraySize<20){
      width = '4vw'
    }else if(arraySize < 30 && arraySize>=20){
      width = '2.8vw';
    }else if(arraySize < 40 && arraySize>=30){
      width = '1.9vw'
    }else if(arraySize < 50 && arraySize>=40){
      width = '1.5vw'
    }else if(arraySize < 75 && arraySize>=50){
      width = '1vw'
    }else if(arraySize<100 && arraySize>=75){
      width = '0.7vw'
    }else if(arraySize<125 && arraySize>=100){
      width = '0.5vw'
    }else{
      width = '0.4vw'
    }


  return (
    <div className='array-container'>
        <Navbar/>

        <div className='sort-heading'>Quick Sort</div>
        <div className='slider'>
                <label>Array Size: {arraySize}</label>
                <Slider
                    axis="x"
                    x={arraySize}
                    xmin={5}
                    xmax={150}
                    onChange={({ x }) => setArraySize(x)}
                />
          </div>
          <div className='genDiv'>
           <button className='genBtn' onClick={resetArray}>Generate new Array</button>

          </div>

        {/* <div className='container'> */}
          <div className='box'>
            {array.map((value, idx) => (
                <div className='array-bar' key={idx} style={{height: `${value}vh`, width: width}}>
                    {/* {value} */}
                </div>
            ))}

          </div>

        {/* </div> */}

        {/* <GenerateBtn/> */}
        {/* <button onClick={MergeSort}>Merge Sort</button> */}
        <div className='start-btn-div'>
          <button className='start-btn' onClick={QuickSort}>Start Quick Sort</button>

        </div>
    </div>
  )
}

export default Main
