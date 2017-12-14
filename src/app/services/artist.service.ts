import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { Artist } from '../models/artist.model';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { FavArtistListService } from "./fav-artist-list.service";
import { Album } from "../models/album.model";
import { Song } from "../models/song.model";

@Injectable()
export class ArtistService {
  artistsChanged = new Subject<Artist[]>();
  albumsChanged = new Subject<Album[]>();
  songsChanged = new Subject<Song[]>();
  artist: Artist;
  album: Album;
  private artists: Artist[] = [];

  private albumsList: Album[] = [];

  albumList = this.getAlbum;

  constructor(private favArtistListService: FavArtistListService, private http: Http) {
    this.readArtists();
  }

  public readArtists() {
    this.http.get(environment.serverUrl + '/artists')
        .map((response) => {
          console.log("map");
          const artists = response.json() as Artist[];
          return artists;
        })
        .subscribe((artists) => {
          console.log('subscribe');
          this.artists = artists as Artist[];
          this.artistsChanged.next(this.artists.slice());
        });
  }

  getSongs(index: number){
      return this.artist.albums[index]._songs;
  }


  getAlbums(index: number){
      return this.artists[index].albums;
  }

  getAlbum(index: number){
      return this.album[index];
  }

  getArtists() {
    return this.artists.slice();
  }

  getArtist(index: number) {
    return this.artists[index];
  }

  addArtistToFavArtistList(artist: Artist) {
    this.favArtistListService.addArtist(artist);
  }

  addArtist(artist: Artist) {
    console.log('add an artist');
    console.dir(artist);
    this.http.post(environment.serverUrl + '/artists/', artist)
    .map(response => response.json() as Artist)
    .subscribe(result => {
    this.artists.push(result as Artist);
    this.artistsChanged.next(this.artists.slice());
    }) 
    
  }

  updateArtist(index: number, newArtist: Artist) {
    console.log('update an artist');
    console.dir(newArtist);
    
    this.http.put(environment.serverUrl + '/artists/' + this.artists[index]._id, newArtist)
    .map(response => response.json() as Artist)
    .subscribe(result => {
        this.artists[index] = newArtist;
        this.artistsChanged.next(this.artists.slice());

    })
  }

  deleteArtist(index: number) {
    console.log('delete an artist');
    
    this.http.delete(environment.serverUrl + '/artists/' + this.artists[index].getId)
    this.artists.splice(index, 1);
    this.artistsChanged.next(this.artists.slice());
  }
}
