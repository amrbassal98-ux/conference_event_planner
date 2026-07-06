export const VENUE_CATALOG = [
  {
    img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
    name: "Conference Room (Capacity:15)",
    cost: 3500,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
    name: "Auditorium Hall (Capacity:200)",
    cost: 5500,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
    name: "Presentation Room (Capacity:50)",
    cost: 700,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
    name: "Large Meeting Room (Capacity:10)",
    cost: 900,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/laptops-593296_640.jpg",
    name: "Small Meeting Room (Capacity:5)",
    cost: 1100,
    quantity: 0,
  },
];

export const AV_CATALOG = [
  {
    img: "https://pixabay.com/images/download/business-20031_640.jpg",
    name: "Projectors",
    cost: 200,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/speakers-4109274_640.jpg",
    name: "Speaker",
    cost: 35,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/public-speaking-3926344_640.jpg",
    name: "Microphones",
    cost: 45,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/whiteboard-2903269_640.png",
    name: "Whiteboards",
    cost: 80,
    quantity: 0,
  },
  {
    img: "https://pixabay.com/images/download/signpost-235079_640.jpg",
    name: "Signage",
    cost: 80,
    quantity: 0,
  },
];

export const MEAL_CATALOG = [
  { name: "Breakfast", cost: 50, selected: false },
  { name: "High Tea", cost: 25, selected: false },
  { name: "Lunch", cost: 65, selected: false },
  { name: "Dinner", cost: 70, selected: false },
];

export const BUSINESS_RULES = {
  maxAuditoriumQty: 3,
  maxVenueQty: 10,
  minPeople: 1,
};
