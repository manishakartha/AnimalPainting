import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ProductModule,
    CartModule,
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnimalPainting';
}
