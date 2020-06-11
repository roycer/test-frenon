import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  public flag : boolean = true;
  public api_id_vote = -1
  constructor() {

  }

  onClick(tabs:boolean){
    this.flag = tabs;
  }
  
  onVote(e_:number){
    this.api_id_vote = e_;
  }
}
