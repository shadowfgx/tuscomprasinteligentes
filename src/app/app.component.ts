import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { MainComponent } from "./layout/main/main.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { PostComponent } from "./layout/main/article/post/post.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, MainComponent, FooterComponent, PostComponent]
})
export class AppComponent {
  title = 'tuscomprasinteligentes';
}
