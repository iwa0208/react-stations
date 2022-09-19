// DO NOT DELETE
import * as React from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/dachshund/tina.jpg")

  return(
    <div class="main-page">
      <div class="description">
        <h2>犬の画像を表示するサイトです。</h2>
      </div>
      <div class="div-main-image">
        <DogImage url={dogUrl}/>
        <div>
        <button onClick={() => 
          fetch('https://dog.ceo/api/breeds/image/random')
          .then(res => res.json())
          .then(data => {setDogUrl(data.message)})
        }>更新</button></div>
      </div>
    </div>
  )
}