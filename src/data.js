const data_example_line = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 0 },
];

const data_example_bar = [
  { x: "2017", y: 3 },
  { x: "2018", y: 7 },
  { x: "2019", y: 10 },
  { x: "2020", y: 9 },
  { x: "2021", y: 15 },
];

const data_example_weighted_scatterplot = [
  { x: 1, y: 10, size: 15 },
  { x: 1.7, y: 12, size: 10 },
  { x: 2, y: 5, size: 1 },
  { x: 3, y: 15, size: 12 },
  { x: 2.5, y: 10, size: 2 },
  { x: 3.5, y: 7, size: 4 },
  { x: 4.5, y: 8, size: 25 },
  { x: 5.5, y: 7, size: 23 },
];

const data_vertical_bar = [
  { x: 1, y: 10 },
  { x: 2, y: 5 },
  { x: 3, y: 15 },
];

const data_horizontal_bar = [
  { x: 1, y: 10 },
  { x: 2, y: 5 },
  { x: 3, y: 15 },
];

const data_vertical_multibar = [
  [
    { x: 1, y: 10 },
    { x: 2, y: 5 },
    { x: 3, y: 15 },
  ],
  [
    { x: 1, y: 12 },
    { x: 2, y: 2 },
    { x: 3, y: 11 },
  ],
];

const data_horizontal_multibar = [
  [
    { y: 1, x: 10 },
    { y: 2, x: 5 },
    { y: 3, x: 15 },
  ],
  [
    { y: 1, x: 12 },
    { y: 2, x: 2 },
    { y: 3, x: 11 },
  ],
];

export {
  data_example_line,
  data_example_bar,
  data_horizontal_bar,
  data_vertical_bar,
  data_vertical_multibar,
  data_horizontal_multibar,
  data_example_weighted_scatterplot,
};
