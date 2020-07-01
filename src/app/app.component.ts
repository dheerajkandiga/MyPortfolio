import { Component, OnInit } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyPortfolio';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
            {label: 'Info', icon: 'pi pi-fw pi-chart-bar', routerLink:'about'},
            {label: 'Message', icon: 'pi pi-fw pi-calendar', routerLink:'project'}
        ];
  }
}

@Component({
    selector: 'app-info',
    template: `
    <div class="p-grid p-fluid p-justify-center" style="text-align: center;">
        <div class="p-col-12 p-md-3">
            <label>Stage Name</label>
            <p>Avicii</p>
        </div>
        <div class="p-col-12 p-md-3">
            <label>Genre</label>
            <p>Progressive House</p>
        </div>
        <div class="p-col-12 p-md-3">
            <label>Label</label>
            <p>LE7ELS</p>
        </div>
    </div>
    <div class="p-grid p-fluid p-justify-center" style="text-align: center;">
        <div class="p-col-12 p-md-3">
            <label>Real Name</label>
            <p>Tim Berling</p>
        </div>
        <div class="p-col-12 p-md-3">
            <label>Birth Day</label>
            <p>09/08/1989</p>
        </div>
        <div class="p-col-12 p-md-3">
            <label>Death Day</label>
            <p>04/20/2018</p>
        </div>
    </div>
    `
})
export class InfoComponent {
    ngOnInit() {
    }
}

@Component({
    selector: 'app-message',
    template: `
    <h3>Inline Message CSS</h3>
    <p>p-message component is used to display inline messages mostly within forms.</p>
    `
})
export class MessageComponent {
}
