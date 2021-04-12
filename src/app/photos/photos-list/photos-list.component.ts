import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit{ 

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor( 
    private actvivatedRoute: ActivatedRoute,
    private photoService: PhotoService
     ) {}

  ngOnInit(): void {
    this.userName = this.actvivatedRoute.snapshot.params.userName;
    this.photos = this.actvivatedRoute.snapshot.data['photos'];
  
  }

  load(){
    this.photoService
    .listFromUserPaginated(this.userName, +this.currentPage)
    .subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos)//... para fazer para cada foto retornada
      if(!photos.length) this.hasMore = false;
    })
  }
}
 