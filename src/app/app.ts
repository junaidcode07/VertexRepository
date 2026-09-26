import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
