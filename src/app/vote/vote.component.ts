import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html'
})
export class VoteComponent implements OnInit {

    @Output() id_vote = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    onClick(id:number){
      this.id_vote.emit(id);
    }

}
