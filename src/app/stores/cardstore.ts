import {CardSchema} from '../schemas/cardschema';

export class CardStore {
  cards: Object = {};
  lastid = -1;
  _addCard(card: CardSchema) {
    card.id = String(++this.lastid);
    this.cards[card.id] = card;
    return (card.id);
  }

  getCard(cardId: string) {
    return this.cards[cardId];
  }

  newCard(assignee: string, title: string): string {
    const card = new CardSchema();
    card.assignee = assignee;
    card.title = title;
    return (this._addCard(card));
  }
}
