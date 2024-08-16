import React, { useState, useEffect } from 'react';
import './TamilNaduDishes.css';
import Confetti from 'react-confetti';

const TamilNaduDishes = () => {
  const [favourites, setFavourites] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      name: 'Idly',
      className: 'dish1tn',
      recipe: { 
        label: 'Idly',
        url: 'https://youtu.be/VzgzG2guCZo?si=ufccF15rnm3sZhUF', 
        videoId: 'VzgzG2guCZo', 
        ingredients: [
          '2 cups of rice (preferably parboiled rice)',
          '1 cup of urad dal (split black gram)',
          '1/2 teaspoon of fenugreek seeds (optional)',
          'Salt to taste',
          'Water as needed',
          'Oil for greasing the idli molds'
        ],
        preparation: ['Rinse and soak 2 cups of rice and 1 cup of urad dal separately for 4-6 hours.',
                      ' Grind the urad dal into a smooth batter and the rice into a slightly coarse batter, then mix them together with salt.',
                      ' Let the batter ferment overnight or for 8-12 hours until it rises and becomes airy.',
                      ' Pour the batter into greased idli molds and steam for 10-12 minutes.',
                      ' Let the idlis cool slightly, then remove from molds and serve hot with sambar or chutney.'
        ]
      }
    },
    {
      name: 'Pongal',
      className: 'dish2tn',
      recipe: {
        label: 'Pongal',
        url: 'https://youtu.be/twXXnefqCmw?si=51507_XCdM59XUNs',
        videoId: 'twXXnefqCmw', 
        ingredients: [
          '1 cup rice , 1/2 cup moong dal',
          '1/4 teaspoon turmeric powder, 1/2 teaspoon black peppercorns',
          '1 teaspoon cumin seeds , 2 tablespoons ghee',
          '1 inch ginger, finely chopped 10-12 cashew nuts',
          ' A pinch of asafoetida (hing), 1 sprig curry leaves',
          'Salt, 4 cups water'
        ],
        preparation: [
          'Rinse 1 cup rice and 1/2 cup roasted moong dal. Pressure cook with 1/4 teaspoon turmeric powder and 4 cups water for 4-5 whistles.',
          ' Heat 2 tablespoons ghee. Add 1 teaspoon cumin seeds, 1/2 teaspoon black peppercorns, and 10-12 cashew nuts. Fry until cashews are golden.',
          ' Add 1 inch chopped ginger, a pinch of asafoetida, and 1 sprig curry leaves to the tempering. Sauté for a minute.',
          ' Mix the tempering into the cooked rice and dal. Add salt to taste.',
          ' Simmer on low heat for 5-7 minutes, adjusting consistency with hot water if needed. Serve hot with coconut chutney or sambar.'
        ]
      }
    },
    {
      name: 'Dosa',
      className: 'dish3tn',
      recipe: {
        label: 'Dosa',
        url: 'https://youtu.be/04ocg8FxJPc?si=8Abl0tV_3hvAr5dF',
        videoId: '04ocg8FxJPc', 
        ingredients: [
          '2 cups rice',
          '1/2 cup urad dal (split black gram)',
          '1/4 teaspoon fenugreek seeds',
          'Salt',
          'Water (as needed)',
          'Oil (for cooking)'
        ],
        preparation: [
          'Soak 2 cups rice, 1/2 cup urad dal, and 1/4 teaspoon fenugreek seeds for 4-6 hours. Grind into a smooth batter with water and ferment overnight with salt.',
          ' Stir the fermented batter, adding water to achieve a pouring consistency.',
          ' Heat a non-stick or cast-iron skillet over medium heat and lightly grease with oil.',
          ' Pour a ladleful of batter onto the skillet, spread thinly in a circular motion, and drizzle oil around the edges. Cook until golden and crispy.',
          ' Fold and serve hot with coconut chutney and sambar.'
        ]
      }
    },
    {
      name: 'Vada',
      className: 'dish4tn',
      recipe: {
        label: 'Vada',
        url: 'https://youtu.be/qgYTSsxe7W4?si=F3RuHHHnpv1RTUpW',
        videoId: 'qgYTSsxe7W4', 
        ingredients: [
          '1 cup urad dal (split black gram)',
          '1 small onion, finely chopped',
          '2 green chilies, finely chopped',
          '1 teaspoon cumin seeds',
          '1/2 teaspoon black pepper',
          'A few curry leaves, chopped',
          '1 tablespoon ginger, finely chopped',
          'Salt, Oil (for frying)'
        ],
        preparation: [
          'Soak 1 cup urad dal for 4-6 hours, then drain and grind into a smooth, thick batter.',
          ' Mix in 1 finely chopped onion, 2 chopped green chilies, 1 teaspoon cumin seeds, 1/2 teaspoon black pepper, chopped curry leaves, and 1 tablespoon finely chopped ginger. Add salt to taste.',
          ' Shape the batter into small rings and fry in hot oil until golden brown and crispy.',
          ' Drain on paper towels and serve hot with coconut chutney and sambar.'
        ]
      }
    },
    {
      name: 'Sambar',
      className: 'dish5tn',
      recipe: {
        label: 'Sambar',
        url: 'https://youtu.be/QfvFIO0Sqbw?si=f51x7JiHprpkxWOP',
        videoId: 'QfvFIO0Sqbw',
        ingredients: [
          '1 cup toor dal (split pigeon peas)',
          '1/2 teaspoon turmeric powder',
          '1 tablespoon tamarind paste',
          '2 cups mixed vegetables (carrot, potato, drumstick, brinjal)',
          '1 onion, chopped',
          '1 tomato, chopped',
          '2 tablespoons sambar powder',
          'Salt, Fresh coriander leaves, chopped'
        ],
        preparation: [
          'Cook 1 cup toor dal with 1/2 teaspoon turmeric powder until soft and mash.',
          ' Boil 2 cups mixed vegetables (carrot, potato, drumstick, brinjal), 1 chopped onion, and 1 chopped tomato until tender.',
          ' Add the mashed dal, 2 tablespoons sambar powder, salt, and 1 tablespoon tamarind paste to the vegetables. Simmer for 10-15 minutes.',
          ' Add the mashed dal, 2 tablespoons sambar powder, salt, and 1 tablespoon tamarind paste to the vegetables. Simmer for 10-15 minutes.',
          ' Add the tempering to the sambar, mix well, and garnish with fresh coriander leaves. Serve hot with rice or idli.'
        ]
      }
    },
    {
      name: 'Rasam',
      className: 'dish6tn',
      recipe: {
        label: 'Rasam',
        url: 'https://youtu.be/2BEJaFPEbyA?si=eu0cmDB8Qd7Ri8Dm',
        videoId: '2BEJaFPEbyA', 
        ingredients: [
          '1/2 cup toor dal (split pigeon peas)',
          '1 tomato, chopped',
          '1 teaspoon tamarind paste',
          '1/2 teaspoon turmeric powder',
          '1 teaspoon black pepper',
          '1 teaspoon cumin seeds, 2-3 garlic cloves',
          '1 green chili, slit',
          'Salt, Fresh coriander leaves, chopped'
        ],
        preparation: [
          'Cook 1/2 cup toor dal with 1/2 teaspoon turmeric powder until soft and mash.',
          ' Mix the mashed dal, 1 chopped tomato, 1 teaspoon tamarind paste, salt, and water to desired consistency in a pot. Bring to a boil.',
          ' Crush 1 teaspoon black pepper, 1 teaspoon cumin seeds, and 2-3 garlic cloves together. Add this mixture to the boiling rasam along with 1 slit green chili and a few curry leaves. Simmer for 10-15 minutes.',
          ' Heat 1 tablespoon ghee or oil, add 1 teaspoon mustard seeds, a pinch of asafoetida, and 2 dry red chilies. Fry until they splutter.',
          ' Add the tempering to the rasam, mix well, and garnish with fresh coriander leaves. Serve hot with rice.'
        ]
      }
    },
    {
      name: 'Kootu',
      className: 'dish7tn',
      recipe: {
        label: 'Kootu',
        url: 'https://youtu.be/hVgXr1p6Hgk?si=a_eXVjfdYPk3Kypn',
        videoId: 'hVgXr1p6Hgk', 
        ingredients: [
          'Snake Gourd: 1 medium-sized, peeled and chopped',
          'Moong Dal',
          'Grated Coconut',
          'Green Chilies',
          'Cumin Seeds, Mustard Seeds',
          'Turmeric Powder, Oil, Salt'
        ],
        preparation:[
          'Boil moong dal in water until soft (or pressure cook for 1-2 whistles).',
          'Grind grated coconut, green chilies, and cumin seeds into a smooth paste.',
          'Heat oil, add chopped snake gourd and turmeric powder, and cook until tender.',
          'Heat oil, add chopped snake gourd and turmeric powder, and cook until tender.',
          ' Heat oil, add mustard seeds, curry leaves, and optionally dried red chili. Pour over the Kootu and serve hot.'
        ]
      }
    },
    {
      name: 'Poriyal',
      className: 'dish8tn',
      recipe: {
        label: 'Poriyal',
        url: 'https://youtu.be/gkp4eSshvK4?si=zetUg9n2o1WNpvhq',
        videoId: 'gkp4eSshvK4', 
        ingredients: [
          'Vegetables (carrot, beans, cauliflower)',
          'Mustard Seeds',
          'Urad Dal',
          'Grated Coconut',
          'Oil, Curry Leaves',
          'Green Chilies, Salt'
        ],
        preparation: [
          'Heat oil, add mustard seeds, urad dal, and curry leaves, and sauté until mustard seeds splutter.',
          ' Add chopped carrot, beans, and cauliflower. Cook until vegetables are tender.',
          ' Mix in salt and optional green chilies if using.',
          ' Stir in grated coconut and cook for an additional 2-3 minutes.',
          ' Garnish with extra curry leaves if desired and serve hot as a side dish.'
        ]
      }
    },
    {
      name: 'Chicken Kuzhambu',
      className: 'dish9tn',
      recipe: {
        label: 'Chicken Kuzhambu',
        url: 'https://youtu.be/qHAMTdj9nPo?si=10mknqt56J96xV9k',
        videoId: 'qHAMTdj9nPo', 
        ingredients: [
          'Chicken: 500 grams',
          'Onions: finely chopped',
          'Tomatoes: chopped',
          'Coconut Milk: 1 cup',
          'Spices: Coriander powder, Cumin powder, Turmeric powder, Red chili powder',
          'Curry Leaves, Ginger-Garlic Paste',
          'Oil, Salt'
        ],
        preparation: [
          'Heat oil in a pan, add finely chopped onions, and saute until golden brown. Add ginger-garlic paste and cook for a minute.',
          ' Add tomatoes, turmeric powder, red chili powder, coriander powder, and cumin powder. Cook until tomatoes are soft and spices are well blended.',
          ' Add chicken pieces, mix well, and cook for 5-7 minutes until the chicken is lightly browned.',
          ' Pour in coconut milk, add salt, and bring to a simmer. Cook until chicken is tender and the curry thickens (about 20-25 minutes).',
          ' Add curry leaves, adjust seasoning, and simmer for a few more minutes. Serve hot with rice or bread.'
        ]
      }
    },
    {
      name: 'Payasam',
      className: 'dish10tn',
      recipe: {
        label: 'Payasam',
        url: 'https://youtu.be/5_cIM4PGd2U?si=tr7SJKCSl4kczmTr',
        videoId: '5_cIM4PGd2U', 
        ingredients: [
          'Milk',
          'Sugar',
          'Vermicelli',
          'Cashews',
          'Raisins',
          'Cardamom Powder',
          'Ghee'
        ],
        preparation: [
          'Heat 1 tablespoon of ghee in a pan. Add vermicelli and roast until golden brown.',
          ' In a large pot, bring milk to a boil. Add roasted vermicelli and cook until soft.',
          ' In a separate pan, heat the remaining ghee. Fry cashews and raisins until golden brown, then add to the payasam.',
          ' Stir in sugar and cardamom powder into the milk mixture. Cook for a few more minutes until the sugar is completely dissolved.',
          ' Let the payasam cool slightly before serving. It can be enjoyed warm or chilled.'
        ]
      }
    },
    {
      name: 'Chicken Biryani',
      className: 'dish11tn',
      recipe: {
        label: 'Biryani',
        url: 'https://youtu.be/Gk9GnGMaGHY?si=ffDrQoBhVqeXKIx7',
        videoId: 'Gk9GnGMaGHY',
        ingredients: [
          'Basmati Rice',
          'Chicken: 500 grams',
          'Yogurt',
          'Spices (biryani masala, turmeric, chilli)',
          'Mint leaves',
          'Coriander leaves',
          'Onions, Tomatoes',
          'Ghee or Oil, Salt'
        ],
        preparation: [
          'Mix chicken with yogurt, biryani masala, turmeric, red chili powder, and salt. Marinate for 30 minutes.',
          ' Boil basmati rice until 70% cooked, then drain.',
          '  Fry onions in ghee/oil, add tomatoes and spices, then cook until tomatoes soften. Add marinated chicken and cook until tender.',
          ' In a pot, layer partially cooked rice over the chicken. Add mint, coriander, and garam masala.',
          ' Cover tightly and cook on low heat for 20-25 minutes. Fluff and serve hot with raita or salad.'
        ]
      }
    },
    {
      name: 'Parotta',
      className: 'dish12tn',
      recipe: {
        label: 'Parotta',
        url: 'https://youtu.be/ehKuzPWNRic?si=ZYDSszFs4v_OHFwo',
        videoId: 'ehKuzPWNRic',
        ingredients: [
          'All-purpose flour',
          'Water',
          'Oil',
          'Salt'
        ],
        preparation: [
          'Mix flour, salt, and water to form a soft, elastic dough. Knead well, then let it rest for 30 minutes.',
          ' Divide the dough into small balls. Roll each ball into a thin circle on a floured surface.',
          ' Apply a thin layer of oil over the rolled dough. Fold into pleats, then roll up into a coil. Flatten slightly with your palm.',
          ' Heat a skillet or griddle. Cook each parotta on medium heat, applying ghee or oil, until golden brown and crispy on both sides.',
          ' Serve hot with curry or raita.'

        ]
      }
    },
    {
      name: 'Curd Rice',
      className: 'dish13tn',
      recipe: {
        label: 'Curd Rice',
        url: 'https://youtu.be/xaPiRmxRSc8?si=hvLSh58PFoVmc2Xw',
        videoId: 'xaPiRmxRSc8', 
        ingredients: [
          'Rice',
          'Yogurt',
          'Mustard seeds',
          'Cumin seeds, Ginger',
          'Curry leaves',
          'Fruits: (e.g., pomegranate seeds, grapes)',
          'Green chilies, Coriander Leaves',
          'Salt'
        ],
        preparation: [
          'Cook rice and let it cool slightly.',
          ' Combine the cooked rice with yogurt and salt.',
          ' Heat oil in a pan. Add mustard seeds, cumin seeds, chopped green chilies, curry leaves, and grated ginger. Sauté for a minute.',
          ' Pour the tempering over the rice and yogurt mixture. Mix well.',
          ' Gently fold in the mixed fruits and garnish with chopped coriander leaves. Serve chilled or at room temperature.'
        ]
      }
    },
    {
      name: 'Kari Dosai',
      className: 'dish14tn',
      recipe: {
        label: 'Kari Dosai',
        url: 'https://youtu.be/dkzV240CvD8?si=t3YgIt-bGi77k7j0',
        videoId: 'dkzV240CvD8',
        ingredients: [
          'Dosa batter',
          'Minced meat',
          'Onions',
          'Green chilies',
          'Spices (coriander, cumin, turmeric)',
          'Oil, Salt, Curry Leaves'
        ],
        preparation: [
          '',
        ]
      }
    },
    {
      name: 'Adai',
      className: 'dish15tn',
      recipe: {
        label: 'Adai',
        url: 'https://youtu.be/nhiN0K9F9Z4?si=TqkO48fCRU_nGx6g',
        videoId: 'nhiN0K9F9Z4', 
        ingredients: [
          'Rice',
          'Mixed lentils',
          'Red chilies',
          'Curry leaves',
          'Salt'
        ],
        preparation: 'Soak rice and lentils separately. Grind with chilies and curry leaves to a coarse batter. Ferment for a few hours. Spread thick on a hot griddle. Cook until golden and crispy.'
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
    <div className="tamilnadu-dishes-container">
      <h1 className={`title ${selectedDish ? 'hidden' : ''}`}>TamilNadu Recipes</h1>
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
              <p>{selectedDish.recipe.preparation}</p>
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

export default TamilNaduDishes;
