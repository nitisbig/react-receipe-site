import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";


const Veggie = () => {
    const [Veggie, setVeggie] = useState([])


    useEffect(() => {
        getVeggie()
    }, [])

    const getVeggie = async () => {
        const check = localStorage.getItem('Veggie');
        if(check){
            setVeggie(JSON.parse(check))
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=6225b7b0e65a4ecf9bd0527e6d322d4b&number=9&tags=vegetarian`)
            const data = await api.json()
            localStorage.setItem('Veggie',JSON.stringify(data.recipes));
            setVeggie(data.recipes);

        }
        

    }
    return (
        <div>
            
            <Wrapper>
                <h3>Veggie Receipe</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                }}>
                    {Veggie.map((recipe) => {
                        return (
                            
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={'/recipe/' + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>

            </Wrapper>


        </div>
    )
}
const Wrapper = styled.div`
    margin: 4rem 0rem;
`
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    img{
        border-radius: 4rem;
    }
`
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Veggie
