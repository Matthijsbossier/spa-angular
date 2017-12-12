import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";

import { Router, Params } from "@angular/router";
import { Song } from "../../../../../models/song.model";
import { Album } from "../../../../../models/album.model";
import { Artist } from "../../../../../models/artist.model";
import { ArtistService } from "../../../../../services/artist.service";



@Component({
  selector: 'app-album-song',
  templateUrl: './album-song.component.html',
  styleUrls: ['./album-song.component.css']
})
export class AlbumSongComponent implements OnInit {
  @Input() song: Song;
  @Input() index: number;
  @Input() album: Album;
  id: number;
  albums: Album[];
  @Input() artist: Artist;
  songs: Song[];
  subscription: Subscription;
  //album: Album;

  constructor(private artistService: ArtistService,
            //private albumService: AlbumService, 
            private router: Router,
            private route: ActivatedRoute){ 

            }

  ngOnInit() {
        this.subscription = this.artistService.songsChanged
              .subscribe(
             (songs: Song[]) => {
               this.songs = songs;
               this.artist = this.artistService.getArtist(this.index);
               this.album = this.artistService.getAlbum(this.index);
               this.albums = this.artistService.getAlbums(this.index);
               this.songs = this.artistService.getSongs(this.index);
             }
         );
    
  }

}
