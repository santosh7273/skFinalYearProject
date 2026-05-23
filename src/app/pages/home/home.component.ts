import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  features = [
    {
      title: 'Image Upload',
      desc: 'Simply upload a photo of your hair/scalp for instant analysis.',
      icon: 'image'
    },
    {
      title: 'AI Detection',
      desc: 'Advanced model identifies conditions with high accuracy.',
      icon: 'ai'
    },
    {
      title: 'Instant Report',
      desc: 'Get a detailed analysis with actionable recommendations.',
      icon: 'report'
    }
  ];

}