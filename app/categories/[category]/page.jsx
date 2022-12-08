export async function generateStaticParams() {
  return [
    {
      category: 'italian',
    },
    {
      category: 'american',
    },
    {
      category: 'thai',
    },
    {
      category: 'japanese',
    },
  ]
}

async function Page({ params }) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_APP_API_KEY}&cuisine=${params.category}&number=20`
  )
  const data = await response.json()
  const results = data.results
  return (
    <section className='section'>
      <h2>{`Category ${params.category}`}</h2>
      <div className='recipes'>
        {results.map((result) => {
          return (
            <div className='recipe' key={result.id}>
              <img src={result.image} alt={result.title} />
              <div className='para'>
                <p>{result.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Page
