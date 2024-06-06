import React from "react";
import styled from "styled-components";

interface RecipeSkeletonProps {
  title: string;
  titleImage: string;
  description: string;
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
// description: "A classic! Everyone loves a good ol heaping plate of scrambled eggs. Your friends will be so impressed!"
// article: [["There once was a man named Paul. He sat on a very tall wall. Some friends called him Humpty, since his last name was Dumpty. You can guess that this ends with a fall.", "cracked-egg-picture"], ["There once was a man named Paul. He sat on a very tall wall. Some friends called him Humpty, since his last name was Dumpty. You can guess that this ends with a fall.", "cracked-egg-picture"], ["There once was a man named Paul. He sat on a very tall wall. Some friends called him Humpty, since his last name was Dumpty. You can guess that this ends with a fall.", "cracked-egg-picture"]]
// ingredients: [["eggs", "2"], ["milk", "1/4c"], ["oil", "once around the pan"], ["salt", "pinch"], ["pepper", "pinch"]]
// recipe: ["crack eggs into a bowl, and be sure to remove any shell", "add milk, salt, and pepper, to the eggs, and whisk with a fork", "warm up your pan on medium heat", "add oil to the warm pan", "add egg mixture to pan, and stirring occasionally scraping the bottom of the pan.", "Continue to stir until eggs are cooked through to desired consistency, and then they're done!"]
// slug? use to get recipe from slug?
///////////////////////////////////////

const Title = styled.div``;

const RecipeImage = styled.img`
  max-height: 300px;
  padding-bottom: 8px;
  @media (min-width: 1024px) {
    max-height: 600px;
    padding-bottom: 16px;
  }
`;

const Description = styled.div`
  grid-column: 1 / span 3;
`;

const Overview = styled.div`
  display: grid;
  grid-template: 33% 33% 33% / 33% 33% 33%;
  background-color: white;
  border-radius: 8px;
  color: #000000;
  padding: 8px;
  text-align: left;
  font-size: 14px;
  margin-bottom: 16px;
  @media (min-width: 1024px) {
    font-size: x-large;
    margin-bottom: 24px;
  }
`;

const ArticleContainer = styled.div`
  @media (min-width: 1024px) {
  }
`;

const Article = styled.div`
  background-color: white;
  border-radius: 8px;
  color: #000000;
  padding: 24px;
  text-align: left;
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
  max-width: 100%;
  @media (min-width: 1024px) {
    max-width: 400px;
  }
`;

const RecipeContainer = styled.div`
  @media (min-width: 1024px) {
  }
`;

const Ingredients = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 500px;
  align-items: flex-start;
  background-color: white;
  border-radius: 8px;
  color: #000000;
  padding-top: 16px;
  padding-bottom: 16px;
  li {
    margin: 8px 0;
  }
`;

const Recipe = styled.ol`
  align-items: flex-start;
  text-align: left;
  background-color: white;
  border-radius: 8px;
  color: #000000;
  padding-top: 16px;
  padding-bottom: 16px;
  li {
    margin: 16px 0;
  }
`;

const RecipePageWrapper = styled.div`
  width: min-content;
`;

//Actually - is grid the best way to do this? I feel like it should be.... but now i'm not

const RecipeSkeleton = () =>
  // title,
  // titleImage,
  // description
  // overview,
  // article,
  // ingredients,
  // recipe,
  // youtubeLink
  {
    const title = "Scrambled Eggs";

    const titleImage =
      "https://www.allrecipes.com/thmb/0VXMwCY9RVNrNvWcF_9v0iZpNqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JF_241160_CreamyCottageCheeseScrambled_4x3_12902-619d00dc88594ea9b8ed884a108db16d.jpg";

    const description =
      "A classic! Everyone loves a good ol heaping plate of scrambled eggs. Your friends will be so impressed!";

    const article = [
      [
        "There once was a man named Paul. He sat on a very tall wall. Some friends called him Humpty, since his last name was Dumpty. You can guess that this ends with a fall.",
        "https://as1.ftcdn.net/v2/jpg/02/24/80/54/1000_F_224805478_vwG43D2iKCWjuoGumNsb0sClnZbDmD0X.jpg",
      ],
      [
        "There once was a man named Paul. He sat on a very tall wall. Some friends called him Humpty, since his last name was Dumpty. You can guess that this ends with a fall.",
      ],
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

    const overview = [
      ["Prep Time", "5 min"],
      ["Cook Time", "5 min"],
      ["Total Time", "10 min"],
      ["Servings", "1"],
    ];

    return (
      <RecipePageWrapper>
        <ArticleContainer>
          <Title>{title}</Title>
          <RecipeImage src={titleImage} />
          <Overview>
            <Description>{description}</Description>
            {overview.map((note, index) => {
              return (
                <div key={index}>
                  <p>
                    <b>{`${note[0]}: `}</b>
                    {note[1]}
                  </p>
                </div>
              );
            })}
          </Overview>
          <Article>
            {article.map((paragraph, index) => {
              return (
                <ArticleSection key={index}>
                  <p>{paragraph[0]}</p>
                  {paragraph[1] && <ArticleImagery src={paragraph[1]} />}
                </ArticleSection>
              );
            })}
          </Article>
        </ArticleContainer>
        <RecipeContainer>
          <Ingredients>
            {ingredients.map((ingredient, index) => {
              return <li key={index}>{`${ingredient[0]} ${ingredient[1]}`}</li>;
            })}
          </Ingredients>
          <Recipe>
            {recipe.map((step, index) => {
              return <li key={index}>{step}</li>;
            })}
          </Recipe>
        </RecipeContainer>
      </RecipePageWrapper>
    );
  };

export default RecipeSkeleton;
