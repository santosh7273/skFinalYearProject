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
      title: 'Smart Upload',
      desc: 'Simply upload a photo of your hair/scalp for instant analysis.',
      icon: 'image'
    },
    {
      title: 'AI Diagnosis',
      desc: 'Advanced AI model identifies conditions with high accuracy.',
      icon: 'ai'
    },
    {
      title: 'Detailed Insights',
      desc: 'Get complete analysis with actionable care recommendations.',
      icon: 'report'
    }
  ];

}