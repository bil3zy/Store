const data = {
  products: [
    {
      _id: "1",
      title: "Cat Chicken Food",
      category: "Cats",
      subcategory: "Food",
      image: "/images/p1.png",
      price: 110,
      brand: "Food Elite",
      countInStock: 10,
      weight: "15kg",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "2",
      title: "Cat Salmon Food",
      category: "Cats",
      subcategory: "Food",
      image: "/images/p2.png",
      price: 110,
      brand: "Food Elite",
      countInStock: 10,
      weight: "15kg",
      offer: true,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "3",
      title: "Dog Chicken Food",
      category: "Dogs",
      subcategory: "Food",
      image: "/images/p3.png",
      price: "110",
      brand: "Food Elite",
      countInStock: "10",
      weight: "15kg",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "4",
      title: "Dog Salmon Food",
      category: "Dogs",
      subcategory: "Food",
      image: "/images/p4.png",
      price: "110",
      brand: "Food Elite",
      countInStock: "10",
      weight: "15kg",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "5",
      title: "Dog Beef Meal",
      category: "Dogs",
      subcategory: "Food",
      image: "/images/p5.png",
      price: "110",
      brand: "Food Elite",
      countInStock: "0",
      weight: "15kg",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "6",
      title: "Puppy Food",
      category: "Dogs",
      subcategory: "Food",
      image: "/images/p6.png",
      price: "45",
      brand: "Food Elite",
      countInStock: "10",
      weight: "3kg",
      offer: true,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "7",
      title: "Dog Dry Chicken Food",
      category: "Dogs",
      subcategory: "Food",
      image: "/images/p7.JPG",
      price: "65",
      brand: "Pedigree",
      countInStock: "10",
      weight: "12kg",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "8",
      title: "Pedigree Small Breed Adult Dry Dog Food, Chicken & Steak",
      category: "Dogs",
      subcategory: "Food",
      image: "/images/p8.JPG",
      price: "65",
      brand: "Pedigree",
      countInStock: "10",
      weight: "12kg",
      offer: true,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "9",
      title: "Eukanuba Senior Large Breed Dry Dog Food, 30 lb. bag",
      category: "Dogs",
      subcategory: "Food",
      image: "/images/p9.JPG",
      price: "95",
      brand: "Eukanuba",
      countInStock: "10",
      weight: "9kg",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "10",
      title: "Eukanuba Adult Medium Breed Dry Dog Food, 30 lb. bag",
      category: "Dogs",
      subcategory: "Food",
      image: "/images/p10.png",
      price: "120",
      brand: "Eukanuba",
      countInStock: "10",
      weight: "12kg",
      offer: true,
      offerImage: "",
      topSelling: true,
    },
    {
      _id: "11",
      title:
        "ORIJEN Dry Dog Food, Grain Free, High Protein, Fresh and Raw Animal Ingredients",
      category: "Dogs",
      subcategory: "Food",
      image: "/images/p11.png",
      price: "100",
      brand: "ORIJEN",
      countInStock: "10",
      weight: "14kg",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "12",
      title: "Royal Canin French Bulldog Adult Breed Specific",
      category: "Dogs",
      subcategory: "Food",
      image: "/images/p12.png",
      price: "180",
      brand: "Royal Canin",
      countInStock: "10",
      weight: "4kg",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "13",
      title:
        "Royal Canin Great Dane Adult Breed Specific Dry Dog Food, 30 lb. bag",
      category: "Dogs",
      subcategory: "Food",
      image: "/images/p13.png",
      price: "165",
      brand: "Royal Canin",
      countInStock: "10",
      weight: "12kg",
      offer: false,
      offerImage: "",
      topSelling: true,
    },
    {
      _id: "14",
      title: "Royal Canin German Shepherd Adult Breed Specific Dry Dog Food",
      category: "Dogs",
      subcategory: "Food",
      image: "/images/p14.png",
      price: "210",
      brand: "Royal Canin",
      countInStock: "10",
      weight: "7kg",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "15",
      title: "TEMPTATIONS Classic Crunchy and Soft Cat Treats, 30 oz.",
      category: "Cats",
      subcategory: "Treats",
      image: "/images/p15.png",
      price: "45",
      brand: "TEMPTATIONS",
      countInStock: "10",
      weight: "2kg",
      offer: true,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "16",
      title: "FELINE GREENIES Natural Dental Care Cat Treats, Salmon Flavor",
      category: "Cats",
      subcategory: "Treats",
      image: "/images/p16.png",
      price: "30",
      brand: "FELINE GREENIES",
      countInStock: "10",
      weight: "1kg",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "17",
      title: "Sheba Meaty Tender Sticks Cat Treats, Pack of 10",
      category: "Cats",
      subcategory: "Treats",
      image: "/images/p17.png",
      price: "85",
      brand: "Sheba",
      countInStock: "10",
      weight: "3kg",
      offer: false,
      offerImage: "",
      topSelling: true,
    },
    {
      _id: "18",
      title: "Arm & Hammer Clump & Seal Platinum Cat Litter, Multi-Cat, 40 lb",
      category: "Cats",
      subcategory: "Litter",
      image: "/images/p18.png",
      price: "32",
      brand: "Arm & Hammer",
      countInStock: "10",
      weight: "600g",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "19",
      title: "Purina Tidy Cats Clumping Cat Litter",
      category: "Cats",
      subcategory: "Litter",
      image: "/images/p19.png",
      price: "41",
      brand: "Purina",
      countInStock: "10",
      weight: "850g",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "20",
      title: "Purina Tidy Cats BREEZE Litter System Pellet Refills",
      category: "Cats",
      subcategory: "Litter",
      image: "/images/p20.png",
      price: "58",
      brand: "Purina",
      countInStock: "10",
      weight: "1kg",
      offer: false,
      offerImage: "",
      topSelling: true,
    },
    {
      _id: "21",
      title:
        "Purina Fancy Feast Grilled Gravy Wet Cat Food, Delights Grilled Chicken & Cheddar Cheese Feast - (24) 3 oz. Cans",
      category: "Cats",
      subcategory: "Food",
      image: "/images/p21.png",
      price: "26",
      brand: "Purina",
      countInStock: "10",
      weight: "1.3kg",
      offer: false,
      offerImage: "",
      topSelling: false,
    },
    {
      _id: "22",
      title:
        "Purina Fancy Feast Petites Gravy Adult Gourmet Single Serve Break Apart Wet Cat Food",
      category: "Cats",
      subcategory: "Food",
      image: "/images/p22.png",
      price: "21",
      brand: "Purina",
      countInStock: "10",
      weight: "1.5kg",
      offer: false,
      offerImage: "",
      topSelling: true,
    },
  ],
  slideImages: [
    {
      image: "/images/stock-image-3.jpg",
    },
    {
      image: "/images/stock-image-2.jpg",
    },
    {
      image: "/images/stock-image-1.jpg",
    },
    {
      image: "/images/cat-for-header.jpg",
    },
  ],
  headerImage: [
    {
      image: "/images/cat-for-header.png",
    },
  ],
};

export default data;
