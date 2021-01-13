import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
  @action
  name(person) {
      alert(`The person's name is ${person.srcElement.outerText}!`)
  }
}