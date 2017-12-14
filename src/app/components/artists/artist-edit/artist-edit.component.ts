import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ArtistService } from "../../../services/artist.service";

@Component({
    selector: 'app-artist-edit',
    templateUrl: './artist-edit.component.html',
    styleUrls: ['./artist-edit.component.css']
})
export class ArtistEditComponent implements OnInit {
    id: number;
    editMode = false;
    artistForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private artistService: ArtistService,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.editMode = params['id'] != null;
                    this.initForm();
                }
            );
    }

    onSubmit() {
        if (this.editMode) {
            this.artistService.updateArtist(this.id, this.artistForm.value);
        } else {
            this.artistService.addArtist(this.artistForm.value);
        }
        this.onCancel();
    }

    onAddAlbum() {
        (<FormArray>this.artistForm.get('albums')).push(
            new FormGroup({
                'name': new FormControl(null, Validators.required),
                'year': new FormControl(null, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)

                ]),
                'imagePath': new FormControl(null, Validators.required),

            })
        );
    }

    onDeleteAlbum(index: number) {
        (<FormArray>this.artistForm.get('artists')).removeAt(index);
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    private initForm() {
        let artistName = '';
        let artistImagePath = '';
        let artistDescription = '';
        let artistAlbums = new FormArray([]);

        if (this.editMode) {
            const artist = this.artistService.getArtist(this.id);
            artistName = artist.name;
            artistImagePath = artist.imagePath;
            artistDescription = artist.description;
            if (artist['albums']) {
                for (let album of artist.albums) {
                    artistAlbums.push(
                        new FormGroup({
                            'name': new FormControl(album.name, Validators.required),
                            'year': new FormControl(album.year, [
                                Validators.required,
                                Validators.pattern(/^[1-9]+[0-9]*$/)
                            ]),
                            'imagePath': new FormControl(album.imagePath, Validators.required) 
                        })
                    );
                }
            }
        }

        this.artistForm = new FormGroup({
            'name': new FormControl(artistName, Validators.required),
            'imagePath': new FormControl(artistImagePath, Validators.required),
            'description': new FormControl(artistDescription, Validators.required),
            'albums': artistAlbums
        });
    }

}
