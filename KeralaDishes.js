import React, { useState, useEffect } from 'react';
import './KeralaDishes.css';
import Confetti from 'react-confetti';

const KeralaDishes = () => {
  const [favourites, setFavourites] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      name: 'Puttu',
      className: 'dish1kr',
      recipe: { 
        label: 'Puttu',
        url: 'https://youtu.be/hRxU0oS_Rck?si=u1XrVsXOvh0AUMtS',
        videoId: 'hRxU0oS_Rck', 
        ingredients: [
          'Rice flour',
          'Grated Coconut',
          'Salt',
          'Water',
          'Puttu Maker'
        ],
        preparation: [
          'Dry roast 2 cups of rice flour for 5-7 minutes. Cool it and mix with a pinch of salt.',
          ' Gradually sprinkle water over the flour, mixing until it reaches a crumbly texture.',
          ' In the puttu maker, layer 2 tablespoons of grated coconut, followed by the moistened rice flour. Repeat layers, ending with coconut.',
          ' Attach puttu maker to a steamer or pressure cooker. Steam for 7-10 minutes.',
          ' Push out the steamed puttu and serve with banana, sugar and ghee, or kadala curry.'
        ]
      }
    },
    {
      name: 'Appam',
      className: 'dish2kr',
      recipe: {
        label: 'Appam',
        url: 'https://youtu.be/yRpYqehvZ9o?si=sme-yzTunU9SsseP',
        videoId: 'yRpYqehvZ9o', 
        ingredients: [
          'Rice',
          'Grated Coconut',
          'Yeast',
          'Sugar',
          'Salt'
        ],
        preparation: [
          'Soak 1 cup of raw rice for 4-5 hours. Grind with 1/2 cup cooked rice and 1/2 cup grated coconut to a smooth batter.',
          ' Dissolve 1 teaspoon yeast and 1 tablespoon sugar in warm water. Add to the batter and ferment overnight.',
          ' Add salt to the fermented batter and adjust the consistency with water.',
          ' Pour batter into a heated appam pan, swirl to spread, cover, and cook for 2-3 minutes.',
          ' Serve hot appams with coconut milk, vegetable stew or curry.'
        ]
      }
    },
    {
      name: 'Fish Curry',
      className: 'dish3kr',
      recipe: {
        label: 'Fish Curry',
        url: 'https://youtu.be/uRBHVYYOuWo?si=ZtrI4MCnZMoUdLYt0',
        videoId: 'uRBHVYYOuWo', 
        ingredients: [
          '500g fish, coconut oil',
          'mustard seeds, curry leaves',
          'ginger-garlic paste, green chilies',
          'turmeric powder, chilli powder, coriander powder',
          'tamarind, soaked in water, Salt'
        ],
        preparation: [
          'Soak tamarind in water and extract the juice. Set aside.',
          ' Heat 2 tablespoons of coconut oil. Add 1 teaspoon mustard seeds and let them splutter. Add a sprig of curry leaves, 1 cup sliced shallots, 1 tablespoon ginger-garlic paste, and 2-3 slit green chilies. Sauté until shallots are golden.',
          ' Add 1 teaspoon turmeric powder, 1 tablespoon chili powder, and 1 tablespoon coriander powder. Saute for a minute.',
          ' Add the tamarind water and salt to taste. Bring to a boil.',
          ' Add the fish pieces to the boiling curry. Cook on medium heat until the fish is cooked through.',
          ' Reduce the heat and let the curry simmer for a few minutes until it thickens to your desired consistency.',
          ' Turn off the heat and let the curry rest for a few minutes. Serve hot with rice or appam.'
        ]
      }
    },
    {
      name: 'Parotta',
      className: 'dish4kr',
      recipe: {
        label: 'Parotta',
        url: 'https://youtu.be/ehKuzPWNRic?si=itQc5lmu9yc_nv1t',
        videoId: 'ehKuzPWNRic', 
        ingredients: [
          'All-purpose flour',
          'Water',
          'Oil',
          'Salt'
        ],
        preparation: [
          'Mix 2 cups all-purpose flour, 1 teaspoon sugar, 1 teaspoon salt, and 2 tablespoons oil. Gradually add water and knead into a soft dough. Rest for 2 hours.',
          ' Divide the dough into balls, roll each ball into a thin sheet, and apply oil. Fold into pleats and roll into spirals. Flatten each spiral into a disc.',
          ' Heat a tawa or skillet. Cook each parotta with oil until golden brown on both sides. ',
          ' Gently clap the cooked parottas between your hands to separate the layers.',
          ' Serve hot with curry or your favorite side dish.'
        ]
      }
    },
    {
      name: 'Prawn Curry',
      className: 'dish5kr',
      recipe: {
        label: 'Prawn Curry',
        url: 'https://youtu.be/LjHHgoQ6kn4?si=P2dt9Kfh3p4TQ-QT',
        videoId: 'LjHHgoQ6kn4',
        ingredients: [
          'Prawns',
          'Coconut',
          'Onions',
          'Tomatoes',
          'Spices (coriander, cumin, turmeric)',
          'Curry leaves',
          'Salt'
        ],
        preparation: [
          'Heat 2 tablespoons of coconut oil in a pan. Add 1 teaspoon mustard seeds and let them splutter. Add a sprig of curry leaves, 1 cup sliced onions, 1 tablespoon ginger-garlic paste, and 2-3 slit green chilies. Saute until the onions are golden brown.',
          ' Add 1 teaspoon turmeric powder, 1 tablespoon chili powder, and 1 tablespoon coriander powder. Saute for a minute.',
          ' Add tamarind water (from the soaked tamarind) and salt to taste. Bring to a boil. Add 1 cup coconut milk and mix well.',
          ' Add the cleaned prawns to the boiling curry. Cook on medium heat until the prawns are cooked through (about 5-7 minutes).',
          ' Once the prawns are cooked and the curry has thickened to your desired consistency, turn off the heat. Serve hot with rice or appam.'
        ]
      }
    },
    {
      name: 'Beef Fry',
      className: 'dish6kr',
      recipe: {
        label: 'Beef Fry',
        url: 'https://youtu.be/E1S7_VvVWpo?si=aHxXT83_vZOyahU0',
        videoId: 'E1S7_VvVWpo', 
        ingredients: [
          'Beef',
          'Onions',
          'Green chilies',
          'Coconut',
          'Spices (coriander, cumin, turmeric)',
          'Curry leaves',
          'Salt'
        ],
        preparation: [
          'Marinate 500g beef with 1 teaspoon turmeric powder, 1 tablespoon chili powder, 1 tablespoon coriander powder, salt, and 1 tablespoon ginger-garlic paste. Let it sit for at least 30 minutes.',
          ' Pressure cook the marinated beef with a little water for 3-4 whistles or until tender. Set aside.',
          ' Heat 2 tablespoons coconut oil. Add 1 teaspoon mustard seeds, 1 sprig curry leaves, 1 cup sliced onions, and 2-3 slit green chilies. Saute until onions are golden brown.',
          ' Add the cooked beef to the pan. Fry on medium heat until the beef is dry and browned.',
          ' Add 1 teaspoon garam masala and 1 teaspoon black pepper powder. Mix and fry for 2-3 minutes.',
          ' Serve hot with rice or parotta.'
        ]
      }
    },
    {
      name: 'Sadhya',
      className: 'dish7kr',
      recipe: {
        label: 'Sadhya',
        url: 'https://youtu.be/FrD86VNrvhg?si=PR9cNlFO4hZZbrH3',
        videoId: 'FrD86VNrvhg', 
        ingredients: [
          'Rice',
          'Various curries (e.g., Avial, Kalan, Pachadi)',
          'Pickles',
          'Papadam'
        ],
        preparation: [
          'Rice: Cook red or white rice and set aside.',
          ' Parippu: Cook moong dal with turmeric and water until soft. Add a tempering of mustard seeds, curry leaves, and grated coconut.',
          ' Sambar: Cook lentils and mixed vegetables with tamarind, sambar powder, and spices.',
          ' Avial: Cook mixed vegetables with turmeric, salt, and a coconut-yogurt mixture. Add curry leaves and coconut oil.',
          ' Thoran: Stir-fry finely chopped vegetables with grated coconut, mustard seeds, and curry leaves.',
          ' Olan: Follow individual recipes for kalan, erissery, pachadi/kichadi, inji puli, and various pickles.',
          ' Arrange all the dishes on a banana leaf, with rice in the center. Serve papadam, banana chips, and payasam as accompaniments.'
        ]
      }
    },
    {
      name: 'Avial',
      className: 'dish8kr',
      recipe: {
        label: 'Avial',
        url: 'https://youtu.be/izYnq57F8wI?si=LSrWt6bxHuoMwXRT',
        videoId: 'izYnq57F8wI', 
        ingredients: [
          'Vegetables (carrot, beans, drumstick)',
          'Coconut',
          'Cumin',
          'Curd',
          'Curry leaves',
          'Salt'
        ],
        preparation: [
          'Cut the mixed vegetables into uniform pieces. Cook them in a pot with water and 1/2 teaspoon turmeric powder until tender but not mushy.',
          ' Grind 1 cup grated coconut, 2 green chilies, and 1 tablespoon cumin seeds into a coarse paste.',
          ' Add the coconut paste to the cooked vegetables. Mix well and cook for a few minutes.',
          ' Lower the heat and stir in 1 cup plain yogurt. Cook gently without boiling, to prevent curdling.',
          ' Heat 2 tablespoons coconut oil in a small pan. Add 1 sprig curry leaves and let them sizzle. Pour this tempering over the avial.',
          ' Mix well and serve hot with rice or as part of a Kerala Sadhya.'
        ]
      }
    },
    {
      name: 'Palada Payasam',
      className: 'dish9kr',
      recipe: {
        label: 'Palada Payasam',
        url: 'https://youtu.be/WKVBbWbhL9w?si=eSelYjHeO8RSpeIk7',
        videoId: 'WKVBbWbhL9w', 
        ingredients: [
          'Palada or ada',
          'Vermicelli',
          'Milk',
          'Sugar',
          'Cashews',
          'Raisins',
          'Cardamom',
          'Ghee'
        ],
        preparation: [
          'Soak palada in water for 10 minutes (or cook ada until tender). Drain and set aside.',
          ' Boil 4 cups of milk in a pan and simmer on low heat.',
          ' Add the cooked palada/ada to the simmering milk. Cook until it thickens (about 15-20 minutes).',
          ' Stir in 1 cup sugar and cook until it dissolves.',
          ' Heat 2 tablespoons ghee, fry cashews and raisins, and add them to the payasam. Serve hot or cold.'
        ]
      }
    },
    {
      name: 'Thoran',
      className: 'dish10kr',
      recipe: {
        label: 'Thoran',
        url: 'https://youtu.be/RjehiDijtIs?si=s2u2LNpk8Uj3XSsz',
        videoId: 'RjehiDijtIs', 
        ingredients: [
          'Vegetables (carrot, beans, cabbage)',
          'Coconut',
          'Mustard seeds',
          'Urad dal',
          'Curry leaves',
          'Salt'
        ],
        preparation: [
          'Finely chop the vegetables. Cook them in a pan with a little water and 1/2 teaspoon turmeric powder until tender.',
          ' Grind 1 cup grated coconut with 2 green chilies and 1 teaspoon cumin seeds into a coarse paste.',
          ' Heat 2 tablespoons coconut oil in a pan. Add 1 teaspoon mustard seeds and let them splutter. Add 1 sprig curry leaves.',
          ' Add the cooked vegetables to the pan. Mix in the coconut paste and salt. Stir-fry for a few minutes until well combined.',
          ' Serve hot with rice or as part of a Kerala meal.'
        ]
      }
    },
    {
      name: 'Kadala Curry',
      className: 'dish11kr',
      recipe: {
        label: 'Kadala Curry',
        url: 'https://youtu.be/56_PdZiLpVk?si=YRVyWenLNJA7K-Q9',
        videoId: '56_PdZiLpVk', 
        ingredients: [
          'Chickpeas',
          'Coconut',
          'Onions',
          'Tomatoes',
          'Spices (coriander, cumin, turmeric)',
          'Curry leaves',
          'Salt'
        ],
        preparation: [
          'Drain and rinse the soaked chickpeas. Cook them in a pressure cooker with enough water for 3-4 whistles or until tender. Set aside.',
          ' Grind 1 cup grated coconut with 1 teaspoon cumin seeds into a smooth paste.',
          ' Heat 2 tablespoons coconut oil in a pan. Add chopped onions and sauté until golden brown. Add 1 tablespoon ginger-garlic paste and 2 slit green chilies. Saute for a minute.',
          ' Add 1 teaspoon coriander powder, 1/2 teaspoon turmeric powder, 1 tablespoon chili powder, and salt. Stir well and cook for a few minutes.',
          ' Add the cooked chickpeas to the pan. Stir in the coconut paste and add water to reach your desired consistency. Simmer for 10-15 minutes.',
          ' Add 1 teaspoon garam masala and mix well. Cook for a few more minutes. Serve hot with puttu, appam, or rice.'
        ]
      }
    },
    {
      name: 'Nadan Kozhi Curry',
      className: 'dish12kr',
      recipe: {
        label: 'Nadan Kozhi Curry',
        url: 'https://youtu.be/JsZKu2L6eAc?si=rw1axdYLPVqbLA7S',
        videoId: 'JsZKu2L6eAc', 
        ingredients: [
          'Chicken',
          'Onions',
          'Tomatoes',
          'Coconut',
          'Spices (coriander, cumin, turmeric)',
          'Curry leaves',
          'Salt'
        ],
        preparation: [
          'Heat 2 tablespoons coconut oil in a large pan. Add 1 teaspoon mustard seeds and let them splutter. Add 1 sprig curry leaves and 1 large chopped onion. Saute until the onion is golden brown.',
          ' Add 1 tablespoon ginger-garlic paste and 2-3 slit green chilies. Saute for a minute. Then add 1 teaspoon turmeric powder, 1 tablespoon chili powder and 1 tablespoon coriander powder. Mix well.',
          ' Add the chicken pieces and salt to the pan. Cook on medium heat until the chicken is browned and cooked through.',
          ' Grind 1 cup grated coconut into a smooth paste with a little water.',
          ' Add the coconut paste to the pan and mix well. Add 1/2 cup water to adjust the consistency of the curry. Simmer for 10-15 minutes until the chicken is fully cooked and the curry is thickened.',
          ' Add 1 teaspoon garam masala and stir well. Cook for a few more minutes. Serve hot with rice, appam, or parotta.'
        ]
      }
    },
    {
      name: 'Erissery',
      className: 'dish13kr',
      recipe: {
        label: 'Erissery',
        url: 'https://youtu.be/xoAi7Lx8nzc?si=__zK_yhsRLwPAVF0',
        videoId: 'xoAi7Lx8nzc', 
        ingredients: [
          'Pumpkin',
          'Coconut',
          'Red chilies',
          'Mustard seeds',
          'Curry leaves',
          'Salt'
        ],
        preparation: [
          'In a pot, cook the soaked black-eyed peas with enough water until tender. Add the cubed pumpkin and cook until both are soft. Drain excess water, if any.',
          ' Grind 1 cup grated coconut, 2-3 green chilies, and 1 teaspoon cumin seeds into a coarse paste.',
          ' Add the coconut paste, 1/2 teaspoon turmeric powder, 1 tablespoon chili powder, and salt to the cooked pumpkin and beans. Mix well and cook for a few minutes until the flavors meld.',
          ' Heat 2 tablespoons coconut oil in a small pan. Add 1 teaspoon mustard seeds and let them splutter. Add 1 sprig curry leaves and saute briefly.',
          ' Pour the tempering over the Erissery and mix well. Serve hot with rice or as part of a Kerala meal.'
        ]
      }
    },
    {
      name: 'Kappa',
      className: 'dish14kr',
      recipe: {
        label: 'Kappa',
        url: 'https://youtu.be/UbhXo6kmT2M?si=gbXMyKJbeZjn1iyH',
        videoId: 'UbhXo6kmT2M',
        ingredients: [
          'Tapioca (Kappa)',
          'Coconut',
          'Onions',
          'Green chilies',
          'Mustard seeds',
          'Curry leaves',
          'Salt'
        ],
        preparation: [
          'Peel and cut 500g tapioca into cubes. Boil them with salt and 1/2 teaspoon turmeric powder until soft. Drain the water and set aside.',
          ' Grind 1 cup grated coconut, 2-3 green chilies, and 1 teaspoon cumin seeds into a coarse paste.',
          ' Mix the coconut paste with the cooked tapioca. Cook on low heat for a few minutes, stirring occasionally.',
          ' Heat 2 tablespoons coconut oil. Add 1 sprig curry leaves and saute for a few seconds.',
          ' Pour the tempering over the tapioca mixture and mix well. Serve hot.'
        ]
      }
    },
    {
      name: 'Unniyappam',
      className: 'dish15kr',
      recipe: {
        label: 'Unniyappam',
        url: 'https://youtu.be/ad2p_WJW7gI?si=76tK35P7cbnYENA4',
        videoId: 'ad2p_WJW7gI',
        ingredients: [
          'Rice flour',
          'Jaggery',
          'Bananas',
          'Coconut',
          'Cardamom',
          'Baking soda',
          'Oil for frying'
        ],
        preparation: [
          'In a bowl, mix 1 cup rice flour, 1/2 cup melted jaggery, 1 mashed banana, 1/2 teaspoon cardamom powder, and 2 tablespoons grated coconut. Add water as needed to make a thick batter. Optional: Add 1/4 teaspoon baking soda for fluffiness. Let the batter rest for 30 minutes.',
          ' Heat an appe pan (aebleskiver pan) and add a little ghee or oil to each cavity.',
          ' Pour the batter into each cavity, filling it up to about 3/4 full.',
          ' Cook on medium heat until the edges start to brown. Flip the unniyappams using a skewer or fork and cook the other side until golden brown.',
          ' Remove from the pan and serve warm.'
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
    <div className="kerala-dishes-container">
      <h1 className={`title ${selectedDish ? 'hidden' : ''}`}>Kerala Recipes</h1>
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

export default KeralaDishes;
