import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Artist } from '../../../../models/artist.model';
import { ArtistService} from '../../../../services/artist.service';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.css']
})
export class ArtistItemComponent implements OnInit {
  @Input() artist: Artist;
  @Input() index: number;

  ngOnInit() {
  }
}
