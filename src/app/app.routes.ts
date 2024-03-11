import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { PostComponent } from './layout/main/article/post/post.component';

export const routes: Routes = [

    { path: '', component: MainComponent },
    { path: 'top5-ventas', component: PostComponent}
];
