import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { FavArtistListService } from "../../../services/fav-artist-list.service";
import { Artist } from "../../../models/artist.model";
import { Album } from "../../../models/album.model";
import { FavAlbumListService } from "../../../services/fav-album-list.service";

@Component({
  selector: 'app-fav-album-edit',
  templateUrl: './fav-album-edit.component.html',
  styleUrls: ['./fav-album-edit.component.css']
})
export class FavAlbumEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Album;

  constructor(private favAlbumListService: FavAlbumListService) { }

  ngOnInit() {
    this.subscription = this.favAlbumListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.favAlbumListService.getAlbum(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            //description: this.editedItem.description
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    // const value = form.value;
    // const newArtist = new Artist(value.name, value.description);
    // if (this.editMode) {
    //   this.favArtistListService.updateArtist(this.editedItemIndex, newArtist);
    // } else {
    //   this.favArtistListService.addArtist(newArtist);
    // }
    // this.editMode = false;
    // form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.favAlbumListService.deleteAlbum(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
