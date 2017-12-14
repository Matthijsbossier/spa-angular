import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Artist } from "../../../models/artist.model";
import { ArtistService } from "../../../services/artist.service";
import { Album } from "../../../models/album.model";
import { Subscription } from "rxjs/Subscription";
import { Song } from "../../../models/song.model";
//import { AlbumService } from "../../../services/album.service";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artist: Artist;
  album: Album;
  id: number;
  albums: Album[];
  subscription: Subscription;
  song: Song;

  constructor(private artistService: ArtistService,
              private route: ActivatedRoute,
              //private albumService: AlbumService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.id = +params['id'];
              this.artist = this.artistService.getArtist(this.id);
              //this.albums = this.artistService.getAlbums(this.id);
            })
            this.albums = this.artistService.getAlbums(this.id);
        ;
        
  }

  onAddToFavArtistList() {
    this.artist = this.artistService.getArtist(this.id)
    this.artistService.addArtistToFavArtistList(this.artist);
  }

  onEditArtist() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteArtist() {
    this.artistService.deleteArtist(this.id);
    this.router.navigate(['/artists']);
  }

}
