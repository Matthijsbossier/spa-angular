import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Artist } from "../../../models/artist.model";
import { ArtistService } from "../../../services/artist.service";
import { Album } from "../../../models/album.model";
import { Subscription } from "rxjs/Subscription";
import { Song } from "../../../models/song.model";
//import { AlbumService } from "../../../services/album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  @Input() artist: Artist;
  @Input() album: Album;
  @Input() index: number;
  @Input() albums: Album[];
  subscription: Subscription;
  song: Song;
  songs: Song[];

  constructor(private artistService: ArtistService,
              private route: ActivatedRoute,
              //private albumService: AlbumService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.index = +params['index'];
              this.album = this.artistService.getAlbum(this.index);
              this.albums = this.artistService.getAlbums(this.index);
            })
            //this.songs = this.artistService.getSongs(this.index);
        ;
        
  }

  onAddToFavArtistList() {
    this.artist = this.artistService.getArtist(this.index)
    this.artistService.addArtistToFavArtistList(this.artist);
  }

  onEditArtist() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteArtist() {
    this.artistService.deleteArtist(this.index);
    this.router.navigate(['/artists']);
  }

}
