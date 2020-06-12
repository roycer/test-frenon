import { Component, OnChanges } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  public flag : boolean = true;
  public items: any;
  public api_valor = [];
  constructor(private appService:AppService) {

    this.appService.getItems().subscribe((items:any)=>{
      this.items = items;
      this.api_valor = this.items[0]['valor'];
    });

    
  }

  onClick(tabs:boolean){
    this.flag = tabs;
  }
  
  onVote(e_:number){

    if(e_>-1){
      this.api_valor[e_]++;
    }
    
    this.appService.setItems({name:'g', valor:this.api_valor});
  }

}
