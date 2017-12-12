import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ShoppingListService } from "./components/shopping-list/shopping-list.services";
import { DropdownDirective } from "./shared/dropdown.directive";
import { RecipeItemComponent } from "./components/recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./components/recipes/recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./components/recipes/recipe-list/recipe-list.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./components/shopping-list/shopping-edit/shopping-edit.component";
import { RecipeService } from "./services/recipe.service";
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { RecipeStartComponent } from "./components/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./components/recipes/recipe-edit/recipe-edit.component";
import { ArtistsComponent } from "./components/artists/artists.component";
import { ArtistService } from "./services/artist.service";
import { ArtistListComponent } from "./components/artists/artist-list/artist-list.component";
import { ArtistItemComponent } from "./components/artists/artist-list/artist-item/artist-item.component";
import { ArtistDetailComponent } from "./components/artists/artist-detail/artist-detail.component";
import { ArtistEditComponent } from "./components/artists/artist-edit/artist-edit.component";
import { FavArtistListComponent } from "./components/fav-artist-list/fav-artist-list.component";
import { FavArtistEditComponent } from "./components/fav-artist-list/fav-artist-edit/fav-artist-edit.component";
import { FavArtistListService } from "./services/fav-artist-list.service";
import { AlbumItemComponent } from "./components/artists/artist-detail/album-item/album-item.component";
import { AlbumService } from "./services/album.service";
import { FavAlbumListService } from "./services/fav-album-list.service";
import { AlbumSongComponent } from "./components/artists/artist-detail/album-item/album-song/album-song.component";
import { AlbumSongItemComponent } from "./components/artists/artist-detail/album-item/album-song/album-song-item/album-song-item.component";
import { ArtistStartComponent } from "./components/artists/artist-start/artist-start.component";
import { FavAlbumListComponent } from "./components/fav-album-list/fav-album-list.component";
import { FavAlbumEditComponent } from "./components/fav-album-list/fav-album-edit/fav-album-edit.component";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    ArtistsComponent,
    ArtistListComponent,
    ArtistItemComponent,
    ArtistDetailComponent,
    ArtistEditComponent,
    FavArtistListComponent,
    FavArtistEditComponent,
    FavAlbumListComponent,
    FavAlbumEditComponent,
    AlbumItemComponent,
    AlbumSongComponent,
    AlbumSongItemComponent,
    ArtistStartComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    RecipeService,
    ArtistService,
    ShoppingListService,
    FavArtistListService,
    AlbumService,
    FavAlbumListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
