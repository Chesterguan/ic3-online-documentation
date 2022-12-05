import Image from 'react'
import React from 'react'
import Ufhealth from '../../../static/img/Ufhealth.png'
import IC3Center from '../../../static/img/IC3-center.png'

const Ic3Icon = () => {
  return (
    <div >
      <img src={Ufhealth} height='50' width={`100`} alt="logo" />

      <br />
      <img src={IC3Center} width='450' height='80' />
    </div>
  )
}

export default Ic3Icon