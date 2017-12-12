import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Artist } from '../../../models/artist.model';
import { ArtistService } from '../../../services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  artists: Artist[];
  subscription: Subscription;

  constructor(private artistService: ArtistService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.artistService.artistsChanged
        .subscribe(
            (artists: Artist[]) => {
              this.artists = artists;
            }
        );
    this.artists = this.artistService.getArtists();
  }

  onNewArtist() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}