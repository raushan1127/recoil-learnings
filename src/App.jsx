import { useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { atom } from 'recoil'
import './App.css'
import { counterAtom } from './assets/store'

function App() {

  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
    
  )
}

function Counter() {
  return (
    <div>
      <CurrentCount />
    <Increase /> 
    <Decrease />
    </div>
    
  )
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom)
  return (
    <div>
       {count}
    </div>
  )
}

function Increase() {

  const setCount = useSetRecoilState(counterAtom)

  return (
    <div>
      <button onClick={() => {
        setCount(c => c + 1)
      }}>Increase</button>
    </div>
  )
}

function  Decrease() {

  const setCount = useSetRecoilState(counterAtom)

  return (
    <div>
      <button onClick={() => {
        setCount(c => c - 1)
      }}>Decrease</button>
    </div>
  )
}
export default App
