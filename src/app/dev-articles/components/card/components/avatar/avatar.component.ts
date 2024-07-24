import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class AvatarComponent {
  @Input() set name(name: string) {
    const nameArray = name.split(' ');
    this._name = nameArray.reduce((acc, curr) => {
      return acc.concat(Array.from(curr)[0].toUpperCase());
    }, '');
  }

  get name() {
    console.log('NAME', this._name);
    return this._name;
  }

  _name = '';
}
