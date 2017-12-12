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
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() album: Album;
  @Input() index: number;
  id: number;
  albums: Album[];
  artist: Artist;
  songs: Song[];
  subscription: Subscription;

  constructor(private artistService: ArtistService,
            //private albumService: AlbumService, 
            private router: Router,
            private route: ActivatedRoute){ 

            }

//   ngOnInit() {
//       this.subscription = this.artistService.albumsChanged
//             .subscribe(
//             //     (album: Album[]) => {
//             //         album = album;
//             //     }
//             // );

//                 (params: Params) => {
//               this.index = +params['id'];
//               this.album = this.artistService.getAlbum(this.index);
//               //this.albums = this.artistService.getAlbums(this.index);
//             });
//       //this.songs = this.artistService.getSongs(this.index);
//   }

  ngOnInit() {
        this.subscription = this.artistService.albumsChanged
              .subscribe(
             (albums: Album[]) => {
               this.albums = albums;
               this.album = this.artistService.getAlbum(this.index);
             }
         );
    
  }

}
