import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { Artist } from '../models/artist.model';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { FavArtistListService } from "./fav-artist-list.service";
import { Album } from "../models/album.model";
import { FavAlbumListService } from "./fav-album-list.service";

@Injectable()
export class AlbumService {
  albumsChanged = new Subject<Album[]>();

  private albums: Album[] = [];

  constructor(private favAlbumListService: FavAlbumListService, private http: Http) {
    this.readAlbums();
  }

  public readAlbums() {
    this.http.get(environment.serverUrl + '/albums')
        .map((response) => {
          console.log("map");
          const albums = response.json() as Album[];
          return albums;
        })
        .subscribe((albums) => {
          console.log('subscribe');
          this.albums = albums as Album[];
          this.albumsChanged.next(this.albums.slice());
        });
  }


  getAlbums() {
    return this.albums.slice();
  }

  getAlbum(index: number) {
    return this.albums[index];
  }

  addAlbumToFavAlbumList(album: Album) {
    this.favAlbumListService.addAlbum(album);
  }


  addAlbum(album: Album) {
    console.log('add an album');
    console.dir(album);
    this.http.post(environment.serverUrl + '/albums/', album)
    .map(response => response.json() as Album)
    .subscribe(result => {
    this.albums.push(result as Album);
    this.albumsChanged.next(this.albums.slice());
    }) 
    
  }

  updateAlbum(index: number, newAlbum: Album) {
    console.log('update an album');
    console.dir(newAlbum);
    
    this.http.put(environment.serverUrl + '/albums/' + this.albums[index]._id, newAlbum)
    .map(response => response.json() as Album)
    .subscribe(result => {
        this.albums[index] = newAlbum;
        this.albumsChanged.next(this.albums.slice());

    })
  }

  deleteAlbum(index: number) {
    console.log('delete an album');
    
    this.http.delete(environment.serverUrl + '/albums/' + this.albums[index]._id)
    this.albums.splice(index, 1);
    this.albumsChanged.next(this.albums.slice());

  }
}
