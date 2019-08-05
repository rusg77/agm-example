export class Place {
  constructor(public latitude: number,
              public longitude: number,
              public name: string,
              public description: string,
              public clicked = false) {}
}

export const places = [
  new Place(2.9205, 73.5808, 'Muli', 'The island is 138.83 km (86 mi; 75 nmi) south of the country\'s capital, Malé'),
  new Place(4.1912, 72.7459, 'Mathiveri', 'Mathiveri is one of the eight inhabited islands of Alif Alif Atoll')
];
