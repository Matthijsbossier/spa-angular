import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Artist } from "../../models/artist.model";
import { FavArtistListService } from "../../services/fav-artist-list.service";
import { Album } from "../../models/album.model";
import { FavAlbumListService } from "../../services/fav-album-list.service";

@Component({
  selector: 'app-fav-album-list',
  templateUrl: './fav-album-list.component.html',
  styleUrls: ['./fav-album-list.component.css']
})
export class FavAlbumListComponent implements OnInit, OnDestroy {
  artists: Artist[];
  albums: Album[];
  private subscription: Subscription;

  constructor(private favAlbumListService: FavAlbumListService) { }

  ngOnInit() {
    this.albums = this.favAlbumListService.getAlbums();
    this.subscription = this.favAlbumListService.albumsChanged
      .subscribe(
        (albums: Album[]) => {
          this.albums = albums;
        }
      );
  }

  onEditItem(index: number) {
    this.favAlbumListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
