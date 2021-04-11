import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosFormComponent } from "./photos-form/photos-form.component";
import { PhotosComponent } from './photos-list/photos/photos.component';
import { filterByDescription } from "./photos-list/filter-by-description.pipe";
import { LoadButtonComponent } from './photos-list/load-button/load-button.component';

@NgModule({
    declarations: [ 
        PhotoComponent,
        PhotosListComponent,
        PhotosFormComponent,
        PhotosComponent,
        filterByDescription,
        LoadButtonComponent 
    ],
    imports: [
        HttpClientModule,
        CommonModule 
    ]
})

export class PhotosModule{} 