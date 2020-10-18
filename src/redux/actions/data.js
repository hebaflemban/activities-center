export const gyms = [
  {
    id: 1,
    name: "gym name",
    address: "somewhere",
    logo: "https://placeimg.com/640/480/arch",
  },
  {
    id: 2,
    name: "gym name 2",
    address: "near you",
    logo: "https://placeimg.com/640/480/arch",
  },
];

export const classes = [
  {
    id: 1,
    title: "class name",
    type: "cardio",
    date: "today",
    time: "at 5",
    isFree: true,
    capacity: 20,
    gym: gyms[0],
  },
  {
    id: 2,
    title: "class name 2",
    type: "swimming",
    date: "tomorrow",
    time: "at 8",
    isFree: false,
    capacity: 10,
    gym: gyms[1],
  },
];
const users = [
  {
    id: 0,
  },
  {
    id: 1,
  },
];
export const bookings = [
  {
    id: 1,
    user: users[0],
    class: classes[0],
  },
  {
    id: 2,
    user: users[0],
    class: classes[1],
  },
];
