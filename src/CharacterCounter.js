import React from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

const textState = atom({
  key: 'textState',
  default: '',
})

export function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
  </div>
  )
}

const TextInput = () => {
  const [text, setText] = useRecoilState(textState)

  const onChange = event => setText(event.target.value)
  
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      <p>Echo: {text}</p>
    </div>
  )
}

const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState)
    return text.length
  }
})

const CharacterCount = () => {
  const count = useRecoilValue(charCountState)

  return <><p>Character count: {count}</p></>
}
