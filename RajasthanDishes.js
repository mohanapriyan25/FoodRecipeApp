import React, { useState, useEffect } from 'react';
import './RajasthanDishes.css';
import Confetti from 'react-confetti';

const RajasthanDishes = () => {
  const [favourites, setFavourites] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      name: 'Dal Baati Churma',
      className: 'dish1rj',
      recipe: {
        label: 'Dal Baati Churma',
        url: 'https://youtu.be/2YIM5-4XIHQ?si=rrROz2DRMJ9WAqXj',
        videoId: '2YIM5-4XIHQ',
        ingredients: [
          'For Dal: Toor Dal, Moong Dal, chana dal, Urad Dal, Onion, Tomatoes, Turmeric and Red Chilli powder, Cumin seeds, Ghee',
          'For Baati: Whole Wheat Flour, Semolina (Rava), Ghee, Salt',
          'For Churma: Whole Wheat Flour, Semolina (Rava), Jaggery, Ghee, Cardamon powder'
        ],
        preparation: [
          'Cook the Dal: Mix and pressure cook toor dal, chana dal, moong dal, and urad dal with turmeric and salt until soft. Temper with cumin, mustard seeds, garlic, ginger, onions, and tomatoes in ghee. Simmer until the dal is flavorful.',
          'Prepare the Baati: Mix whole wheat flour, semolina, salt, and ghee. Knead into a stiff dough, shape into balls, and bake until golden brown.',
          'Make the Churma: Combine wheat flour, semolina, and ghee to make a dough, then bake discs until golden. Crush the discs, mix with jaggery or sugar, cardamom powder, and garnish with nuts and raisins.',
          'Break the baatis and dip them in melted ghee. Serve with the hot dal on the side and churma as a sweet treat.',
          'Garnish the dal with coriander and ghee. Enjoy the trio of Dal Baati Churma together for a traditional Rajasthani meal.'
        ]
      }
    },
    {
      name: 'Gatte Ki Sabzi',
      className: 'dish2rj',
      recipe: {
        label: 'Gatte Ki Sabzi',
        url: 'https://youtu.be/LdyYk3NdhDI?si=g_vavVPIKv7XrhAz',
        videoId: 'LdyYk3NdhDI',
        ingredients: [
          'Besan (Gram flour)',
          'Yogurt',
          'Spices',
          'Ghee',
          'Tomatoes',
          'Cumin seeds'
        ],
        preparation: [
          'Mix besan, red chili powder, turmeric, ajwain, curd, oil, and salt. Knead into a firm dough, shape into cylinders, boil in water until cooked, and slice into pieces.',
          ' Heat oil, add cumin seeds, then sauté chopped onions until golden brown. Add pureed tomatoes, red chili powder, turmeric, coriander powder, and salt. Cook until the oil separates.',
          ' Whisk curd with besan, gradually add to the gravy while stirring to avoid curdling. Cook until the gravy thickens.',
          ' Add the sliced gatte to the gravy, mix well, and simmer for a few minutes to absorb the flavors.',
          ' Garnish with coriander leaves and serve hot with roti or rice.'
        ]
      }
    },
    {
      name: 'Laal Maas',
      className: 'dish3rj',
      recipe: {
        label: 'Laal Maas',
        url: 'https://youtu.be/01nYXt8szDs?si=tHcsoAPqTiIxgRCY',
        videoId: '01nYXt8szDs',
        ingredients: [
          'Mutton',
          'Red chili paste',
          'Garlic',
          'Yogurt',
          'Mustard oil',
          'Spices'
        ],
        preparation: [
          'Soak dry red chilies in warm water for 15 minutes. Grind them into a fine paste along with garlic.',
          ' Mix mutton with chili paste, turmeric, coriander powder, cumin powder, and yogurt. Let it marinate for at least 1 hour.',
          ' Heat mustard oil in a heavy-bottomed pan, add cloves, cardamoms, and bay leaf. Add chopped onions and sauté until golden brown.',
          ' Add the marinated mutton to the pan, cook on medium heat until the meat is browned and oil starts separating. This process will take about 15-20 minutes.',
          ' Add water to cover the mutton, simmer until the meat is tender and the gravy thickens. Serve hot with steamed rice or roti.'
        ]
      }
    },
    {
      name: 'Ker Sangri',
      className: 'dish4rj',
      recipe: {
        label: 'Ker Sangri',
        url: 'https://youtu.be/3kS3_txgqn4?si=SY949uURp8EJ15gE',
        videoId: '3kS3_txgqn4',
        ingredients: [
          'Ker (dried berries)',
          'Sangri (dried beans)',
          'Spices',
          'Ghee',
          'Onions',
          'Tomatoes'
        ],
        preparation: [
          'Soak the dried Ker and Sangri in water overnight. Boil them in salted water until tender, then drain and set aside.',
          ' Heat mustard oil in a pan, add cumin seeds, hing, and dry red chilies. Once they splutter, add turmeric, red chili powder, and coriander powder.',
          ' Add the boiled Ker and Sangri to the pan, mix well with the spices. Cook on low heat for about 10-15 minutes, allowing the flavors to blend.',
          ' Add tamarind pulp or lemon juice along with amchur powder for a tangy flavor. You can also add yogurt at this stage for extra richness.',
          ' Sprinkle garam masala, mix well, and cook for a few more minutes. Serve hot with Bajra Roti or plain parathas.'
        ]
      }
    },
    {
      name: 'Pyaaz Kachori',
      className: 'dish5rj',
      recipe: {
        label: 'Pyaaz Kachori',
        url: 'https://youtu.be/ydygI3QwuwQ?si=C9mz-ejzIdFZkA7z',
        videoId: 'ydygI3QwuwQ',
        ingredients: [
          'All-purpose flour',
          'Onions',
          'Spices',
          'Ghee',
          'Green chilies'
        ],
        preparation: [
          'Mix flour, ghee, and salt in a bowl. Add water gradually to form a soft, pliable dough. Cover it with a damp cloth and let it rest for 30 minutes.',
          ' Heat a little oil in a pan, add cumin seeds, fennel seeds, and hing. Once they crackle, add chopped onions and sauté until golden brown. Add crushed coriander seeds, turmeric, red chili powder, and garam masala.',
          ' Stir in the gram flour and cook until the mixture is dry and fragrant. Add amchur or chaat masala for tanginess, then let it cool. Divide the dough into small balls, flatten each ball, and place a spoonful of the onion filling in the center.',
          ' Bring the edges together to seal the filling and flatten the kachori slightly. Heat oil in a deep pan. Fry the kachoris on medium heat until they turn golden brown and crisp. Ensure they are cooked evenly on both sides.',
          ' Drain the kachoris on paper towels to remove excess oil and serve hot with tamarind chutney or mint chutney.'
        ]
      }
    },
    {
      name: 'Besan Gatte',
      className: 'dish6rj',
      recipe: {
        label: 'Besan Gatte',
        url: 'https://youtu.be/4_rBh5AomG0?si=8_L7r9nxL7X5cpMe',
        videoId: '4_rBh5AomG0',
        ingredients: [
          'Besan (Gram flour)',
          'Yogurt',
          'Spices',
          'Ghee',
          'Onions',
          'Tomatoes'
        ],
        preparation: [
          'Mix gram flour, turmeric, red chili powder, carom seeds, yogurt, oil, and salt. Knead into a stiff dough. Divide the dough into equal portions and roll them into long, thin cylinders.',
          ' Boil water in a large pan, add the rolled dough, and cook for 10-12 minutes until they float. Remove, cool slightly, and cut into 1-inch pieces.',
          ' In a pan, heat oil and add cumin seeds, mustard seeds, fennel seeds, and hing. Once they splutter, add turmeric, red chili powder, coriander powder, and kasuri methi.',
          ' Stir well. Beat yogurt with gram flour and gradually add it to the pan, stirring continuously to avoid curdling. Cook until the gravy thickens.',
          ' Add the boiled gatte pieces to the gravy. Simmer on low heat for about 10-15 minutes, allowing the gatte to absorb the flavors of the gravy.',
          ' Add garam masala and adjust salt to taste. Cook for another 2 minutes, ensuring the flavors are well incorporated. Garnish with chopped fresh coriander leaves.',
          ' '
        ]
      }
    },
    {
      name: 'Mohanthaal',
      className: 'dish7rj',
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
      name: 'Rajasthani Kadhi',
      className: 'dish8rj',
      recipe: {
        label: 'Rajasthani Kadhi',
        url: 'https://youtu.be/TPFO5L3aMyY?si=NCx834Hy4T-jerqC',
        videoId: 'TPFO5L3aMyY',
        ingredients: [
          'Yogurt',
          'Besan (Gram flour)',
          'Spices',
          'Ghee',
          'Curry leaves',
          'Mustard seeds'
        ],
        preparation: [
          'Whisk together gram flour, yogurt, turmeric powder, red chili powder, and water until smooth.',
          ' Pour the mixture into a pot, bring to a boil, then simmer on low heat, stirring continuously to prevent lumps.',
          ' In a separate pan, heat ghee and add mustard seeds, cumin seeds, and a pinch of asafoetida. Let them splutter.',
          ' Pour the tempering into the simmering kadhi and mix well. Allow it to cook for 15-20 minutes until it thickens.',
          ' Garnish with fresh coriander leaves and serve hot with steamed rice or roti.'
        ]
      }
    },
    {
      name: 'Balushahi',
      className: 'dish9rj',
      recipe: {
        label: 'Balushahi',
        url: 'https://youtu.be/WJCgrf1NiEc?si=1t97xdRLyOmPy_0s',
        videoId: 'WJCgrf1NiEc',
        ingredients: [
          'All-purpose flour',
          'Ghee',
          'Sugar',
          'Cardamom',
          'Baking soda'
        ],
        preparation: [
          'Mix all-purpose flour with baking soda and ghee. Add yogurt gradually to form a soft dough. Let it rest for 30 minutes.',
          ' Divide the dough into small balls and gently press the center of each ball to create an indent.',
          ' Heat ghee in a pan and fry the dough balls on low heat until they turn golden brown and crispy.',
          ' In a separate pot, dissolve sugar in water and cook until it reaches a one-string consistency. Add a few drops of lemon juice to prevent crystallization.',
          ' Dip the fried Balushahi in the warm sugar syrup, ensuring they are well coated. Let them soak for a few minutes, then serve once the syrup is absorbed.'
        ]
      }
    },
    {
      name: 'Ghevar',
      className: 'dish10rj',
      recipe: {
        label: 'Ghevar',
        url: 'https://youtu.be/sMl_BXxsBss?si=HZv6rhGhQQm4pa0i',
        videoId: 'sMl_BXxsBss',
        ingredients: [
          'All-purpose flour',
          'Ghee',
          'Sugar',
          'Milk',
          'Cardamom'
        ],
        preparation: [
          'Mix all-purpose flour with milk and ghee to make a smooth, thin batter. Let it rest for 30 minutes.',
          ' Heat a deep pan or kadai filled with ghee to a high temperature for frying.',
          ' Pour the batter slowly into the hot ghee in a circular motion to form a lattice pattern. Fry until it turns golden brown and crispy.',
          ' Dissolve sugar in water and cook until it reaches a one-string consistency. Add cardamom powder for flavor.',
          ' Dip the fried Ghevar into the warm sugar syrup briefly, then let it drain. Garnish with chopped nuts and serve once cool.'
        ]
      }
    },
    {
      name: 'Malai Ghewar',
      className: 'dish11rj',
      recipe: {
        label: 'Malai Ghewar',
        url: 'https://youtu.be/1-QwB2K9hNI?si=etICwrB6Ax8TU1LA',
        videoId: '1-QwB2K9hNI',
        ingredients: [
          'All-purpose flour',
          'Ghee',
          'Milk',
          'Sugar',
          'Cream',
          'Cardamom'
        ],
        preparation: [
          'Mix flour, milk, and melted ghee to form a smooth batter. Let it rest for 30 minutes. In a deep pan, heat ghee to a high temperature.',
          ' Pour batter into hot ghee in a circular motion to form a lattice pattern. Fry until golden brown, then drain excess ghee.',
          ' Boil sugar with water until it reaches one-string consistency. Add cardamom powder.',
          ' Whip heavy cream with sugar and cardamom powder until fluffy. Dip Ghevar briefly in warm syrup, then spread with whipped cream and garnish with nuts if desired.'
        ]
      }
    },
    {
      name: 'Kalmi Vada',
      className: 'dish12rj',
      recipe: {
        label: 'Kalmi Vada',
        url: 'https://youtu.be/r8F4_exmGT8?si=HIstYpW2txjhnXu5',
        videoId: 'r8F4_exmGT8',
        ingredients: [
          'Chana dal (Bengal gram)',
          'Spices',
          'Green chilies',
          'Onions',
          'Coriander leaves'
        ],
        preparation: [
          'Soak urad dal in water for 4-5 hours or overnight. Drain well. Grind soaked dal with green chilies, ginger, and a little water into a smooth batter. ',
          ' Mix in cumin seeds, coriander leaves, salt, and red chili powder. Heat oil in a pan for deep frying.',
          ' Take small portions of the batter and shape them into small, flat discs. Fry the discs in hot oil until they are golden brown and crispy on both sides. Drain on paper towels.',
          ' Serve hot with chutney or yogurt.'
        ]
      }
    },
    {
      name: 'Jodhpuri Mirchi Vada',
      className: 'dish13rj',
      recipe: {
        label: 'Jodhpuri Mirchi Vada',
        url: 'https://youtu.be/9CwSyMv0NZY?si=GrpGy3BGtCCPVPIY',
        videoId: '9CwSyMv0NZY',
        ingredients: [
          'Green chilies',
          'Besan (Gram flour)',
          'Potatoes',
          'Spices',
          'Oil'
        ],
        preparation: [
          'In a bowl, mix mashed potatoes with turmeric, red chili powder, cumin seeds, coriander seeds, garam masala, hing, salt, coriander leaves, and ginger. Adjust seasoning.',
          ' Stuff the prepared filling into the slit green chilies. Prepare a thick batter by mixing besan with a little water, turmeric powder, red chili powder, and salt.',
          ' Heat oil in a pan for deep frying. Dip each stuffed chili in the besan batter and fry in hot oil until golden brown and crispy. Drain on paper towels.',
          ' Serve hot with chutney or ketchup.'
        ]
      }
    },
    {
      name: 'Churma Ladoo',
      className: 'dish14rj',
      recipe: {
        label: 'Churma Ladoo',
        url: 'https://youtu.be/CuF1NjZgQRw?si=e2oKRjQuMfEDI3Rx',
        videoId: 'CuF1NjZgQRw',
        ingredients: [
          'Whole wheat flour',
          'Ghee',
          'Jaggery',
          'Dry fruits',
          'Cardamom'
        ],
        preparation: [
          'Mix wheat flour with a little ghee and water to make a soft dough. Roll into small, round balls.',
          ' Heat ghee in a pan and deep fry the dough balls until golden brown. Drain and set aside.',
          ' Once the dough balls are cool, crush them into coarse powder. Combine the crushed dough balls with grated jaggery, cardamom powder, and chopped nuts. Mix well.',
          ' Form the mixture into round ladoos while still warm. Let them cool and harden before serving.'
        ]
      }
    },
    {
      name: 'Rajasthani Samosa',
      className: 'dish15rj',
      recipe: {
        label: 'Rajasthani Samosa',
        url: 'https://youtu.be/aRzdFHqJHXg?si=uMxYVW18sGlbRWYU',
        videoId: 'aRzdFHqJHXg',
        ingredients: [
          'All-purpose flour',
          'Potatoes',
          'Peas',
          'Spices',
          'Oil'
        ],
        preparation: [
          'Mix flour, ghee, carom seeds, and salt in a bowl. Gradually add water to form a smooth dough. Cover and let it rest for 20 minutes.',
          ' Heat oil in a pan, add cumin and mustard seeds. Once they splutter, add ginger and green chilies. Sauté for a minute, then add potatoes, peas, and all spices. Mix well and cook for a few minutes. Add coriander leaves and set aside to cool.',
          ' Divide the dough into small balls. Roll each ball into a thin oval or circle. Cut it in half, forming two semi-circles. Fold each semi-circle into a cone shape, sealing the edges with a little water. Fill the cone with the prepared filling and seal the open edge to form a triangle.',
          ' Heat oil in a pan over medium heat. Fry the samosas in batches until they are golden brown and crispy. Drain on paper towels.',
          ' Serve the samosas hot with tamarind chutney or mint chutney.'
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
    <div className="rajasthan-dishes-container">
      <h1 className={`title ${selectedDish ? 'hidden' : ''}`}>Rajasthan Recipes</h1>
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

export default RajasthanDishes;
