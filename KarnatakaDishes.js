import React, { useState, useEffect } from 'react';
import './KarnatakaDishes.css';
import Confetti from 'react-confetti';

const KarnatakaDishes = () => {
  const [favourites, setFavourites] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      name: 'Bisi Bele Bath',
      className: 'dish1ka',
      recipe: {
        label: 'Bisi Bele Bath',
        url: 'https://youtu.be/rNP83Cb5nzs?si=mDLG6dXq3aIgF0bD',
        videoId: 'rNP83Cb5nzs',
        ingredients: [
          'Rice',
          'Toor dal',
          'Vegetables (carrot, beans, peas)',
          'Tamarind pulp',
          'Bisi Bele Bath powder',
          'Oil, Salt'
        ],
        preparation: [
          'Rinse and cook 1 cup of rice and 1/2 cup of toor dal together in 4 cups of water until soft (about 3-4 pressure cooker whistles or 20-25 minutes in a pot).',
          ' Roast and grind chana dal, urad dal, red chilies, coriander seeds, cumin seeds, fenugreek seeds, cinnamon, cloves, and cardamom into a fine powder.',
          ' In a pot, heat oil, add mustard seeds, curry leaves, and chopped mixed vegetables (carrot, beans, peas). Sauté for a few minutes.',
          ' Add cooked rice and dal to the vegetables, stir in tamarind pulp, 2 tablespoons of Bisi Bele Bath powder, salt, and additional water if needed. Simmer for 10-15 minutes.',
          ' Optionally, add a tablespoon of ghee for extra flavor. Serve hot with papadam, pickle, or yogurt.'
        ]
      }
    },
    {
      name: 'Mysore Pak',
      className: 'dish2ka',
      recipe: {
        label: 'Mysore Pak',
        url: 'https://youtu.be/SDqoCU9zrRc?si=34Q9To3pu9kFUD9Z',
        videoId: 'SDqoCU9zrRc',
        ingredients: [
          'Gram flour (Besan)',
          'Ghee',
          'Sugar',
          'Water',
          'Cardamom powder'
        ],
        preparation: [
          'Measure 1 cup of besan (gram flour), 1 cup of ghee (clarified butter), and 1 cup of sugar.',
          ' Heat sugar and 1 cup of water in a pan until it reaches a single thread consistency (about 5-7 minutes).',
          ' In another pan, melt the ghee and add besan. Roast on low heat, stirring continuously, until it emits a nutty aroma and starts to change color.',
          ' Gradually pour the hot sugar syrup into the roasted besan, stirring constantly to avoid lumps. Continue to cook and stir until the mixture thickens and starts to pull away from the sides of the pan.',
          ' Pour the mixture into a greased tray and let it cool completely. Once set, cut into pieces and serve.'
        ]
      }
    },
    {
      name: 'Ragi Mudde',
      className: 'dish3ka',
      recipe: {
        label: 'Ragi Mudde',
        url: 'https://youtu.be/W_qAepmaUJY?si=4kK_qwfTR3LoMEuG',
        videoId: 'W_qAepmaUJY',
        ingredients: [
          'Ragi flour',
          'Water',
          'Salt'
        ],
        preparation: [
          'In a large pot, bring 2 cups of water to a boil. Add a pinch of salt if desired.',
          ' In a mixing bowl, add 1 cup of ragi flour. Mix with a small amount of cold water to make a smooth paste (about 1/4 cup of water). This will help prevent lumps.',
          ' Once the water in the pot is boiling, slowly pour the ragi paste into the pot while stirring continuously. This helps to prevent lumps from forming.',
          ' Reduce the heat to low and continue stirring the mixture vigorously. Cook for about 10-15 minutes until the mixture thickens and starts to pull away from the sides of the pot. It should form a thick, smooth dough-like consistency.',
          ' Once cooked, transfer the ragi mudde to a plate. Allow it to cool slightly. Shape it into balls using your hands or a spoon. Serve warm with sambar, curry, or any desired accompaniment.'
        ]
      }
    },
    {
      name: 'Neer Dosa',
      className: 'dish4ka',
      recipe: {
        label: 'Neer Dosa',
        url: 'https://youtu.be/RVGCC3fLHi4?si=xwkytg91fMKQk7ll',
        videoId: 'RVGCC3fLHi4',
        ingredients: [
          'Rice',
          'Grated Coconut',
          'Water',
          'Salt',
          'Oil'
        ],
        preparation: [
          'Soak 1 cup of rice in water for 4-6 hours or overnight. This softens the rice and helps in blending it into a smooth batter.',
          ' Drain the soaked rice and place it in a blender. Add 1/4 cup of grated coconut (if using) and 1-2 green chilies (if desired for spice). Pour enough water to achieve a thin, smooth batter.',
          ' Heat a non-stick pan or griddle over medium heat. Lightly grease it with a small amount of oil using a paper towel or brush.',
          ' Pour a ladleful of batter onto the hot pan. Quickly spread it in a thin, even layer in a circular motion. Cook until the edges of the dosa start to lift and the surface looks dry, about 1-2 minutes.',
          ' Gently lift the dosa with a spatula. Fold or roll it, and serve hot with coconut chutney, sambar, or any preferred accompaniment.'
        ]
      }
    },
    {
      name: 'Mangalore Buns',
      className: 'dish5ka',
      recipe: {
        label: 'Mangalore Buns',
        url: 'https://youtu.be/mPeSfkpPCp0?si=-xLq1vLjLbgIcHIL',
        videoId: 'mPeSfkpPCp0',
        ingredients: [
          'All-purpose flour',
          'Bananas',
          'Sugar',
          'Curd',
          'Baking powder',
          'Salt',
          'Oil for frying'
        ],
        preparation: [
          'In a large bowl, combine the all-purpose flour with baking soda, baking powder, and salt. Add the mashed banana, yogurt, and sugar. Mix well to form a sticky dough.',
          ' Transfer the mixture onto a floured surface and knead it into a smooth, soft dough. It should be slightly tacky but manageable.',
          ' Cover the dough with a damp cloth or plastic wrap and let it rest in a warm place for 2-3 hours. This allows the dough to ferment slightly and develop flavor.',
          ' After resting, divide the dough into small balls. On a lightly floured surface, roll each ball into a thick, circular shape. The thickness should be about 1/4 inch.',
          ' Heat oil in a deep pan or skillet over medium heat. Fry each rolled dough circle until it puffs up and turns golden brown on both sides. Remove from oil and drain on paper towels. Serve warm with coconut chutney or curry.'
        ]
      }
    },
    {
      name: 'Kane Rava Fry',
      className: 'dish6ka',
      recipe: {
        label: 'Kane Rava Fry',
        url: 'https://youtu.be/JccvJGfzUpk?si=s0hmOQJEePG51qXY',
        videoId: 'JccvJGfzUpk',
        ingredients: [
          'Kane fish',
          'Rava (semolina)',
          'Chili powder',
          'Turmeric powder',
          'Salt',
          'Oil'
        ],
        preparation: [
          'In a bowl, mix red chili powder, turmeric powder, coriander powder, garam masala, lemon juice, and salt. Rub this mixture onto the fish and let it marinate for at least 30 minutes.',
          ' In a separate dish, combine rava and rice flour. Add a pinch of salt if desired.',
          ' Heat oil in a pan over medium heat. Take each marinated fish piece, dredge it in the rava and rice flour mixture, ensuring it is well coated on all sides.',
          ' Fry the coated fish pieces in the hot oil until golden brown and crispy on both sides. This usually takes about 3-4 minutes per side.',
          ' Remove the fish from the pan and place it on paper towels to drain excess oil. Garnish with fresh coriander and serve hot with lemon wedges and your choice of side dish.'
        ]
      }
    },
    {
      name: 'Mysore Masala Dosa',
      className: 'dish7ka',
      recipe: {
        label: 'Mysore Masala Dosa',
        url: 'https://youtu.be/Sy7TSQbf0hc?si=a-GF8afu2XYB7nOf',
        videoId: 'Sy7TSQbf0hc',
        ingredients: [
          'Rice',
          'Urad dal, Chana dal',
          'Potatoes, Onions',
          'Green chilies',
          'Mustard seeds, Curry leaves',
          'Chilli powder, Turmeric powder',
          'Salt',
        ],
        preparation: [
          'Soak rice, urad dal, chana dal, and fenugreek seeds in water for 4-6 hours. Drain and blend into a smooth batter, adding water as needed. Ferment the batter overnight or for at least 8 hours.',
          ' Heat oil in a pan, add mustard seeds, urad dal, and cumin seeds. Once they splutter, add onions, green chili, and curry leaves. Sauté until onions are golden brown. Add turmeric powder and mashed potatoes, mix well, and cook for a few minutes. Season with salt and garnish with coriander if desired.',
          ' Dry roast red chilies and chana dal. Blend with grated coconut, tamarind paste, cumin seeds, salt, and enough water to make a smooth chutney.',
          ' Heat a non-stick griddle or tawa. Pour a ladleful of dosa batter and spread it into a thin, round shape. Drizzle a little oil around the edges. Cook until the dosa turns golden brown and crispy.',
          ' Place a portion of the masala filling in the center of the dosa and fold it into a half-moon or roll it up.'
        ]
      }
    },
    {
      name: 'Coorg Pandi Curry',
      className: 'dish8ka',
      recipe: {
        label: 'Coorg Pandi Curry',
        url: 'https://youtu.be/7n-sua80Rv8?si=G4J2tV36erT935zY',
        videoId: '7n-sua80Rv8',
        ingredients: [
          'Pork',
          'Coorgi spice mix',
          'Onions, Tomatoes',
          'Ginger-garlic paste',
          'Curry leaves',
          'Oil, Salt'
        ],
        preparation: [
          'Combine pork cubes with yogurt, Coorgi roasted spice powder, ginger-garlic paste, turmeric powder, red chili powder, and salt in a bowl. Marinate for at least 2 hours, or overnight for better flavor.',
          ' Heat oil in a heavy-bottomed pan. Add mustard seeds, cumin seeds, and fenugreek seeds. When they start to splutter, add onions and sauté until golden brown. Add ginger-garlic paste and green chilies, and cook until fragrant.',
          ' Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and black pepper powder. Cook until the tomatoes are soft and the oil separates from the mixture.',
          ' Add the marinated pork to the pan. Mix well and cook on medium heat until the pork is browned. Add water as needed to achieve the desired consistency.',
          ' Reduce heat and let the curry simmer for 30-40 minutes, or until the pork is tender. Garnish with chopped coriander leaves.'
        ]
      }
    },
    {
      name: 'Obbattu',
      className: 'dish9ka',
      recipe: {
        label: 'Obbattu',
        url: 'https://youtu.be/uVOYlQ-TziY?si=bwu51xtGm4vRShRK',
        videoId: 'uVOYlQ-TziY',
        ingredients: [
          'All-purpose flour',
          'Chana dal',
          'Jaggery',
          'Cardamom powder',
          'Oil'
        ],
        preparation: [
          'In a bowl, combine all-purpose flour, turmeric powder, oil, and salt. Gradually add water and knead to form a soft dough. Cover and let it rest for at least 30 minutes.',
          ' In a pan, mix the cooked chana dal, grated jaggery, cardamom powder, and grated coconut. Cook over low heat until the jaggery melts and the mixture thickens. Allow it to cool.',
          ' Divide the dough into small balls. Similarly, divide the filling into small portions. Roll each dough ball into a thin circle, then place a portion of the filling in the center. Fold the dough over the filling and seal the edges.',
          ' Heat a tawa or non-stick pan. Place the rolled obbattu on it and cook on medium heat. Flip and apply a little ghee or oil. Flatten the filled dough gently with a rolling pin to form a thin disc.',
          ' Cook until both sides are golden brown. Serve warm with ghee.'
        ]
      }
    },
    {
      name: 'Chicken Ghee Roast',
      className: 'dish10ka',
      recipe: {
        label: 'Chicken Ghee Roast',
        url: 'https://youtu.be/ddap02c84a8?si=trnLaRXNVNoAY7nm',
        videoId: 'ddap02c84a8',
        ingredients: [
          'Chicken',
          'Ghee',
          'Chili powder',
          'Turmeric powder, Coriander powder',
          'Garlic paste',
          'Salt, Curry leaves'
        ],
        preparation: [
          ' Heat 3 tablespoons of ghee in a large pan over medium heat until it melts. Add 2 finely chopped onions and sauté them until they become golden brown and caramelized, which should take about 8-10 minutes.',
          ' Stir in 1 tablespoon of ginger-garlic paste and cook for an additional 2 minutes, allowing the paste to release its flavors and blend with the onions.',
          ' Mix in 2 tablespoons of red chili powder, ensuring it is well combined with the onion and ginger-garlic paste mixture. Cook for 1-2 minutes to let the spices bloom and infuse the ghee with their rich color and flavor.',
          ' Add 500 grams of chicken pieces to the pan. Stir well to coat the chicken evenly with the spiced ghee mixture. Cover the pan and simmer on medium heat, occasionally stirring, until the chicken is cooked through and tender, which should take about 15-20 minutes.',
          ' Once the chicken is cooked and the ghee has thickened into a rich sauce, adjust the seasoning with salt as needed. Garnish with fresh coriander if desired. Serve the Chicken Ghee Roast hot with rice or chapati, enjoying the aromatic and flavorful dish.'
        ]
      }
    },
    {
      name: 'Chitranna',
      className: 'dish11ka',
      recipe: {
        label: 'Chitranna',
        url: 'https://youtu.be/5Nyqy_p2rQg?si=NoB0nis06qBgQm4G',
        videoId: '5Nyqy_p2rQg',
        ingredients: [
          'Rice',
          'Lemon juice',
          'Peanuts',
          'Green chilies',
          'Turmeric powder',
          'Mustard seeds',
          'Curry leaves',
          'Salt'
        ],
        preparation: [
          'Cook 1 cup of rice and let it cool. It’s best if the rice is slightly dry to ensure it mixes well with the other ingredients.',
          ' Heat 2 tablespoons of oil in a pan. Add 1/2 teaspoon each of mustard seeds and cumin seeds. Once they begin to splutter, add 1 tablespoon each of chana dal and urad dal, and fry until golden brown.',
          ' Stir in 1/4 cup of peanuts and chopped green chilies. Cook for a few minutes until the peanuts are slightly roasted. Add 1/2 teaspoon of turmeric powder and salt to taste.',
          ' Add the cooked rice to the pan, mixing well to coat it evenly with the spices and tadka. Stir in 8-10 curry leaves and cook for a few minutes, allowing the flavors to meld together.',
          ' Remove from heat and stir in 2 tablespoons of lemon juice. Mix well and garnish with fresh coriander if desired. Serve Chitranna warm, enjoyed as a flavorful and tangy rice dish.'
        ]
      }
    },
    {
      name: 'Akki Rotti',
      className: 'dish12ka',
      recipe: {
        label: 'Akki Rotti',
        url: 'https://youtu.be/pSmCT6xVBZE?si=vQagi0lHvXe0tBMF',
        videoId: 'pSmCT6xVBZE',
        ingredients: [
          'Rice flour',
          'Onions, Green chilies',
          'Coriander leaves',
          'Salt, Water',
          'Oil'
        ],
        preparation: [
          'In a large bowl, mix 2 cups of rice flour with 1 cup of grated coconut, 1 finely chopped onion, 2 chopped green chilies, and 1/2 cup of chopped coriander leaves. Add 1 tsp cumin seeds, 1/2 tsp mustard seeds, and salt to taste. Mix well.',
          ' Stir in 1/2 cup of yogurt or buttermilk to the mixture. Gradually add water as needed to form a soft dough. The dough should be pliable but not too wet.',
          ' Heat a griddle or tawa on medium heat. Take a portion of the dough and place it on a piece of parchment paper or plastic wrap. Flatten it into a thin, round rotti using your fingers or a rolling pin.',
          ' Transfer the flattened dough onto the hot griddle. Cook on medium heat until small bubbles form on the surface. Flip and cook the other side until golden brown spots appear. Brush with a little oil if desired.',
          ' Remove from the griddle and serve hot with chutney or curry of your choice. Akki Rotti is a versatile dish that can be enjoyed for breakfast or as a snack.'
        ]
      }
    },
    {
      name: 'Mysore Rasam',
      className: 'dish13ka',
      recipe: {
        label: 'Mysore Rasam',
        url: 'https://youtu.be/01AqWvAio_Q?si=AoqiBSlxddmWFJQs',
        videoId: '01AqWvAio_Q',
        ingredients: [
          'Tomatoes',
          'Tamarind extract',
          'Rasam powder',
          'Coriander leaves, Mustard seeds',
          'Curry leaves, Garlic',
          'Salt, Oil'
        ],
        preparation: [
          'In a pot, heat 2 tbsp of ghee or oil. Add 1/2 tsp mustard seeds, 1/2 tsp cumin seeds, and let them splutter. Add the curry leaves and chopped tomatoes, and sauté until the tomatoes turn soft.',
          ' Stir in 1/2 tsp turmeric powder, 1/2 tsp red chili powder, and 1/2 tsp black pepper. Cook for a couple of minutes until the spices are well mixed.',
          ' Add the cooked and mashed toor dal to the pot. Mix well and then add 3 cups of water. Bring the mixture to a boil.',
          ' Stir in 1/2 tsp tamarind paste and salt to taste. Let the rasam simmer for about 10-15 minutes, allowing the flavors to meld together.',
          ' Add freshly chopped coriander leaves just before serving. Serve hot with steamed rice or as a soup on its own.'
        ]
      }
    },
    {
      name: 'Kundapura Koli Saaru',
      className: 'dish14ka',
      recipe: {
        label: 'Kundapura Koli Saaru',
        url: 'https://youtu.be/MoHbbjftLBg?si=iH_Rfdj146Vdltsd',
        videoId: 'MoHbbjftLBg',
        ingredients: [
          'Chicken',
          'Kundapura spice mix',
          'Onions, Tomatoes',
          'Coriander leaves',
          'Oil, Salt'
        ],
        preparation: [
          'In a pan, heat 1 tbsp of ghee or oil. Add mustard seeds and cumin seeds. Once they splutter, add the grated coconut and sauté until golden brown. Grind this mixture into a smooth paste with a little water.',
          ' In a large pot, heat another 1 tbsp of ghee or oil. Sauté the finely chopped onions until translucent. Add the chopped tomatoes and cook until they soften.',
          ' Stir in turmeric powder, red chili powder, coriander powder, and black pepper. Mix well. Add the chicken pieces and cook for about 5 minutes, allowing the chicken to absorb the spices.',
          ' Add the coconut paste and mix thoroughly. Pour in 2 cups of water and bring to a boil. Reduce the heat and let it simmer until the chicken is tender and cooked through.',
          ' Stir in the tamarind paste and salt to taste. Cook for an additional 5 minutes. Garnish with fresh coriander leaves. Serve hot with rice or Indian bread.'
        ]
      }
    },
    {
      name: 'Maddur Vada',
      className: 'dish15ka',
      recipe: {
        label: 'Maddur Vada',
        url: 'https://youtu.be/FGL9XRL4uAM?si=l2_HqSIVP-or2uNS',
        videoId: 'FGL9XRL4uAM',
        ingredients: [
          'All-purpose flour',
          'Rice flour',
          'Onions',
          'Green chilies',
          'Coriander leaves',
          'Cumin seeds',
          'Salt',
          'Oil'
        ],
        preparation: [
          'In a large bowl, combine rice flour and all-purpose flour. Add chopped onions, green chilies, grated coconut, coriander leaves, and curry leaves. Mix well.',
          ' Heat a small pan with a little oil, add mustard seeds, cumin seeds, and let them splutter. Add turmeric powder, red chili powder, and black pepper powder. Pour this tempering over the flour mixture and mix well.',
          ' Gradually add water to the mixture, a little at a time, to form a thick dough. The dough should be slightly moist but not too wet.',
          ' Take small portions of the dough and flatten them into round discs with your fingers.',
          ' Heat oil in a deep frying pan. Fry the vadas in hot oil until they are golden brown and crisp, turning occasionally for even cooking. Remove with a slotted spoon and drain on paper towels.'
        ]
      }
    }
  ]; 

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    if (Array.isArray(storedFavourites)) {
      setFavourites(storedFavourites);
    } else {
      setFavourites([]);
    }
  }, []);

  const handleAddToFavourites = (dish) => {
    const isFavourite = favourites.some(fav => fav.name === dish.name);
    if (isFavourite) {
      const updatedFavourites = favourites.filter(fav => fav.name !== dish.name);
      setFavourites(updatedFavourites);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      setIsAdding(false);
      setMessage(`${dish.name} removed from your favourites`);
    } else {
      const updatedFavourites = [...favourites, dish];
      setFavourites(updatedFavourites);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      setIsAdding(true);
      setMessage(`${dish.name} added to your favourites`);
    }
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const handleViewRecipe = (dish) => {
    setSelectedDish(dish);
  };

  const closeRecipeView = () => {
    setSelectedDish(null);
  };

  return (
    <div className="karnataka-dishes-container">
      <h1 className={`title ${selectedDish ? 'hidden' : ''}`}>Karnataka Recipes</h1>
      {showMessage && (
        <div className={`message-overlay ${isAdding ? 'adding' : 'removing'}`}>
          {isAdding ? <Confetti /> : null}
          <div className={`message-content ${isAdding ? 'adding' : 'removing'}`}>
            <div className="message">{message}</div>
          </div>
        </div>
      )}
      {selectedDish ? (
        <div className="recipe-page">
          <button className="back-button" onClick={closeRecipeView}>Close</button>
          <div className="recipe-content">
            <div className="recipe-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedDish.recipe.videoId}`}
                title={selectedDish.recipe.label}
                allowFullScreen
              ></iframe>
            </div>
            <div className="recipe-details">
              <h2>{selectedDish.recipe.label}</h2>
              <h3>Ingredients</h3>
              <ul>
                {selectedDish.recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h3>Preparation</h3>
              <p>{selectedDish.recipe.preparation.join(' ')}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="dishes-grid">
          {dishes.map((dish, index) => (
            <div key={index} className={`dish-square ${dish.className}`}>
              <div className="overlay">
                <div className="text">{dish.name}</div>
                <div className="buttons-container">
                  <button className="view-recipe-button" onClick={() => handleViewRecipe(dish)}>
                    View Recipe
                  </button>
                  <button
                    className="favourites-button"
                    onClick={() => handleAddToFavourites(dish)}
                  >
                    <span className="star-icon">★</span>
                    {favourites.some(fav => fav.name === dish.name) ? 'Favourited' : 'Add to Favourites'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KarnatakaDishes;
