import { Component } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-experiance',
  standalone: true,
  imports: [],
  templateUrl: './experiance.component.html',
  styleUrl: './experiance.component.css'
})
export class ExperianceComponent {

  ngOnInit(){
    AOS.init({
      offset: 250,
      duration: 1000,
    });
  }

}
