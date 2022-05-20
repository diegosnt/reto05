import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  cities = ['Barcelona','Madrid','Lima'];
  title = 'Día 5';
  name! : string;
  selection!: string;


  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change ->', changes);
  }

  ngOnInit(): void {
    console.log('OnInit ->')
  }

  ngOnDestroy(): void {
    console.log('Destroy ->');
  }

  onCityClicked(city: string):void{
    console.log('City ->', city);
    this.selection = city;
  }
  onClear():void{
    this.selection = '';
  }

}
