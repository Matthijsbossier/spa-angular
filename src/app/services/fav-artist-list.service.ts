import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { Artist } from "../models/artist.model";

export class FavArtistListService {
  artistsChanged = new Subject<Artist[]>();
  startedEditing = new Subject<number>();
  private artists: Artist[] = [
    //new Ingredient('Apples', 5),
    // new Ingredient('Tomatoes', 10),
  ];

  getArtists() {
    return this.artists.slice();
  }

  getArtist(index: number) {
    return this.artists[index];
  }

  addArtist(artist: Artist) {
    this.artists.push(artist);
    this.artistsChanged.next(this.artists.slice());
  }

  addArtists(artists: Artist[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.artists.push(...artists);
    this.artistsChanged.next(this.artists.slice());
  }

  updateArtist(index: number, newArtist: Artist) {
    this.artists[index] = newArtist;
    this.artistsChanged.next(this.artists.slice());
  }

  deleteArtist(index: number) {
    this.artists.splice(index, 1);
    this.artistsChanged.next(this.artists.slice());
  }
}
