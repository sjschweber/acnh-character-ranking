import React from 'react'

export default function Sorter(props){

  switch(props.sort){
    case "High to Low":
      return sortHightoLow(props.data).map((item) => {
        return(
          <div class="w-96 self-center h-auto bg-yellow-100 shadow-md rounded-lg m-4">
              {item.name}
              <div class="h-40 flex-col text-left p-4">
                <img src={image}/>
                <p>Rank: {item.ranking}</p>
                <p>Species: {item.type}</p>
                <p>Personality: {item.personality}</p>
              </div>

          </div>
        )
      })
    case "Low to High":
      return sortLowtoHigh(props.data).map((item) => {
        return(
          <div class="w-96 self-center h-auto bg-yellow-100 shadow-md rounded-lg m-4">
              {item.name}
              <div class="h-40 flex-col text-left p-4">
                <p>Rank: {item.ranking}</p>
                <p>Species: {item.type}</p>
                <p>Personality: {item.personality}</p>
              </div>

          </div>
        )
      })
    default:
    return(
      <>
        {props.data.map((item) => {

            return(
              <div class="w-96 self-center h-auto bg-yellow-100 shadow-md rounded-lg m-4">
                  {item.name}
                  <div class="h-40 flex-col text-left p-4">
                    <p>Rank: {item.ranking}</p>
                    <p>Species: {item.type}</p>
                    <p>Personality: {item.personality}</p>
                  </div>

              </div>
            )

        })}
    </>
    )

  }

  function sortHightoLow(data){

    return data.sort((a, b) => {

      if(a.ranking > b.ranking){

        return 1;

      }
      if(a.ranking < b.ranking){
        return -1;
      }
      else{
        return 0;
      }
    })
  }

  function sortLowtoHigh(data){
    return data.sort((a, b) => {
      if(a.ranking < b.ranking){

        return 1;

      }
      if(a.ranking > b.ranking){
        return -1;
      }
      else{
        return 0;
      }
    })
  }
}
