import { Component, OnInit, Input } from '@angular/core';
import { Album } from "../../../../models/album.model";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";
import { ArtistService } from "../../../../services/artist.service";
import { Router, Params } from "@angular/router";
import { Artist } from "../../../../models/artist.model";
import { Song } from "../../../../models/song.model";
import { AlbumService } from "../../../../services/album.service";


@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit {
  @Input() album: Album;
  @Input() index: number;
  id: number;
  albums: Album[];
  artist: Artist;
  @Input() song: Song;
  subscription: Subscription; 
  @Input() songs: Song[];

  constructor(private artistService: ArtistService,
            //private albumService: AlbumService, 
            private router: Router,
            private route: ActivatedRoute){ 

            }

  ngOnInit() {
      this.subscription = this.artistService.songsChanged
            .subscribe(
                (song: Song[]) => {
                    song = song;
                }
            );

                (params: Params) => {
              this.index = +params['id'];
              //this.song = this.artistService.getSong(this.index);
              this.songs = this.artistService.getSongs(this.index);
            };
      //this.songs = this.artistService.getSongs(this.index);
      
  }

  // ngOnInit() {
  //       this.subscription = this.artistService.albumsChanged
  //             .subscribe(
  //            (albums: Album[]) => {
  //              this.albums = albums;
  //              this.album = this.artistService.getAlbum(this.index);
  //            }
  //        );
    
  // }
  

}
