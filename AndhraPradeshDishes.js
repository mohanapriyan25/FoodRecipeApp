import React, { useState, useEffect } from 'react';
import './AndhraPradeshDishes.css';
import Confetti from 'react-confetti';

const AndhraPradeshDishes = () => {
  const [favourites, setFavourites] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      name: 'Pulihora',
      className: 'dish1ap',
      recipe: {
        label: 'Pulihora',
        url: 'https://youtu.be/ghK7c4kdyZg?si=GeFTRn2RAOKyPw4c',
        videoId: 'ghK7c4kdyZg',
        ingredients: [
          'Rice',
          'Tamarind pulp',
          'Mustard seeds, Urad dal, Chana dal',
          'Turmeric powder, Red chili powder',
          'Cumin seeds, Peanuts',
          'Oil, Salt'
        ],
        preparation: [
          'Cook rice and let it cool.',
          ' Extract tamarind pulp by soaking the tamarind in warm water, then straining it. Set aside.',
          ' Heat oil in a pan. Add mustard seeds, cumin seeds, chana dal, urad dal, green chilies, red chilies, curry leaves, and peanuts (if using). Saute until the dals are golden brown.',
          ' Add the tamarind pulp to the pan along with turmeric powder, red chili powder, asafoetida, jaggery (if using), and salt. Cook until the mixture thickens and oil starts separating from the paste.',
          ' Combine the tamarind mixture with the cooked rice. Stir well and cook for a few minutes until everything is well-mixed and heated through. Garnish with coriander leaves.'
        ]
      }
    },
    {
      name: 'Gongura Pachadi',
      className: 'dish2ap',
      recipe: {
        label: 'Gongura Pachadi',
        url: 'https://youtu.be/LYZ8rjN4yN0?si=Hjcmi79H_QeTeqj3',
        videoId: 'LYZ8rjN4yN0',
        ingredients: [
          'Gongura leaves (sorrel leaves)',
          'Chana dal, Urad dal',
          'Mustard seeds, Turmeric powder',
          'Red chili powder',
          'Cumin seeds',
          'Oil, Salt'
        ],
        preparation: [
          ' Heat 1 tablespoon of oil in a pan. Add the chopped Gongura leaves and sauté until they wilt and reduce in volume. Set aside to cool.',
          ' In the same pan, add another tablespoon of oil. Once hot, add mustard seeds, cumin seeds, chana dal, urad dal, green chilies, and red chilies. Sauté until the dals are golden brown and the spices are fragrant.',
          ' In a blender, combine the sautéed Gongura leaves, the tempering mixture, garlic cloves, tamarind pulp, salt, and a pinch of asafoetida. Blend into a smooth or slightly coarse paste as per your preference. Adjust salt and add jaggery if desired.',
          ' If the chutney is too thick, you can add a little water to achieve the desired consistency.',
          ' For extra flavor, heat a little oil, add mustard seeds, and a pinch of asafoetida, and pour this tempering over the chutney.'
        ]
      }
    },
    {
      name: 'Andhra Chicken Curry',
      className: 'dish3ap',
      recipe: {
        label: 'Andhra Chicken Curry',
        url: 'https://youtu.be/EFxykDh406k?si=RsYZt8PD4hj4KKAE',
        videoId: 'EFxykDh406k',
        ingredients: [
          'Chicken, cut into pieces',
          'Onions, Tomatoes',
          'Yogurt',
          'Ginger-garlic paste',
          'Red chili powder, Turmeric powder',
          'Coriander powder, Cumin seeds',
          'Oil, Salt',
          'Coriander leaves'
        ],
        preparation: [
          'Heat oil in a pan and sauté chopped onions, green chilies, and curry leaves until onions are golden brown. Add ginger-garlic paste and cook until the raw smell disappears.',
          ' Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until the tomatoes are soft and oil starts separating.',
          ' Add the chicken pieces to the pan and mix well with the masala. Cook on medium heat until the chicken is well-coated and starts releasing its juices',
          ' Add water for the desired gravy consistency and cover the pan. Let the chicken simmer until fully cooked and tender.',
          ' Add garam masala and garnish with fresh coriander leaves. Serve hot with rice or roti.'
        ]
      }
    },
    {
      name: 'Pootha Rekulu',
      className: 'dish4ap',
      recipe: {
        label: 'Pootha Rekulu',
        url: 'https://youtu.be/0ArE9Yl55JM?si=1dihL15jLcQFoxR5',
        videoId: '0ArE9Yl55JM',
        ingredients: [
          'Rice flour',
          'Jaggery',
          'Grated coconut',
          'Cardamom powder',
          'Ghee, Water'
        ],
        preparation: [
          'Mix rice flour with water to make a smooth, thin batter. The consistency should be similar to that of dosa or pancake batter.',
          ' Heat a non-stick pan or an inverted griddle on low heat. Take a clean, thin cotton cloth, dip it into the batter, and gently dab it onto the hot surface, creating a thin layer.',
          ' Let it cook for a few seconds until it forms a translucent sheet. Carefully peel off the sheet and repeat the process to make more sheets.',
          ' Take one rice flour sheet, brush it lightly with melted ghee, and sprinkle powdered sugar evenly over it.',
          ' Place another sheet on top and repeat the ghee and sugar process. Fold or roll the sheets as desired.',
          ' Your Pootha Rekulu are ready to serve! Store them in an airtight container to keep them fresh.'
        ]
      }
    },
    {
      name: 'Chepala Pulusu',
      className: 'dish5ap',
      recipe: {
        label: 'Chepala Pulusu',
        url: 'https://youtu.be/oTT8YlNiOTM?si=E8RwUPtnDPqEbGTx',
        videoId: 'oTT8YlNiOTM',
        ingredients: [
          'Fish (any firm variety), cut into pieces',
          'Tamarind pulp',
          'Red chili powder, Turmeric powder',
          'Cumin seeds, Mustard seeds',
          'Chana dal, Urad dal',
          'Onion, Tomatoes',
          'Oil, Salt'
        ],
        preparation: [
          'Heat oil in a pan, add mustard seeds, fenugreek seeds, and curry leaves. Add chopped onions, green chilies, and garlic cloves, and sauté until the onions are golden brown.',
          ' Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until the tomatoes are soft and the oil starts separating from the masala.',
          ' Pour in the tamarind pulp and add some water to achieve the desired consistency for the curry. Bring it to a boil.',
          ' Gently add the fish pieces to the boiling curry. Cover and simmer until the fish is cooked through and the flavors are well absorbed.',
          ' Garnish with fresh coriander leaves. Serve hot with rice for a flavorful meal.'
        ]
      }
    },
    {
      name: 'Pesarattu',
      className: 'dish6ap',
      recipe: {
        label: 'Pesarattu',
        url: 'https://youtu.be/mWu_FrRpuKk?si=eG2RlwKxvs7WybTU',
        videoId: 'mWu_FrRpuKk',
        ingredients: [
          'Green gram (moong dal)',
          'Rice',
          '1Onion, Green chilies',
          'Ginger, Coriander leaves',
          'Cumin seeds',
          'Salt, Oil'
        ],
        preparation: [
          'Soak green gram and a little rice for a few hours. Grind them into a smooth batter with ginger, green chilies, and salt, adding water as needed to achieve a dosa-like consistency.',
          ' Finely chop onions and mix them with cumin seeds. This will be used as a topping for the Pesarattu.',
          ' Heat a dosa tawa (griddle) and pour a ladle of batter onto it. Spread it evenly in a circular motion to form a thin dosa.',
          ' Sprinkle the chopped onion and cumin seed mixture on top of the Pesarattu while it is still wet. Drizzle some oil around the edges and cook until the edges lift up.',
          ' Flip if necessary, cook for another minute, and serve hot with ginger chutney or any other chutney of your choice.'
        ]
      }
    },
    {
      name: 'Bobbatlu',
      className: 'dish7ap',
      recipe: {
        label: 'Bobbatlu',
        url: 'https://youtu.be/fuL6cGJLcOo?si=fGob604p6gJQvCUA',
        videoId: 'fuL6cGJLcOo',
        ingredients: [
          'Chana dal (split chickpeas)',
          'Jaggery',
          'All-purpose flour',
          'Cardamom powder',
          'Ghee, Water'
        ],
        preparation: [
          'Mix flour, turmeric powder, and a little oil. Add water gradually and knead into a soft, pliable dough. Cover and let it rest.',
          ' Cook chana dal until soft but not mushy. Drain the water and grind the dal into a smooth paste. In a pan, mix the dal paste with jaggery and cook until the mixture thickens. Add cardamom powder and let it cool.',
          ' Divide the dough and filling into equal portions. Roll out a small portion of the dough into a circle, place a portion of the filling in the center, and fold the edges over the filling to seal it.',
          ' Gently roll out the stuffed dough into a thin circle, using a little flour to prevent sticking.',
          ' Heat a griddle and cook the bobbatlu on both sides until golden brown, applying ghee as needed. Serve warm with more ghee if desired.'
        ]
      }
    },
    {
      name: 'Gutthi Vankaya',
      className: 'dish8ap',
      recipe: {
        label: 'Gutthi Vankaya',
        url: 'https://youtu.be/HRwsGSGCL-s?si=ou96k3oU7CO4tr6I',
        videoId: 'HRwsGSGCL-s',
        ingredients: [
          'Small brinjals (eggplants)',
          'Roasted peanuts',
          'Sesame seeds',
          'Chana dal, Urad dal',
          'Red chili powder, Turmeric powder',
          'Cumin seeds',
          'Oil, Salt'
        ],
        preparation: [
          'Roast peanuts, sesame seeds, grated coconut, and cumin seeds until fragrant. Let them cool, then grind them into a coarse paste with onions, garlic, red chili powder, turmeric powder, coriander powder, salt, and tamarind pulp.',
          ' Slit each brinjal from the bottom, keeping the stem intact. Stuff the prepared masala paste into the brinjals.',
          ' Heat oil in a pan, add mustard seeds and curry leaves, and let them splutter. Place the stuffed brinjals in the pan and cover. Cook on low heat, turning occasionally, until the brinjals are tender and cooked through.',
          ' Add any leftover masala paste to the pan, along with a little water to create a thick gravy. Cover and simmer until the oil starts to separate and the brinjals are fully cooked.',
          ' Garnish with fresh coriander leaves and serve hot with rice or roti.'
        ]
      }
    },
    {
      name: 'Ariselu',
      className: 'dish9ap',
      recipe: {
        label: 'Ariselu',
        url: 'https://youtu.be/Z_CrhktyRsA?si=nyzFmzPmETsjbnpn',
        videoId: 'Z_CrhktyRsA',
        ingredients: [
          'Rice flour',
          'Jaggery',
          'Sesame seeds',
          'Cardamom powder',
          'Water, Oil'
        ],
        preparation: [
          'Soak rice overnight, drain, and spread it out to dry slightly. Once it`s semi-dry, grind it into a fine powder.',
          ' In a pan, melt jaggery with a little water to make a thick syrup. The syrup should reach a soft ball consistency (when a drop of syrup is dropped in water, it should form a soft, non-sticky ball).',
          ' Gradually add the rice flour to the jaggery syrup, stirring continuously until it forms a soft dough. Allow the dough to cool enough to handle.',
          ' Grease your hands with ghee, take small portions of the dough, and flatten them into small discs. Optionally, press sesame seeds onto each disc.',
          ' Heat ghee or oil in a pan and deep fry the discs on medium heat until they are golden brown. Remove them and drain excess oil on a paper towel. Let them cool completely before serving.'
        ]
      }
    },
    {
      name: 'Ulava Charu',
      className: 'dish10ap',
      recipe: {
        label: 'Ulava Charu',
        url: 'https://youtu.be/anX_eaBZiW8?si=HHnTdbh0aZKobgJA',
        videoId: 'anX_eaBZiW8',
        ingredients: [
          'Horse gram',
          'Cumin seeds',
          'Mustard seeds',
          'Chana dal, Urad dal',
          'Red chili powder, Turmeric powder',
          'Oil, Salt'
        ],
        preparation: [
          'Soak horse gram overnight, then pressure cook it with water until it’s soft. Strain the cooked horse gram, reserving the liquid. Mash the cooked horse gram lightly and set it aside.',
          ' Soak tamarind in water and extract the pulp. Set it aside. In a pan, heat oil or ghee, add mustard seeds, cumin seeds, curry leaves, and chopped onions. Sauté until the onions turn golden.',
          ' Add green chilies, garlic cloves, turmeric powder, red chili powder, and coriander powder. Cook for a few minutes.',
          ' Add the mashed horse gram and the reserved cooking liquid to the pan. Pour in the tamarind pulp and salt. Simmer the mixture on low heat until it thickens and the flavors meld together.',
          ' Garnish with fresh coriander leaves. Serve hot with rice, or enjoy as a soup with a dollop of ghee.'
        ]
      }
    },
    {
      name: 'Kakinada Kaja',
      className: 'dish11ap',
      recipe: {
        label: 'Kakinada Kaja',
        url: 'https://youtu.be/Xv4ESe098rI?si=uKfzGY8eWwH2z8xk',
        videoId: 'Xv4ESe098rI',
        ingredients: [
          'All-purpose flour',
          'Sugar',
          'Ghee',
          'Cardamom powder',
          'Water, Oil'
        ],
        preparation: [
          'In a mixing bowl, combine all-purpose flour, a pinch of baking soda, and a little ghee. Gradually add water and knead into a soft dough. Cover and let it rest for 30 minutes.',
          ' In a pan, dissolve sugar in water and bring it to a boil. Add a little cardamom powder and simmer until the syrup reaches a one-string consistency. Set aside.',
          ' Roll out the dough into a thin sheet. Fold it multiple times to create layers, then roll it up tightly like a cylinder. Cut the rolled dough into small pieces and gently press each piece to flatten it slightly.',
          ' Heat oil in a deep pan and fry the kajalu on medium heat until they are golden brown and crispy. Remove from the oil and drain excess oil on a paper towel.',
          ' While the kajalu are still warm, dip them in the prepared sugar syrup, ensuring they are well coated. Let them soak for a few minutes before removing them.'
        ]
      }
    },
    {
      name: 'Garelu',
      className: 'dish12ap',
      recipe: {
        label: 'Garelu',
        url: 'https://youtu.be/qZ47HuZ7WhE?si=g9n7O_rp8QOy477F',
        videoId: 'qZ47HuZ7WhE',
        ingredients: [
          'Urad dal',
          'Small onion, Green chilies',
          'Cumin seeds, Ginger',
          'Coriander leaves',
          'Salt, Oil'
        ],
        preparation: [
          'Soak urad dal in water for about 4-5 hours. Drain the water and grind the dal into a smooth, thick batter. Add very little water while grinding to achieve the right consistency.',
          ' To the batter, add finely chopped green chilies, grated ginger, chopped onions (if using), curry leaves, crushed black peppercorns, and salt. Mix well.',
          ' Wet your hands with water, take a small portion of the batter, and shape it into a round patty. Make a hole in the center with your thumb to form a doughnut shape.',
          ' Heat oil in a deep pan. Carefully slide the shaped batter into the hot oil and fry on medium heat until golden brown and crispy. Fry a few at a time, ensuring they have enough space to cook evenly.',
          ' Drain the garelu on a paper towel to remove excess oil. Serve hot with coconut chutney or sambar.'
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
    <div className="andhrapradesh-dishes-container">
      <h1 className={`title ${selectedDish ? 'hidden' : ''}`}>Andhra Pradesh Recipes</h1>
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

export default AndhraPradeshDishes;
