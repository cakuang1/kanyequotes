import React, { useState } from "react";
import axios from "axios";




const url = 'https://api.kanye.rest'


export default function Button() {

    const [text,setText] = useState('');
    axios.get(url).then((response) => {
      import React from 'react'
      import renderer from 'react-test-renderer'
      
      import { Button } from '../Button'
      
      describe('<Button />', () => {
        const defaultProps = {}
        const wrapper = renderer.create(<Button {...defaultProps} />)
      
        test('render', () => {
          expect(wrapper).toMatchSnapshot()
        })
      })


    })
    function handleClick(event) {
        event.preventDefault()
        axios.get(url).then((response) => {
            setText(response.data.quote)
        })
    }

    return (

    <>
      <div className='text'>
        {text}
      </div>
      <form>
        <button onClick={handleClick} >Generate New Quote</button>
      </form>

    </>
  );
  }



  