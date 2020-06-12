import { Component, OnInit, Input, OnChanges } from '@angular/core';

declare var $: any;
declare var Chart: any;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html'
})
export class GraphComponent implements OnChanges, OnInit {

  @Input() valor:[];

  public my_chart = null;
  
  constructor() { }

  ngOnInit(){

    let these = this;

    $(function () {
      var barCtx = $("#chart-bar")[0].getContext('2d');

      var dataBar = {
        labels: ["Cyberpunk 2077", "Death Stranding", "GTA 5", "Smash Bros Ultimate", "Call of Duty"],
        datasets: [
          {
            label: "Leyenda",
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            data: these.valor
          }
        ]
      };

      these.my_chart = new Chart(barCtx, {
            type: "bar",
            data: dataBar,
            options: {
              scales: {
                xAxes: [{
                  stacked: true
                }],
                yAxes: [{
                  stacked: true
                }]
              }
            }
          });
        });
  }

  ngOnChanges(){
    
    if(this.my_chart){

      this.my_chart.data.datasets = [
        {
          label: "Leyenda",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1,
          data: this.valor
        }
      ]
    
      this.my_chart.update();
    }
   
  }
}


