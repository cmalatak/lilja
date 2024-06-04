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
// ingredients: [["eggs", "2"], ["milk", "1/4c"], ["oil", "once around the pan"] ["salt", "pinch"], ["pepper", "pinch"]
// recipe: ["crack eggs into a bowl, and be sure to remove any shell", "add milk, salt, and pepper, to the eggs, and whisk with a fork", "warm up your pan on medium heat", "add oil to the warm pan", "add egg mixture to pan, and stirring occasionally scraping the bottom of the pan." "Continue to stir until eggs are cooked through to desired consistency, and then they're done!"]
///////////////////////////////////////

const Title = styled.div``;

const RecipeGrid = styled.div`
  grid-template-columns: 33% 33% 33%;
`;

const RecipeSkeleton = (
  title,
  titleImage,
  article,
  ingredients,
  recipe,
  youtubeLink
) => {
  return (
    <RecipeGrid>
      <div> </div>
    </RecipeGrid>
  );
};
