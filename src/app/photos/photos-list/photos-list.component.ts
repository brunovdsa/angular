import {  Component,  OnChanges,  OnDestroy,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
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
    this.debounce
    .pipe(debounceTime(300)) //usado para ganhar desempenho na hora de filtrar
    .subscribe(filter => this.filter = filter); 
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe(); //usado para deixar de usar a memoria por conta do debounce time
  }

  load(){
    this.photoService
    .listFromUserPaginated(this.userName, +this.currentPage)
    .subscribe(photos => {
      this.photos = this.photos.concat(photos)//... para fazer para cada foto retornada
      if(!photos.length) this.hasMore = false;
    })
  }
}
 