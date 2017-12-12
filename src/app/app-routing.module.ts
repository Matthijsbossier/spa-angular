import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./components/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./components/recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./components/recipes/recipe-detail/recipe-detail.component";
import { ArtistsComponent } from "./components/artists/artists.component";
import { ArtistDetailComponent } from "./components/artists/artist-detail/artist-detail.component";
import { ArtistEditComponent } from "./components/artists/artist-edit/artist-edit.component";
import { FavArtistListComponent } from "./components/fav-artist-list/fav-artist-list.component";
import { AlbumItemComponent } from "./components/artists/artist-detail/album-item/album-item.component";

// const appRoutes: Routes = [
//   { path: 'dashboard', component: DashboardComponent },
//   {path: 'recipes', component: RecipesComponent},
//   {path: 'shopping-list', component: ShoppingListComponent},
//   { path: '**', redirectTo: '/recipes' }
// ];

const appRoutes: Routes = [
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  { path: 'artists', component: ArtistsComponent, children: [
    //{ path: '', component: RecipeStartComponent },
    { path: 'new', component: ArtistEditComponent },
    { path: ':id', component: ArtistDetailComponent, children: [
      { path: ':id/:id', component: AlbumItemComponent}
    ] },
    //{ path: ':id/:id/:id', component: AlbumSongComponent}
    { path: ':id/edit', component: ArtistEditComponent },
  ] },
  { path: 'fav-artist-list', component: FavArtistListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
