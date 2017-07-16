import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var Bokeh: any
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  source : any;
  tools : String;
  plot : any;
  scatterData : any;
  constructor(public navCtrl: NavController) {
// arrays to hold data
    this.source = new Bokeh.ColumnDataSource({
      data: { x: [Math.random()], y: [Math.random()] }
    });

// make the plot and add some tools
    this.tools = "pan,crosshair,wheel_zoom,box_zoom,reset,save";

    this.plot = Bokeh.Plotting.figure({title:'Example of Random data', tools: this.tools, height: 300, width: 300});

    this.scatterData = this.plot.line({ field: "x" }, { field: "y" }, {
      source: this.source,
      line_width: 2
    });

// Show the plot, appending it to the end of the current
// section of the document we are in.
    Bokeh.Plotting.show(this.plot, document.getElementById('myplot'));
  }

  addPoint(){
// The data can be added, but generally all fields must be the
    // same length.
    this.source.data.x.push(Math.random());
    this.source.data.y.push(Math.random());
    // Also, the DataSource object must be notified when it has changed.
    this.source.trigger('change');

  }
}
