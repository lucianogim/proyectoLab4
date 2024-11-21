import { Component } from '@angular/core';
import { ProfileComponent } from "../../components/profile/profile.component";

@Component({
  selector: 'app-page-profile',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './page-profile.component.html',
  styleUrl: './page-profile.component.css'
})
export class PageProfileComponent {

}
