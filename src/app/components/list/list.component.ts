import { Component, Input, OnInit } from '@angular/core';
import { ListSchema } from '../../schemas/listschema';
import { CardStore } from '../../stores/cardstore';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: ListSchema;
  @Input() cardStore: CardStore;

  constructor() { }

  ngOnInit(): void {
  }

  allowDrop($event) {
    $event.preventDefault();
  }

  drop($event) {
    $event.preventDefault();
    const data = $event.dataTransfer.getData('text');

    let target = $event.target;

    const targetClassName = target.className;

    while ( target.classList.contains('list') ) {
      console.log(target);
      target = target.parentNode;
    }
    target = target.querySelector('.cards');

    if (targetClassName === 'card') {
      $event.target.parentNode.insertBefore(document.getElementById(data), $event.target);
    } else if (targetClassName === 'list__title') {
      if (target.children.length) {
        target.insertBefore(document.getElementById(data), target.children[0]);
      } else {
        target.appendChild(document.getElementById(data));
      }
    } else {
      target.appendChild(document.getElementById(data));
    }

  }
}
