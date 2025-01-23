const exerciesDetails = [
  {
    name: "家事全般（立位・軽い）",
    time: "10 min",
    calories: "26kcal",
  },
];

const exercies = {
  date: "2021.05.21",
  details: Array.from({ length: 10 }, () => exerciesDetails).flat(),
};

export default exercies;
