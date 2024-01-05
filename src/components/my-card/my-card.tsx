import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCardComponent {
  render() {
    <div class={'my card'}>This id my card component</div>;
  }
}
