import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home/home';
import {AboutComponent} from './about/about';

@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES ],
  styles: [ require('./app.scss') ],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/home', component: HomeComponent, name: 'Home', useAsDefault: true },
  { path: '/about', component: AboutComponent, name: 'About' }
])
export class App implements OnInit {
  ngOnInit() {
      console.log('App loaded!!');
  }
}
