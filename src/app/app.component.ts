import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainpageComponent } from "./mainpage/mainpage.component";
import { ExperianceComponent } from "./experiance/experiance.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { LinksComponent } from "./links/links.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MainpageComponent, ExperianceComponent,
       EducationComponent, SkillsComponent, LinksComponent,]
})

export class AppComponent {
  title = 'Portfolio';
}
