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

@Component({
  selector: 'app-fav-artist-edit',
  templateUrl: './fav-artist-edit.component.html',
  styleUrls: ['./fav-artist-edit.component.css']
})
export class FavArtistEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Artist;

  constructor(private favArtistListService: FavArtistListService) { }

  ngOnInit() {
    this.subscription = this.favArtistListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.favArtistListService.getArtist(index);
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
    this.favArtistListService.deleteArtist(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
