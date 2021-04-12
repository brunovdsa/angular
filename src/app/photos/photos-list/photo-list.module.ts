import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "src/app/shared/components/card/card.module";
import { DarkenOnHoverModule } from "src/app/shared/directives/darken-on-hover/darken-on-hover.modules";
import { PhotoModule } from "../photo/photo.module";
import { filterByDescription } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotosListComponent } from "./photos-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations: [
        PhotosListComponent,
        PhotosComponent,
        LoadButtonComponent,
        filterByDescription,
        SearchComponent 
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
    ]
})

export class PhotoListModule {}