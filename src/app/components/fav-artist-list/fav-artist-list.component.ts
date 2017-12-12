import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Artist } from "../../models/artist.model";
import { FavArtistListService } from "../../services/fav-artist-list.service";

@Component({
  selector: 'app-fav-artist-list',
  templateUrl: './fav-artist-list.component.html',
  styleUrls: ['./fav-artist-list.component.css']
})
export class FavArtistListComponent implements OnInit, OnDestroy {
  artists: Artist[];
  private subscription: Subscription;

  constructor(private favArtistListService: FavArtistListService) { }

  ngOnInit() {
    this.artists = this.favArtistListService.getArtists();
    this.subscription = this.favArtistListService.artistsChanged
      .subscribe(
        (artists: Artist[]) => {
          this.artists = artists;
        }
      );
  }

  onEditItem(index: number) {
    this.favArtistListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
