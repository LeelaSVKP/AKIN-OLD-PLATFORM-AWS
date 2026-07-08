import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.scss'
})
export class BlogsPageComponent implements OnInit, AfterViewInit {
  currentInfoType: string;
  activeOrderList: string[] = [];
  activeTab: string = '';
  blogsScreenHeight: number = 100;
  currentBlogIndex: number;
  currentVideoIndex: number;
  currentAchievementIndex: number;

  constructor() {
    this.currentBlogIndex = 0;
    this.currentVideoIndex = 0;
    this.currentAchievementIndex = 0;
    this.activeOrderList = [
      'Environmental_Monitoring',
      'Forestry',
      'Real_Estate',
      'Urban_Planning',
      'Infrastructure',
      'Maritime',
      'Emergency_Response',
      'Security_Surveillance',
      'Energy_Utilities'
    ];
    this.currentInfoType = 'home';
    this.blogsScreenHeight = ((70 / 100) * window.innerHeight);
  }

  ngOnInit(): void {
    console.log('Landing Page')
  }

  ngAfterViewInit(): void {
    this.activeTab = this.activeOrderList[0];
    this.runAutoBlogsSlides();
  }

  runAutoBlogsSlides() {
    this.showBlogsSlide(this.currentBlogIndex);
    setInterval(() => {
      this.nextBlogsSlide();
    }, 5000);
  }

  showBlogsSlide(index: number): void {
    const slides = document.querySelectorAll('.blogs-carousel-item');
    const totalSlides = slides.length;

    // Ensure the index is within bounds
    if (index >= totalSlides) {
      this.currentBlogIndex = 0;
    } else if (index < 0) {
      this.currentBlogIndex = totalSlides - 1;
    } else {
      this.currentBlogIndex = index;
    }

    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove('active-blog');
    });

    // Show the current slide
    slides[this.currentBlogIndex].classList.add('active-blog');
  }

  nextBlogsSlide() {
    this.showBlogsSlide(this.currentBlogIndex + 1);
  }

  prevBlogsSlide() {
    this.showBlogsSlide(this.currentBlogIndex - 1);
  }
}
