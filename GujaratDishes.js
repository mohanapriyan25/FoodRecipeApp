import React, { useState, useEffect } from 'react';
import './GujaratDishes.css';
import Confetti from 'react-confetti';

const GujaratDishes = () => {
  const [favourites, setFavourites] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      name: 'Dhokla',
      className: 'dish1gj',
      recipe: {
        label: 'Dhokla',
        url: 'https://youtu.be/w_2eb9uaXns?si=cVaTvv5P43_FP2q4',
        videoId: 'w_2eb9uaXns',
        ingredients: [
          'Besan (gram flour)',
          'Curd',
          'Ginger-green chili paste',
          'Mustard seeds, Sesame seeds',
          'Turmeric powder,Baking soda',
          'Salt, Oil'
        ],
        preparation: [
          'In a bowl, mix besan, curd, ginger-green chili paste, turmeric, and salt. Add water to make a smooth batter.',
          'Add baking soda to the batter and mix well. Let it rest for 10-15 minutes.',
          'Pour the batter into a greased steamer tray or pan.',
          'Steam the batter in a steamer or large pot for 15-20 minutes, or until a toothpick inserted comes out clean.',
          'In a small pan, heat oil and add mustard seeds, sesame seeds, and curry leaves. Once they splutter, pour over the steamed dhokla.',
          'Cut into pieces and serve hot, garnished with chopped coriander and grated coconut if desired.'
        ]
      }
    },
    {
      name: 'Khandvi',
      className: 'dish2gj',
      recipe: {
        label: 'Khandvi',
        url: 'https://youtu.be/VfEH-rmXlHQ?si=bi3X5mLycA14rk58', 
        videoId: 'VfEH-rmXlHQ', 
        ingredients: [
          'Besan (gram flour)',
          'Curd',
          'Ginger-green chili paste',
          'Mustard seeds, Sesame seeds',
          'Turmeric powder,Baking soda',
          'Salt, Oil'
        ],
        preparation: [
          'In a bowl, mix besan, curd, water, ginger-green chili paste, turmeric powder, and salt to form a smooth batter.',
          'Cook the batter in a non-stick pan over medium heat, stirring continuously, until it thickens and starts to leave the sides of the pan.',
          'Pour the thickened batter onto a greased surface and spread it thinly. Let it cool slightly.',
          'Cut the set batter into strips and roll them up tightly.',
          'Heat oil in a pan, add mustard seeds, sesame seeds, and curry leaves, and fry briefly. Pour this tempering over the khandvi rolls.',
          'Cut into bite-sized pieces and serve with chutney.'
        ]
      }
    },
    {
      name: 'Thepla',
      className: 'dish3gj',
      recipe: {
        label: 'Thepla',
        url: 'https://youtu.be/iPO-8KVOpvg?si=AH0_miFjvH-8mPyt', 
        videoId: 'iPO-8KVOpvg', 
        ingredients: [
          'Whole wheat flour',
          'Besan (gram flour)',
          'Fenugreek leaves',
          'Cumin seeds,Turmeric powder',
          'Chilli powder',
          'Salt, Oil'
        ],
        preparation: [
          'In a large bowl, combine whole wheat flour, besan, chopped fenugreek leaves, cumin seeds, turmeric powder, red chili powder, ajwain, and salt.',
          'Gradually add water and knead to form a smooth dough. Let it rest for 10 minutes.',
          'Divide the dough into small balls. Roll each ball into a thin circle on a floured surface.',
          'Heat a tava or griddle and cook each thepla with a little oil until golden brown on both sides.',
          'Serve hot with yogurt, pickle, or any side dish of your choice.'
        ]
      }
    },
    {
      name: 'Fafda',
      className: 'dish4gj',
      recipe: {
        label: 'Fafda',
        url: 'https://youtu.be/NJ5Blr2oUu0?si=olUAFgmQjdAXXS2-', 
        videoId: 'NJ5Blr2oUu0', 
        ingredients: [
          'Besan (gram flour)',
          'Rice flour',
          'Turmeric powder',
          'Red chili powder',
          'Baking soda',
          'Salt, Oil'
        ],
        preparation: [
          'In a bowl, mix besan, rice flour, carom seeds, turmeric powder, red chili powder, baking soda, and salt.',
          'Gradually add water to form a thick, smooth batter.',
          'Heat oil in a deep frying pan. Pour small portions of batter into the hot oil, spreading them into thin strips.',
          'Fry until the fafda becomes crispy and golden brown. Remove and drain on paper towels.',
          'Allow to cool slightly before serving. Enjoy with chutney or pickle.'
        ]
      }
    },
    {
      name: 'Undhiyu',
      className: 'dish5gj',
      recipe: {
        label: 'Undhiyu',
        url: 'https://youtu.be/76WP69qtDi8?si=eFvNzLnmm6PGH2im', 
        videoId: '76WP69qtDi8 ', 
        ingredients: [
          'Raw papaya (diced)',
          'Baby potatoes, Peas',
          'Eggplant (diced)',
          'Yam, Fenugreek leaves',
          'Ginger-green chili paste',
          'Turmeric powder, Cumin seeds',
          'Salt, Oil'
        ],
        preparation: [
          'Heat oil in a large pan. Add cumin seeds and allow them to splutter.',
          'Add ginger-green chili paste and sauté for a minute.',
          'Add raw papaya, baby potatoes, eggplant, yam, and peas. Stir well to mix.',
          'Add turmeric powder, salt, and fenugreek leaves. Mix everything together.',
          'Cover and cook on low heat until all vegetables are tender and flavors are blended.',
          'Serve hot with puris or rotis.'
        ]
      }
    },
    {
      name: 'Handvo',
      className: 'dish6gj',
      recipe: {
        label: 'Handvo',
        url: 'https://youtu.be/RXtUG5dga08?si=u1tMo-C4UY4g-28J', 
        videoId: 'RXtUG5dga08', 
        ingredients: [
          'Rice',
          'Urad dal, chana dal',
          'Bottle gourd (grated)',
          'Yogurt',
          'Mustard seeds, Cumin seeds, Sesame seeds',
          'Turmeric powder,Red chili powder',
          'Salt, Oil'
        ],
        preparation: [
          'Soak rice, urad dal, and chana dal overnight. Drain and grind into a smooth batter with yogurt.',
          'Mix in grated bottle gourd, turmeric powder, red chili powder, and salt.',
          'Pour the batter into a greased baking dish.',
          'Heat oil, add mustard seeds, cumin seeds, and sesame seeds. Fry briefly and pour over the batter.',
          'Bake in a preheated oven at 180°C (350°F) for 40-45 minutes or until golden and cooked through.',
          'Cool slightly before cutting into pieces. Serve hot.'
        ]
      }
    },
    {
      name: 'Gathiya',
      className: 'dish7gj',
      recipe: {
        label: 'Gathiya',
        url: 'https://youtu.be/XlN4imymIkQ?si=8Ie_yZkxNdKeQjv1',
        videoId: 'XlN4imymIkQ',
        ingredients: [
          'Besan (gram flour)',
          'Rice flour',
          'Turmeric powder, Red chili powder',
          'Baking soda',
          'Salt, Oil'
        ],
        preparation: [
          'Combine besan, rice flour, ajwain, turmeric powder, red chili powder, baking soda, and salt in a bowl.',
          'Gradually add water to make a smooth dough.',
          'Heat oil in a deep frying pan. Shape the dough into thin strips or use a gathiya maker.',
          'Fry the strips in hot oil until crispy and golden brown.',
          'Drain on paper towels and let cool before serving.'
        ]
      }
    },
    {
      name: 'Mohanthaal',
      className: 'dish8gj',
      recipe: {
        label: 'Mohanthaal',
        url: 'https://youtu.be/ZcnEDtJgTX8?si=udftHywmsGdDq66Y',
        videoId: 'ZcnEDtJgTX8',
        ingredients: [
          'Besan (Gram flour)',
          'Ghee',
          'Sugar',
          'Cardamom',
          'Cashews',
          'Almonds'
        ],
        preparation: [
          'Mix gram flour with a small amount of milk to form a crumbly texture. Roast in ghee until golden brown and aromatic.',
          ' Dissolve sugar in water and cook until it reaches a one-string consistency. Add cardamom powder for flavor.',
          ' Slowly pour the sugar syrup into the roasted gram flour while stirring continuously to avoid lumps.',
          ' Spread the mixture onto a greased plate or tray, flattening it out evenly. Allow it to cool.',
          ' Once set, cut into squares or diamonds and serve as a sweet treat.'
        ]
      }
    },
    {
      name: 'Dabeli',
      className: 'dish9gj',
      recipe: {
        label: 'Dabeli',
        url: 'https://youtu.be/RcgKWSdLMGs?si=zBfDymVe44xiXbJ4',
        videoId: 'RcgKWSdLMGs',
        ingredients: [
          'Pav (bread rolls)',
          'Boiled and mashed potatoes',
          'Dabeli masala',
          'Tamarind chutney',
          'Garlic chutney',
          'Pomegranate seeds',
          'Roasted peanuts',
          'Chopped onions and coriander',
          'Oil'
        ],
        preparation: [
          'Mix boiled and mashed potatoes with dabeli masala.',
          'Cut the pav into halves and apply tamarind chutney and garlic chutney on each half.',
          'Spread the spiced potato mixture on one half of each pav.',
          'Top with pomegranate seeds, roasted peanuts, chopped onions, and coriander.',
          'Cover with the other half of the pav and lightly toast in oil until golden brown.',
          'Serve hot with extra chutney and garnishes if desired.'
        ]
      }
    },
    {
      name: 'Sev Tameta',
      className: 'dish10gj',
      recipe: {
        label: 'Sev Tameta',
        url: 'https://youtu.be/Sm8EWmYNI5Q?si=810eGTwxm7D16952',
        videoId: 'Sm8EWmYNI5Q',
        ingredients: [
          'Tomatoes, Onion (chopped)',
          'Ginger-garlic paste',
          'Cumin seeds',
          'Turmeric powder, Red chili powder',
          'Garam masala',
          'Sev, Salt, Oil'
        ],
        preparation: [
          'Heat oil in a pan and add cumin seeds. Once they splutter, add ginger-garlic paste and sauté until aromatic.',
          'Add chopped onions and cook until translucent.',
          'Add tomatoes, turmeric powder, red chili powder, garam masala, and salt. Cook until tomatoes are soft and the oil starts to separate.',
          'Add sev and mix well. Cook for a few more minutes.',
          'Serve hot, garnished with additional sev and fresh coriander if desired.'
        ]
      }
    },
    {
      name: 'Khaman',
      className: 'dish11gj',
      recipe: {
        label: 'Khaman',
        url: 'https://youtu.be/-A1NTGmld2Q?si=R7UigO-XR5n9YSwU',
        videoId: '-A1NTGmld2Q',
        ingredients: [
          'Besan (gram flour)',
          'Curd',
          'Ginger-green chili paste',
          'Mustard seeds, Sesame seeds',
          'Turmeric powder,Baking soda',
          'Salt, Oil'
        ],
        preparation: [
          'Mix besan, yogurt, baking soda, turmeric powder, and salt into a smooth batter.',
          'Pour the batter into a greased steaming tray.',
          'Steam for 15-20 minutes or until a toothpick comes out clean.',
          'Heat oil and add mustard seeds, sesame seeds, and curry leaves. Fry until aromatic and pour over the steamed khaman.',
          'Cut into pieces and serve hot with chutney.'
        ]
      }
    },
    {
      name: 'Patra',
      className: 'dish12gj',
      recipe: {
        label: 'Patra',
        url: 'https://youtu.be/y6On70lP7Dg?si=EGRfhcQYI33E1BYE',
        videoId: 'y6On70lP7Dg',
        ingredients: [
          'Colocasia leaves',
          'Besan (gram flour)',
          'Ginger-green chili paste',
          'Turmeric powder',
          'Coriander powder',
          'Sugar, Salt, Oil'
        ],
        preparation: [
          'Mix besan, ginger-green chili paste, turmeric powder, coriander powder, sugar, and salt with water to make a thick paste.',
          'Spread the paste evenly on colocasia leaves, then roll them tightly.',
          'Steam the rolled leaves for 15-20 minutes until firm.',
          'Slice the steamed rolls into pieces.',
          'Heat oil and lightly fry the slices until crispy. Serve hot with chutney.'
        ]
      }
    },
    {
      name: 'Bhajia',
      className: 'dish13gj',
      recipe: {
        label: 'Bhajia',
        url: 'https://youtu.be/qfZ3axZV48A?si=na7w9kbQV88lHFVJ', 
        videoId: 'qfZ3axZV48A', 
        ingredients: [
          'Besan (gram flour)',
          'Rice flour',
          'Vegetables (potatoes, onions, etc.)',
          'Turmeric powder',
          'Red chili powder',
          'Salt, Oil'
        ],
        preparation: [
          'Mix besan, rice flour, turmeric powder, red chili powder, and salt in a bowl.',
          'Add water gradually to form a thick batter.',
          'Dip sliced vegetables into the batter and fry in hot oil until crispy and golden brown.',
          'Remove from oil and drain on paper towels.',
          'Serve hot with chutney or sauce.'
        ]
      }
    },
    {
      name: 'Basundi',
      className: 'dish14gj',
      recipe: {
        label: 'Basundi',
        url: 'https://youtu.be/JIcW-vCbED4?si=EGDeaCZ_gei_1uxy', 
        videoId: 'JIcW-vCbED4', 
        ingredients: [
          'Full cream milk',
          'Sugar',
          'Chopped nuts (almonds, cashews, etc.)',
          'Cardamom powder',
          'Saffron strands (optional)'
        ],
        preparation: [
          'Pour 1 liter of full cream milk into a heavy-bottomed pan. Bring it to a boil over medium heat. Reduce the heat to low and let it simmer, stirring occasionally, until the milk reduces by about half. This process takes around 45-60 minutes.',
          ' Once the milk has reduced, add 1/2 cup of sugar to the pan. Stir continuously until the sugar is completely dissolved and the milk thickens further.',
          ' Mix in 1/4 teaspoon of cardamom powder. If using saffron, soak a few saffron strands in a tablespoon of warm milk and add it to the mixture. Stir well.',
          ' Add 1/4 cup of chopped nuts (such as almonds and cashews) to the mixture. Continue to cook for an additional 5 minutes, allowing the nuts to slightly soften and blend with the milk.',
          ' Remove the pan from heat and let the Basundi cool to room temperature. Once cooled, transfer it to a serving bowl and refrigerate.',
          ' Serve chilled, garnished with additional chopped nuts if desired. Enjoy your refreshing Basundi.'
        ]
      }
    },
    {
      name: 'Shrikhand',
      className: 'dish15gj',
      recipe: {
        label: 'Shrikhand',
        url: 'https://youtu.be/BfQ6c7hEtmI?si=gKOCn6fbK9r1NA4G',
        videoId: '/BfQ6c7hEtmI',
        ingredients: [
          'Plain yogurt',
          'Powdered sugar',
          'Cardamom powder',
          'Chopped nuts',
          'Saffron strands (optional)'
        ],
        preparation: [
          'Take 2 cups of plain yogurt and strain it using a cheesecloth or a fine mesh strainer to remove excess whey. Allow it to drain for about 2-3 hours or until you have thick Greek-style yogurt.',
          ' In a mixing bowl, combine the thickened yogurt with 1/2 cup of powdered sugar. Stir well to blend the sugar completely into the yogurt.',
          ' Mix in 1/4 teaspoon of cardamom powder for flavor. Optionally, add a few saffron strands soaked in 1 tablespoon of warm milk for extra aroma and color.',
          ' Gently fold in 1/4 cup of finely chopped nuts (such as almonds, cashews, and pistachios) and 1/2 cup of diced fruit like mango or berries, if desired. Mix evenly.',
          ' Cover the bowl with plastic wrap and refrigerate for at least 2 hours to allow the flavors to meld and the shrikhand to chill.',
          ' Serve the chilled shrikhand in individual bowls, garnished with additional nuts or fruit if desired. Enjoy as a sweet and creamy dessert!'
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
    <div className="gujarat-dishes-container">
      <h1 className={`title ${selectedDish ? 'hidden' : ''}`}>Gujarat Recipes</h1>
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

export default GujaratDishes;
