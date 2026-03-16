import { Component } from '@angular/core';
import { NgFor } from '@angular/common';  
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about-products',
  imports: [NgFor, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})

export class About {
   
  stats = [
    { label: 'Partner Farms', value: '50+' },
    { label: 'Acres Conserved', value: '1,200' },
    { label: 'Happy Families', value: '5k+' },
    { label: 'Varieties', value: '100+' }
  ];

  founders = [
    { 
      name: 'Toni Santos', 
      role: 'Co-Founder & Grower', 
      bio: 'A third-generation farmer from Benguet committed to organic soil regeneration.', 
      image: 'assets/images/founder1.png' 
    },
    { 
      name: 'James Reid', 
      role: 'Head of Logistics', 
      bio: 'Supply chain expert ensuring your greens arrive within 24 hours of harvest.', 
      image: 'assets/images/founder2.png' 
    },
    { 
      name: 'Joshua Garcia', 
      role: 'Community Lead', 
      bio: 'Passionate about connecting city households with sustainable food sources.', 
      image: 'assets/images/founder3.png' 
    }
  ];

  processSteps = [
    { step: 1, title: 'Sown with Care', desc: 'Planted in nutrient-rich, chemical-free soil.', icon: 'assets/images/step1.png' },
    { step: 2, title: 'Harvested at Peak', desc: 'Picked only when perfectly ripe.', icon: 'assets/images/step2.png' },
    { step: 3, title: 'Quality Check', desc: 'Inspected by hand for size and color.', icon: 'assets/images/step3.png' },
    { step: 4, title: 'To Your Door', desc: 'Delivered in eco-friendly cooling boxes.', icon: 'assets/images/step4.png' }
  ];

  timeline = [
    { year: '2020', title: 'The Seed is Planted', desc: 'Founded in a small garage in Baguio City with just one truck.' },
    { year: '2022', title: 'Organic Certification', desc: 'Achieved 100% Organic status for our entire leafy greens supply chain.' },
    { year: '2024', title: 'The Metro Expansion', desc: 'Opened our Tagaytay hub to serve Metro Manila with same-day delivery.' },
    { year: '2025', title: 'EarthHaven Today', desc: 'Serving over 500 households weekly with a team of dedicated experts.' }
  ];
}


