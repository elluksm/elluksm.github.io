import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WelcomeComponent } from './landing-page/welcome/welcome.component';
import { AboutUsComponent } from './landing-page/about-us/about-us.component';
import { ContactFormComponent } from './landing-page/contact-form/contact-form.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { AppRoutingModule } from './/app-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { MyRoutesComponent } from './my-routes/my-routes.component';
import { LoginComponent } from './login/login.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ListEditComponent } from './to-do-list/list-edit/list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    WelcomeComponent,
    AboutUsComponent,
    ContactFormComponent,
    CarouselComponent,
    ToDoListComponent,
    MyRoutesComponent,
    LoginComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ListEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
