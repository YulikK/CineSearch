import { HttpResponse, http } from 'msw';

import { URL_API } from '../../../common/constant.tsx';

const noResult = {
  success: false,
  status_code: 34,
  status_message: 'The resource you requested could not be found.',
};

export const testMovieDetails = {
  adult: false,
  backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
  belongs_to_collection: {
    id: 230,
    name: 'The Godfather Collection',
    poster_path: '/zqV8MGXfpLZiFVObLxpAI7wWonJ.jpg',
    backdrop_path: '/mDMCET9Ens5ANvZAWRpluBsMAtS.jpg',
  },
  budget: 6000000,
  genres: [
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 80,
      name: 'Crime',
    },
  ],
  homepage: 'http://www.thegodfather.com/',
  id: 238,
  imdb_id: 'tt0068646',
  origin_country: ['US'],
  original_language: 'en',
  original_title: 'The Godfather',
  overview:
    'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
  popularity: 147.498,
  poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
  production_companies: [
    {
      id: 4,
      logo_path: '/gz66EfNoYPqHTYI4q9UEN4CbHRc.png',
      name: 'Paramount Pictures',
      origin_country: 'US',
    },
    {
      id: 10211,
      logo_path: null,
      name: 'Alfran Productions',
      origin_country: 'US',
    },
    {
      id: 70,
      logo_path: '/ueaENQkPcy8rlr5fGZVBXKOhlBh.png',
      name: 'American Zoetrope',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '1972-03-14',
  revenue: 245066411,
  runtime: 175,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
    {
      english_name: 'Italian',
      iso_639_1: 'it',
      name: 'Italiano',
    },
    {
      english_name: 'Latin',
      iso_639_1: 'la',
      name: 'Latin',
    },
  ],
  status: 'Released',
  tagline: "An offer you can't refuse.",
  title: 'The Godfather',
  video: false,
  vote_average: 8.7,
  vote_count: 20105,
};
const handlers = [
  http.get(`${URL_API}/${testMovieDetails.id}`, () =>
    HttpResponse.json(testMovieDetails)
  ),
  http.get(`${URL_API}/*`, () => HttpResponse.json(noResult)),
];

export default handlers;
