const getData = async () => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_APP_API_KEY}&number=20`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

export default async function Home() {
  const data = await getData()
  const popular = data.recipes
  return (
    <section className='section'>
      <h2>Trending picks</h2>
      <div className='recipes'>
        {popular.map((recipe) => {
          return (
            <div className='recipe' key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <div className='para'>
                <p>{recipe.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
