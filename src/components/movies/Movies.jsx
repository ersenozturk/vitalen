// import useFetch from '../../hooks/useFetch'
// import styles from './Movies.module.css'

// const Movies = () => {
//   const moviesArr = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=300486eba1a4a782eeecb32a1d9d72f4')
//   console.log(araba);


//   onClick = (e) =>{
// let id = e.target.id
// history.push("/home/datails/id")
//   }
//   return (
//     <div className={styles.container}>Movies</div>
//   )
// }

// export default Movies

import React from 'react'
import useFetch from '../../hooks/useFetch'

const Movies = () => {

  const {data} = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=300486eba1a4a782eeecb32a1d9d72f4&language=en-US&page=1')
  console.log('data',data)
  return (
    <div>{
      data?.map((each)=>{
        return( <h4>{each.title}</h4>)
      })}
              <p>das</p>

      </div>
  )
}

export default Movies