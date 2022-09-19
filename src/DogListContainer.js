// DO NOT DELETE
import * as React from 'react'
import { BreedsSelect } from './BreedsSelect'


export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState(0)
  const [selectedBreed, setSelectedBreed] = React.useState("affenpinscher")
  const [dogList, setDogList] = React.useState([""])

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {setBreeds(data.message)})
  },[])

  return(
    <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed = {setSelectedBreed} dogList={dogList} setDogList = {setDogList} />
  )
}