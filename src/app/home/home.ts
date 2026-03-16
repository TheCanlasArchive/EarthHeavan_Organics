import { Component } from '@angular/core';
import { NgFor } from '@angular/common';  
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,                       
  imports: [NgFor, RouterLink],                        
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  fruitItems = [
    { name: 'Strawberries', desc: 'Sweet, sun-ripened and pesticide-free.', price: 450, img: '/assets/fruits/strawberry.png' },
    { name: 'Apple', desc: 'Crisp, naturally grown, and rich in antioxidants.', price: 180, img: '/assets/fruits/apple.png' },
    { name: 'Orange', desc: 'Bright, tangy, and naturally grown with high Vitamin C.', price: 160, img: '/assets/fruits/orange.png' },
    { name: 'Bananas', desc: 'Soft, sweet, energy-rich, and naturally grown.', price: 70, img: '/assets/fruits/banana.png' },
    { name: 'Lemon', desc: 'Zesty, fragrant, and naturally grown — perfect for drinks.', price: 220, img: '/assets/fruits/lemon.png' },
    { name: 'Mango', desc: 'Sweet, tropical, and naturally grown — a Filipino favorite.', price: 140, img: '/assets/fruits/mango.png' },
    { name: 'Grapes', desc: 'Fresh, juicy, and naturally grown — great for snacking.', price: 260, img: '/assets/fruits/grape.png' },
    { name: 'Blueberries', desc: 'Sweet-tart, antioxidant-rich, and naturally grown.', price: 650, img: '/assets/fruits/blueberries.png' },
  ];

  vegetableItems = [
    { name: 'Carrots', desc: 'Rich in beta-carotene, crisp, and freshly harvested.', price: 80, img: '/assets/vegetables/carrot.png' },
    { name: 'Ginger', desc: 'Aromatic root, perfect for cooking and herbal remedies.', price: 160, img: '/assets/vegetables/ginger.png' },
    { name: 'Onion', desc: 'Adds natural flavor and aroma; a staple in Filipino dishes.', price: 170, img: '/assets/vegetables/onion.png' },
    { name: 'Garlic', desc: 'Strong natural flavor; commonly used in sautéing and seasoning.', price: 180, img: '/assets/vegetables/garlic.png' },
    { name: 'Tomato', desc: 'Juicy, nutritious, and packed with lycopene.', price: 90, img: '/assets/vegetables/tomato.png' },
    { name: 'Broccoli', desc: 'Hydroponic, freshly harvested, and packed with antioxidants.', price: 220, img: '/assets/vegetables/broccoli.png' },
    { name: 'Cabbage', desc: 'Fresh, crunchy, and rich in vitamins and fiber', price: 70, img: '/assets/vegetables/cabbage.png' },
    { name: 'Cauliflower', desc: 'Mild, versatile vegetable rich in fiber and vitamins.', price: 180, img: '/assets/vegetables/cauliflower.png' },
  ];

  grainItems = [
    { name: 'Brown Rice', desc: 'Whole grain goodness, naturally high in fiber and nutrients. A healthier alternative to white rice with a rich, nutty flavor.', price: 60, img: '/assets/grains&nuts/brown rice.png' },
    { name: 'Whole Wheat Flour', desc: 'Fiber-rich organic flour made from whole wheat grains. Great for healthier bread, pastries, and tortillas.', price: 70, img: '/assets/grains&nuts/whole wheat flour.png' },
    { name: 'Almonds', desc: 'Crunchy, nutrient-dense nuts packed with healthy fats, antioxidants, and protein — perfect for snacking or baking.', price: 600, img: '/assets/grains&nuts/almonds.png' },
    { name: 'Chia Seeds', desc: 'Protein-rich organic seeds loaded with omega-3, antioxidants, and fiber. A nutritious addition to smoothies and oatmeal.', price: 200, img: '/assets/grains&nuts/chia seeds.png' },
    { name: 'Oats', desc: 'Whole grain oats rich in fiber and essential minerals — ideal for heart-healthy breakfasts and baking.', price: 80, img: '/assets/grains&nuts/oats.png' },
  ];

  recipeItems = [
    { name: 'Strawberry Smoothie', tag: 'Fruits', desc: 'A creamy blend of fresh strawberries, bananas, and organic oats — perfect for breakfast or a light snack.', uses: 'Strawberries, Bananas, Oats', img: '/assets/strawberry-smoothie.png' },
    { name: 'Fresh Garden Salad', tag: 'Vegetables', desc: 'A crisp salad with lettuce, tomatoes, carrots, and cucumbers topped with a light lemon-olive oil dressing.', uses: 'Lettuce, Tomato, Carrots, Cucumber, Lemon', img: '/assets/fresh-salad.png' },
    { name: 'Roasted Organic Sweet Potatoes', tag: 'Grains & Roots', desc: 'Oven-roasted sweet potatoes seasoned with garlic, herbs, and a drizzle of olive oil. Simple and comforting.', uses: 'Sweet Potatoes, Garlic, Herbs', img: '/assets/roasted-sweet-potato.png' }
  ];
}
