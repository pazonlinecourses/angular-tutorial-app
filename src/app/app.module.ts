import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingViewComponent } from './feature/shopping-list/shopping-view/shopping-view.component';
import { ShoppingEditComponent } from './feature/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './feature/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './feature/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './feature/recipe-book/recipe-detail/recipe-detail.component';
import { AppHeaderComponent } from './feature/app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingViewComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
