import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  showSearchBox: boolean = false;
  currentInfoType: string;
  activeOrderList: string[] = [];
  activeTab: string = '';
  contactScreenHeight: number = 100;
  blogsScreenHeight: number = 100;
  currentBlogIndex: number;
  currentVideoIndex: number;
  currentAchievementIndex: number;

  constructor(
    private toastr: ToastrService,
  ) {
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
    this.startAutoCarouselSliding();
    this.contactScreenHeight = ((45 / 100) * window.innerHeight);
    this.blogsScreenHeight = ((70 / 100) * window.innerHeight);
  }

  ngOnInit(): void {
    console.log('Landing Page')
  }

  ngAfterViewInit(): void {
    this.setDefaultStartCarouselPoint();
    this.activeTab = this.activeOrderList[0];
    this.runAutoBlogsSlides();
    this.runAutoVideoSlides();
    this.runAutoAchievementsSlides();
  }

  setDefaultStartCarouselPoint() {
    const element = document.getElementById('Environmental_Monitoring');
    if (element) {
      element.classList.add('active-tab');
    }
    this.activeTab = this.activeOrderList[0];
  }

  startAutoCarouselSliding() {
    setInterval(() => {
      const index = this.activeOrderList.findIndex(item => item === this.activeTab);
      if (index === 8) {
        const element = document.getElementById(this.activeTab);
        if (element) {
          element.classList.remove('active-tab');
        }
        const nextElement = document.getElementById(this.activeOrderList[0]);
        if (nextElement) {
          nextElement.classList.add('active-tab');
        }
        this.activeTab = this.activeOrderList[0];
      } else {
        const element = document.getElementById(this.activeTab);
        if (element) {
          element.classList.remove('active-tab');
        }
        const nextElement = document.getElementById(this.activeOrderList[index + 1]);
        if (nextElement) {
          nextElement.classList.add('active-tab');
        }
        this.activeTab = this.activeOrderList[index + 1];
      }
    }, 5000);
  }

  previous() {
    const index = this.activeOrderList.findIndex(item => item === this.activeTab);
    if (index === 0) {
      const element = document.getElementById(this.activeTab);
      if (element) {
        element.classList.remove('active-tab');
      }
      const nextElement = document.getElementById(this.activeOrderList[8]);
      if (nextElement) {
        nextElement.classList.add('active-tab');
      }
      this.activeTab = this.activeOrderList[8];
    } else {
      const element = document.getElementById(this.activeTab);
      if (element) {
        element.classList.remove('active-tab');
      }
      const nextElement = document.getElementById(this.activeOrderList[index - 1]);
      if (nextElement) {
        nextElement.classList.add('active-tab');
      }
      this.activeTab = this.activeOrderList[index - 1];
    }
  }

  next() {
    const index = this.activeOrderList.findIndex(item => item === this.activeTab);
    if (index === 8) {
      const element = document.getElementById(this.activeTab);
      if (element) {
        element.classList.remove('active-tab');
      }
      const nextElement = document.getElementById(this.activeOrderList[0]);
      if (nextElement) {
        nextElement.classList.add('active-tab');
      }
      this.activeTab = this.activeOrderList[0];
    } else {
      const element = document.getElementById(this.activeTab);
      if (element) {
        element.classList.remove('active-tab');
      }
      const nextElement = document.getElementById(this.activeOrderList[index + 1]);
      if (nextElement) {
        nextElement.classList.add('active-tab');
      }
      this.activeTab = this.activeOrderList[index + 1];
    }
  }

  setSelectedTab(selectedTab: string) {
    const index = this.activeOrderList.findIndex(item => item === selectedTab);
    const element = document.getElementById(this.activeTab);
    if (element) {
      element.classList.remove('active-tab');
    }
    const selectedElement = document.getElementById(selectedTab);
    if (selectedElement) {
      selectedElement.classList.add('active-tab');
    }
    this.activeTab = this.activeOrderList[index];
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

  runAutoVideoSlides() {
    this.showVideoSlide(this.currentBlogIndex);
    setInterval(() => {
      this.nextVideoSlide();
    }, 5000);
  }

  showVideoSlide(index: number): void {
    const slides = document.querySelectorAll('.videos-carousel-item');
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
      slide.classList.remove('active-video');
    });

    // Show the current slide
    slides[this.currentBlogIndex].classList.add('active-video');
  }

  nextVideoSlide() {
    this.showVideoSlide(this.currentBlogIndex + 1);
  }

  prevVideoSlide() {
    this.showVideoSlide(this.currentBlogIndex - 1);
  }

  runAutoAchievementsSlides() {
    this.showAchievementsSlide(this.currentAchievementIndex);
    setInterval(() => {
      this.nextAchievementsSlide();
    }, 5000);
  }

  showAchievementsSlide(index: number): void {
    const slides = document.querySelectorAll('.achievements-carousel-item');
    const totalSlides = slides.length;

    // Ensure the index is within bounds
    if (index >= totalSlides) {
      this.currentAchievementIndex = 0;
    } else if (index < 0) {
      this.currentAchievementIndex = totalSlides - 1;
    } else {
      this.currentAchievementIndex = index;
    }

    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove('active-achievement');
    });

    // Show the current slide
    slides[this.currentAchievementIndex].classList.add('active-achievement');
  }

  nextAchievementsSlide() {
    this.showAchievementsSlide(this.currentAchievementIndex + 1);
  }

  prevAchievementsSlide() {
    this.showAchievementsSlide(this.currentAchievementIndex - 1);
  }


  submitQuery(event: any) {
    event.preventDefault();
    this.toastr.success('Submitted Successfully !');
    window.location.reload();
  }
}
