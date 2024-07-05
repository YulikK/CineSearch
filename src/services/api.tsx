import {
  ACCEPT,
  METHOD,
  TOKEN,
  URL_API,
  URL_SEARCH_API,
} from '../common/constant';
import { Movie, QueryParams } from '../types/api';

export class ApiService {
  static fetchMovie(params: QueryParams) {
    const fetchUrl = ApiService.makeURL(params);
    return fetch(fetchUrl, {
      method: METHOD.GET,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: ACCEPT,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        data.results.map((movie: Movie) => ({
          name: movie.title,
          description: `Release date: ${movie.release_date}`,
        }))
      )
      .catch((error) => console.error('Error fetching data:', error));
  }

  static makeURL(params: QueryParams): string {
    const url = params.query ? URL_SEARCH_API : URL_API;
    const page = params.page ? params.page : 1;

    let result = `${url}?page=${page}`;

    if (params.query) {
      result += `&query=${encodeURIComponent(params.query)}`;
    }

    return result;
  }
}
