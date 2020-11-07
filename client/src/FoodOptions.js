const FoodOptions = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    environmentalImpact: 50,
    animalWelfare: 85,
    cost: 55,
    ingredientOptions: [
      {
        name: "HK Ground Beef",
        environmentalImpact: 50,
        animalWelfare: 85,
        cost: 55
      },
      {
        name: "HK Organic Ground Beef",
        environmentalImpact: 60,
        animalWelfare: 95,
        cost: 30
      },
      {
        name: "Industry average ground beef",
        environmentalImpact: 30,
        animalWelfare: 65,
        cost: 40
      }
    ],
    alternativeFoods: [
      {
        name: "Vegetarian Bolognese",
        environmentalImpact: 95,
        animalWelfare: 100,
        cost: 45
      }
    ]
  },
  {
    id: 2,
    name: "Pork Wok",
    environmentalImpact: 60,
    animalWelfare: 80,
    cost: 50,
    ingredientOptions: [
      {
        name: "HK Rypsiporsas/Pork",
        environmentalImpact: 60,
        animalWelfare: 80,
        cost: 50
      },
      {
        name: "Kariniemi Chicken",
        environmentalImpact: 70,
        animalWelfare: 75,
        cost: 60
      },
      {
        name: "Industry average pork",
        environmentalImpact: 45,
        animalWelfare: 65,
        cost: 45
      }
    ],
    alternativeFoods: [
      {
        name: "Sausage Carbonara",
        environmentalImpact: 50,
        animalWelfare: 80,
        cost: 50
      }
    ]
  }
];

export default FoodOptions;
