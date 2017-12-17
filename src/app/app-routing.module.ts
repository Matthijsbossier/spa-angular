import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from "./components/artists/artists.component";
import { ArtistDetailComponent } from "./components/artists/artist-detail/artist-detail.component";
import { ArtistEditComponent } from "./components/artists/artist-edit/artist-edit.component";
import { FavArtistListComponent } from "./components/fav-artist-list/fav-artist-list.component";
import { AlbumItemComponent } from "./components/artists/artist-detail/album-item/album-item.component";
import { AlbumSongComponent } from "./components/artists/artist-detail/album-item/album-song/album-song.component";
import { AlbumSongItemComponent } from "./components/artists/artist-detail/album-item/album-song/album-song-item/album-song-item.component";
import { FavAlbumListComponent } from "./components/fav-album-list/fav-album-list.component";
import { AlbumDetailComponent } from "./components/artists/album-detail/album-detail.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  { path: 'artists', component: ArtistsComponent, children: [
    { path: 'new', component: ArtistEditComponent },
    { path: ':id/edit', component: ArtistEditComponent },
    { path: ':id', component: ArtistDetailComponent, children: [
      { path: ':id', component: AlbumDetailComponent, children: [
        //{ path: 'songs', component: AlbumSongItemComponent}
      ]}
    ]},  
  ] },
  { path: 'fav-artist-list', component: FavArtistListComponent },
  { path: 'fav-album-list', component: FavAlbumListComponent},
  { path: 'artists/:id/:id', component: AlbumSongComponent}

  // all routes in the same root
  // { path: '', redirectTo: '/artists', pathMatch: 'full'},
  // { path: 'artists', component: ArtistsComponent},
  // { path: 'artists/new', component: ArtistEditComponent},
  // { path: 'artists/:id/edit', component: ArtistEditComponent},
  // { path: 'artists/:id', component: ArtistDetailComponent},
  // { path: 'artists/:id/:id', component: AlbumItemComponent},
  // { path: 'fav-artist-list', component: FavArtistListComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
