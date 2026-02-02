import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar';


interface Feature {
  title: string;
  description: string;
  icon: string; // we’ll map icons later
}

interface Step {
  number: number;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.scss']
})
export class LandingPage implements OnInit {

  scrolled = false;
  mousePosition = { x: 0, y: 0 };

  features: Feature[] = [
    {
      title: 'Bank-Level Security',
      description: 'Your financial data is protected with military-grade encryption and security protocols.',
      icon: 'shield'
    },
    {
      title: 'Smart Insights',
      description: 'Get AI-powered analytics and recommendations to optimize your financial decisions.',
      icon: 'trending-up'
    },
    {
      title: 'Inclusive Access',
      description: 'Financial services designed for everyone, regardless of background or income level.',
      icon: 'users'
    },
    {
      title: 'Instant Transactions',
      description: 'Send and receive money instantly with our lightning-fast payment infrastructure.',
      icon: 'zap'
    }
  ];

  steps: Step[] = [
    {
      number: 1,
      title: 'Sign Up',
      description: 'Create your account in under 2 minutes with just your email and basic information.'
    },
    {
      number: 2,
      title: 'Connect Your Accounts',
      description: 'Securely link your bank accounts and start tracking your finances automatically.'
    },
    {
      number: 3,
      title: 'Start Growing',
      description: 'Use our tools to budget, save, invest, and achieve your financial goals faster.'
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'Inclusive Finance transformed how I manage my business finances. The insights are incredible and have helped me grow my revenue by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Designer',
      content: 'Finally, a fintech app that doesn’t exclude freelancers! The interface is beautiful and the features are exactly what I needed.',
      rating: 5
    }
  ];
verticalLines: any;
horizontalLines: any;

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mousePosition = { x: e.clientX, y: e.clientY };
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
