import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, NgTemplateOutlet, RouterLink],
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.css']
})
export class NotFound {
  searchTerm = '';
  searchPerformed = false;

  // You can replace this with your real product list or inject a service
  allItems = [
    { name: 'Strawberries', desc: 'Sweet, sun-ripened and pesticide-free.', price: 450, img: '/assets/fruits/strawberry.png' },
    { name: 'Apple', desc: 'Crisp, naturally grown, and rich in antioxidants.', price: 180, img: '/assets/fruits/apple.png' },
    { name: 'Orange', desc: 'Bright, tangy, and naturally grown with high Vitamin C.', price: 160, img: '/assets/fruits/orange.png' },
    { name: 'Bananas', desc: 'Soft, sweet, energy-rich, and naturally grown.', price: 70, img: '/assets/fruits/banana.png' },
    { name: 'Lemon', desc: 'Zesty, fragrant, and naturally grown — perfect for drinks.', price: 220, img: '/assets/fruits/lemon.png' },
    { name: 'Mango', desc: 'Sweet, tropical, and naturally grown — a Filipino favorite.', price: 140, img: '/assets/fruits/mango.png' },
    { name: 'Grapes', desc: 'Fresh, juicy, and naturally grown — great for snacking.', price: 260, img: '/assets/fruits/grape.png' },
    { name: 'Blueberries', desc: 'Sweet-tart, antioxidant-rich, and naturally grown.', price: 650, img: '/assets/fruits/blueberries.png' },

    { name: 'Carrots', desc: 'Rich in beta-carotene, crisp, and freshly harvested.', price: 80, img: '/assets/vegetables/carrot.png' },
    { name: 'Ginger', desc: 'Aromatic root, perfect for cooking and herbal remedies.', price: 160, img: '/assets/vegetables/ginger.png' },
    { name: 'Onion', desc: 'Adds natural flavor and aroma; a staple in Filipino dishes.', price: 170, img: '/assets/vegetables/onion.png' },
    { name: 'Garlic', desc: 'Strong natural flavor; commonly used in sautéing and seasoning.', price: 180, img: '/assets/vegetables/garlic.png' },
    { name: 'Tomato', desc: 'Juicy, nutritious, and packed with lycopene.', price: 90, img: '/assets/vegetables/tomato.png' },
    { name: 'Broccoli', desc: 'Hydroponic, freshly harvested, and packed with antioxidants.', price: 220, img: '/assets/vegetables/broccoli.png' },
    { name: 'Cabbage', desc: 'Fresh, crunchy, and rich in vitamins and fiber', price: 70, img: '/assets/vegetables/cabbage.png' },
    { name: 'Cauliflower', desc: 'Mild, versatile vegetable rich in fiber and vitamins.', price: 180, img: '/assets/vegetables/cauliflower.png' },

    { name: 'Brown Rice', desc: 'Whole grain goodness, naturally high in fiber and nutrients. A healthier alternative to white rice with a rich, nutty flavor.', price: 60, img: '/assets/grains&nuts/brown rice.png' },
    { name: 'Whole Wheat Flour', desc: 'Fiber-rich organic flour made from whole wheat grains. Great for healthier bread, pastries, and tortillas.', price: 70, img: '/assets/grains&nuts/whole wheat flour.png' },
    { name: 'Almonds', desc: 'Crunchy, nutrient-dense nuts packed with healthy fats, antioxidants, and protein — perfect for snacking or baking.', price: 600, img: '/assets/grains&nuts/almonds.png' },
    { name: 'Chia Seeds', desc: 'Protein-rich organic seeds loaded with omega-3, antioxidants, and fiber. A nutritious addition to smoothies and oatmeal.', price: 200, img: '/assets/grains&nuts/chia seeds.png' },
  ];

  filteredItems = [...this.allItems];

  onSearch() {
    const term = this.searchTerm.trim().toLowerCase();
    this.searchPerformed = true;

    if (!term) {
      this.filteredItems = [];
      return;
    }

    this.filteredItems = this.allItems.filter(item =>
      item.name.toLowerCase().includes(term) ||
      item.desc.toLowerCase().includes(term)
    );
  }
}

