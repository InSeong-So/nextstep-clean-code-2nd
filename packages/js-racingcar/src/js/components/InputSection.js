import ComponentHandler from './abstract/index.js';
import { MAX_GAME_TRY_COUNT } from '../constants.js';
import { checkValidations } from '../services.js';
import * as Helpers from '../helpers/index.js';

const template = /*html*/ `
<section class="d-flex justify-center mt-5">
  <div>
    <form id="car-names-form">
      <h1 class="text-center">ποΈ μλμ°¨ κ²½μ£Ό κ²μ</h1>
      <p>
        5μ μ΄νμ μλμ°¨ μ΄λ¦μ μ½€λ§λ‘ κ΅¬λΆνμ¬ μλ ₯ν΄μ£ΌμΈμ. <br />
        μμ : EAST, WEST, SOUTH, NORTH
      </p>
      <div class="d-flex">
        <input type="text" class="w-100 mr-2" id="car-names" name="car-names" placeholder="μμ) EAST, WEST, SOUTH, NORTH" required />
        <button type="submit" class="btn btn-cyan" id="car-names-confirm">νμΈ</button>
      </div>
    </form>
    <form class="hidden" id="game-try-count-form">
      <p>μλν  νμλ₯Ό μλ ₯ν΄μ£ΌμΈμ.</p>
      <div class="d-flex">
        <input type="number" class="w-100 mr-2" id="game-try-count" name="game-try-count" placeholder="μλ νμ" required min="1" max="${MAX_GAME_TRY_COUNT}" />
        <button type="submit" class="btn btn-cyan" id="game-try-count-confirm">νμΈ</button>
      </div>
    </form>
  </div>
</section>`;

export default class InputSection extends ComponentHandler {
  #carNames;
  #removeHandler;

  constructor() {
    super();
    this.insertAdjacentElement('afterbegin', Helpers.$element(template));
  }

  checkInputCarNames = event => {
    if (!event.target.matches('#car-names-form')) return;
    event.preventDefault();

    // prettier-ignore
    const parsedCarNames = this.process(
      Helpers.pipe(
        Helpers.trim,
        Helpers.trimComma,
        Helpers.split,
        Helpers.removeSpace,
        checkValidations,
      ),
      event.target.elements['car-names'].value,
    );

    if (Helpers.isNull(parsedCarNames)) return;

    // prettier-ignore
    this.#carNames = parsedCarNames;
    this.process(
      Helpers.pipe(
        () => Helpers.$show('#game-try-count-form'),
        () => Helpers.$disabled('#car-names'),
        () => Helpers.$disabled('#car-names-confirm'),
        () => setTimeout(() => Helpers.$focus('#game-try-count'), 100),
      ),
    );
  };

  checkInputTryCount = event => {
    if (!event.target.matches('#game-try-count-form')) return;
    event.preventDefault();

    this.dispatch('inputted', {
      carNames: this.#carNames,
      tryCount: event.target.elements['game-try-count'].valueAsNumber,
    });

    // prettier-ignore
    this.process(
      Helpers.pipe(
        () => Helpers.$disabled('#game-try-count'),
        () => Helpers.$disabled('#game-try-count-confirm'),
      ),
    );
  };

  connectedCallback() {
    this.#removeHandler = this.bindHandler([
      {
        type: 'submit',
        callback: this.checkInputCarNames,
      },
      {
        type: 'submit',
        callback: this.checkInputTryCount,
      },
    ]);

    Helpers.$focus('#car-names');
  }

  disconnectedCallback() {
    this.#removeHandler();
  }
}

customElements.define('input-section', InputSection);
