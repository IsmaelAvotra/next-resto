import Card from "../../components/card/Card";

export async function generateStaticParams() {
  return [
    {
      category: "italian",
    },
    {
      category: "american",
    },
    {
      category: "thai",
    },
    {
      category: "japanese",
    },
  ];
}

async function Page({ params }) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_APP_API_KEY}&cuisine=${params.category}&number=20`
  );
  const data = await response.json();
  const recipes = data.results;
  return (
    <section className="section">
      <h2>{`Category ${params.category}`}</h2>
      <div className="recipes">
        {recipes.map((recipe) => {
          return <Card key={recipe.id} {...recipe} />;
        })}
      </div>
    </section>
  );
}

export default Page;
