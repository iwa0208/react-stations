// DO NOT DELETE
import * as React from 'react'

function hitAPI(props){
    fetch("https://dog.ceo/api/breed/"+props.selectedBreed+"/images/random/40")
    .then(res => res.json())
    .then(data => {props.setDogList(data.message)})
}


export const BreedsSelect = props => {

    return(
        <div class="search-list">
            <p>犬種を選択する</p>
            <select value={props.selectedBreed} onChange={e => props.setSelectedBreed(e.target.value)}>
                {Object.keys(props.breeds).map((breed) => {
                    return <option value={breed}>{breed}</option>
                })}
            </select>
            <button onClick={() => hitAPI(props) }>表示</button>
            <div class="img-box">
                {props.dogList.map((dogurl)=>{
                    return <div class="img" ><img src={dogurl}></img></div>
                })}
            </div>
        </div>
    )
}