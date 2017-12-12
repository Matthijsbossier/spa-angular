import { Component, OnInit, Input } from "@angular/core";
import { Song } from "../../../../../../models/song.model";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { ArtistService } from "../../../../../../services/artist.service";
import { Album } from "../../../../../../models/album.model";

@Component({
  selector: 'app-album-song-item',
  templateUrl: './album-song-item.component.html',
  styleUrls: ['./album-song-item.component.css']
})
export class AlbumSongItemComponent implements OnInit {
  //song: Song;
  @Input() index: number;
  songs: Song[];
  subscription: Subscription;
  @Input() album: Album;
  
  constructor(private artistService: ArtistService,
              private route: ActivatedRoute,
              //private albumService: AlbumService,
              private router: Router) {
  }


  ngOnInit() {
        this.subscription = this.artistService.songsChanged
              .subscribe(
             (songs: Song[]) => {
               this.songs = songs;
               this.album = this.artistService.getAlbum(this.index);
               this.songs = this.artistService.getSongs(this.index);
             }
         );
    
  }
}