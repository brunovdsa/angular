import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoModule } from "../photo/photo.module";
import { filterByDescription } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotosListComponent } from "./photos-list.component";
import { PhotosComponent } from "./photos/photos.component";

@NgModule({
    declarations: [
        PhotosListComponent,
        PhotosComponent,
        LoadButtonComponent,
        filterByDescription
    ],
    imports: [
        CommonModule,
        PhotoModule 
    ]
})

export class PhotoListModule{}