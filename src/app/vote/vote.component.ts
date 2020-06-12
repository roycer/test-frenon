import { Component, OnInit, Output, EventEmitter } from '@angular/core';
declare var swal: any;
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html'
})
export class VoteComponent implements OnInit {

    @Output() id_vote = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    onClick(id:number){
      let these = this;
      swal({
        title: "Confirmar votacion?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#dd6b55',
        cancelButtonColor: '#999',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Confirmar',
        dangerMode: true,
    }, function(){
      these.id_vote.emit(id);
    })
      
    }

}
