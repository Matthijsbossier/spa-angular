import { Subject } from 'rxjs/Subject';
import { Album } from "../models/album.model";

export class FavAlbumListService {
  albumsChanged = new Subject<Album[]>();
  startedEditing = new Subject<number>();
  private albums: Album[] = [];

  getAlbums() {
    return this.albums.slice();
  }

  getAlbum(index: number) {
    return this.albums[index];
  }

  addAlbum(album: Album) {
    this.albums.push(album);
    this.albumsChanged.next(this.albums.slice());
  }

  addAlbums(albums: Album[]) {
    this.albums.push(...albums);
    this.albumsChanged.next(this.albums.slice());
  }

  updateAlbum(index: number, newAlbum: Album) {
    this.albums[index] = newAlbum;
    this.albumsChanged.next(this.albums.slice());
  }

  deleteAlbum(index: number) {
    this.albums.splice(index, 1);
    this.albumsChanged.next(this.albums.slice());
  }
}
