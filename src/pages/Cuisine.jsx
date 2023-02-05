import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Cuisine = () => {
  
  const [cusine,setCusine] = useState([])
  let params = useParams()
  const getCuisine = async(name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=6225b7b0e65a4ecf9bd0527e6d322d4b&cuisine=${name}`)
    const receipes = await data.json();
    setCusine(receipes.results)
  }
  useEffect(()=>{
    getCuisine(params.type)
    console.log(params.type)
  },[params.type])
  return (
    <Grid 
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration:0.5}}
    >
      {cusine.map((item)=>{
        return(
          <Card key={item.id}>
            <Link to={'/recipe/'+item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`



export default Cuisine
