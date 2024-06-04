import React from "react";
import styled from "styled-components";

interface RecipeSkeletonProps {
  title: string;
  titleImage: string;
  article: string[][]; // An array where each entry is a paragraph array. Index 0 of each paragraph array is the text. Index 1 (which is optional) is an image to go along with it.
  ingredients: string[][]; // An array where each entry is an ingredient array. Where index 0 of each ingredient array is the ingredient and index 1 is the quantity
  recipe: string[]; // Array is mapped over to create a bullet point in the list for each entry.
  youtubeLink?: string;
}
///////////////////////////////////////
//////////// Sample Recipe ////////////
///////////////////////////////////////
// title: "Scrambled Eggs";
// titleImage: "url for egg image"
// article: [["There once was a man named Paul. He sat on a very tall wall. Some friends called him Humpty, since his last name was Dumpty. You can guess that this ends with a fall.", "cracked-egg-picture"], ["There once was a man named Paul. He sat on a very tall wall. Some friends called him Humpty, since his last name was Dumpty. You can guess that this ends with a fall.", "cracked-egg-picture"], ["There once was a man named Paul. He sat on a very tall wall. Some friends called him Humpty, since his last name was Dumpty. You can guess that this ends with a fall.", "cracked-egg-picture"]]
// ingredients: [["eggs", "2"], ["milk", "1/4c"], ["oil", "once around the pan"], ["salt", "pinch"], ["pepper", "pinch"]]
// recipe: ["crack eggs into a bowl, and be sure to remove any shell", "add milk, salt, and pepper, to the eggs, and whisk with a fork", "warm up your pan on medium heat", "add oil to the warm pan", "add egg mixture to pan, and stirring occasionally scraping the bottom of the pan.", "Continue to stir until eggs are cooked through to desired consistency, and then they're done!"]
///////////////////////////////////////

const Title = styled.div`
  grid-row-start: 1;
`;

const RecipeImage = styled.img`
  max-height: 300px;
  @media (min-width: 1024px) {
    max-height: 600px;
  }
`;

const Overview = styled.div`
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 40% 40% 20%;
`;

const ArticleContainer = styled.div`
  grid-template-rows: 56px 1fr;
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const Article = styled.div`
  grid-row-start: 2;
`;

const ArticleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ArticleImagery = styled.img`
  max-width: 300px;
  @media (min-width: 1024px) {
    max-width: 400px;
  }
`;

const RecipeContainer = styled.div`
  grid-template-rows: 600px 1fr;
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const Ingredients = styled.ul`
  grid-row-start: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 500px;
`;

const Recipe = styled.ol`
  grid-row-start: 2;
`;

//Actually - is grid the best way to do this? I feel like it should be.... but now i'm not

const RecipeSkeleton = () =>
  // title,
  // titleImage,
  // article,
  // ingredients,
  // recipe,
  // youtubeLink
  {
    const title = "Scrambled Eggs";

    const titleImage =
      "https://www.allrecipes.com/thmb/0VXMwCY9RVNrNvWcF_9v0iZpNqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JF_241160_CreamyCottageCheeseScrambled_4x3_12902-619d00dc88594ea9b8ed884a108db16d.jpg";

    const article = [
      [
        "There once was a man named Paul. He sat on a very tall wall. Some friends called him Humpty, since his last name was Dumpty. You can guess that this ends with a fall.",
        "https://as1.ftcdn.net/v2/jpg/02/24/80/54/1000_F_224805478_vwG43D2iKCWjuoGumNsb0sClnZbDmD0X.jpg",
      ],
      [
        "There once was a man named Paul. He sat on a very tall wall. Some friends called him Humpty, since his last name was Dumpty. You can guess that this ends with a fall.",
        "https://as1.ftcdn.net/v2/jpg/02/24/80/54/1000_F_224805478_vwG43D2iKCWjuoGumNsb0sClnZbDmD0X.jpg",
      ],
      [
        "There once was a man named Paul. He sat on a very tall wall. Some friends called him Humpty, since his last name was Dumpty. You can guess that this ends with a fall.",
        "https://as1.ftcdn.net/v2/jpg/02/24/80/54/1000_F_224805478_vwG43D2iKCWjuoGumNsb0sClnZbDmD0X.jpg",
      ],
    ];
    const ingredients = [
      ["eggs", "2"],
      ["milk", "1/4c"],
      ["oil", "once around the pan"],
      ["salt", "pinch"],
      ["pepper", "pinch"],
    ];
    const recipe = [
      "crack eggs into a bowl, and be sure to remove any shell",
      "add milk, salt, and pepper, to the eggs, and whisk with a fork",
      "warm up your pan on medium heat",
      "add oil to the warm pan",
      "add egg mixture to pan, and stirring occasionally scraping the bottom of the pan.",
      "Continue to stir until eggs are cooked through to desired consistency, and then they're done!",
    ];

    return (
      <>
        <ArticleContainer>
          <Title>{title}</Title>
          <RecipeImage src={titleImage} />
          <Article>
            {article.map((paragraph) => {
              return (
                <ArticleSection>
                  <p>{paragraph[0]}</p>
                  {paragraph[1] && <ArticleImagery src={paragraph[1]} />}
                </ArticleSection>
              );
            })}
          </Article>
        </ArticleContainer>
        <RecipeContainer>
          <Ingredients>
            {ingredients.map((ingredient) => {
              return <li>{`${ingredient[0]} ${ingredient[1]}`}</li>;
            })}
          </Ingredients>
          <Recipe>
            {recipe.map((step) => {
              return <li>{step}</li>;
            })}
          </Recipe>
        </RecipeContainer>
      </>
    );
  };

export default RecipeSkeleton;
