import React from "react";
import styled from "styled-components";

interface HomepageProps {
  featuredRecipe?: object;
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

const HomepageWrapper = styled.div`
  //   display: grid;
  //   grid-template-columns: 66% 33%;
  // not 100% sure if grid is the way yet here.
`;

const FeaturedRecipeSection = styled.div`
  margin: 16px;
  @media (min-width: 1024px) {
    width: 60%;
  }
`;

// Pull out shared styled components into a separate file.
const RecipeImage = styled.img`
  width: 100%;

  padding-bottom: 8px;
  @media (min-width: 1024px) {
    width: -webkit-fill-available;
    max-height: 600px;
    padding-bottom: 16px;
  }
`;

const FeaturedDescription = styled.div`
  background-color: white;
  border-radius: 8px;
  color: #000000;
  padding: 8px;
  text-align: left;
  width: 98%;
`;

const FeaturedRecipe = () =>
  //featuredRecipe
  {
    // const {title, titleImage, description} = featureRecipe;
    const title = "Scrambled Eggs";

    const titleImage =
      "https://www.allrecipes.com/thmb/0VXMwCY9RVNrNvWcF_9v0iZpNqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JF_241160_CreamyCottageCheeseScrambled_4x3_12902-619d00dc88594ea9b8ed884a108db16d.jpg";

    const description =
      "A classic! Everyone loves a good ol heaping plate of scrambled eggs. Your friends will be so impressed!";

    return (
      <FeaturedRecipeSection>
        <h3>Featured Recipe</h3>
        <div>{title}</div>
        <RecipeImage src={titleImage} />
        <FeaturedDescription>{description}</FeaturedDescription>
      </FeaturedRecipeSection>
    );
  };

export const Homepage: React.FC<HomepageProps> = (featuredRecipe) => {
  return (
    <HomepageWrapper>
      Homeeee pageeee
      <FeaturedRecipe />
    </HomepageWrapper>
  );
};
