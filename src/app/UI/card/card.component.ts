import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  constructor(private api:ApiService){}

   pokimon:any=[]
   ngOnInit() {
    
    this.api.getData().subscribe((data:any)=> {
      this.pokimon=data;})
    
   }

}
