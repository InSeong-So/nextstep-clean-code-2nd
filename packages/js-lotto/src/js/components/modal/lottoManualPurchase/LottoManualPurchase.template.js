import { $elements } from '../../../helper/index.js';

const LottoManualPurchaseTemplate = count => {
  return $elements(/*html*/ `
  <div class="modal-inner max-w-none p-10">
    <div class="modal-close" data-props="modal-close-button">
      <svg viewbox="0 0 40 40">
        <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
      </svg>
    </div>
    <h2 class="text-center">๐ฐ ๋ก๋ ๊ตฌ๋งค ๐ฐ</h2>
    <h3 class="text-center" data-props="available-count-h3">์ด ${count}์ฅ ๊ตฌ๋งคํ  ์ ์์ด์!</h3>
    <div class="d-flex justify-center flex-col">
      <div class="d-flex flex-auto items-center justify-between gap-3">
        <div class="mr-6">
          <h4 class="mb-0 mt-0">๐ ์๋ ๊ตฌ๋งคํ  ๊ฐ์๋ฅผ ์๋ ฅํด์ฃผ์ธ์.</h4>
          <span class="asterisk mb-3">* ๋จ์ ๊ธ์ก๋งํผ ์๋ ๊ตฌ๋งค ๋ฉ๋๋ค.</span>
        </div>
        <input type="number" class="mx-1 text-center" data-props="purchase-count-input" min="0" max="3"/>
        <button class="mx-1 btn btn-cyan text-center" data-props="purchase-count-button">์๋ ฅํ๊ธฐ</button>
      </div>
      <form class="mt-3" data-props="manual-purchase-form"></form>
    </div>
  </div>
  `);
};

export default LottoManualPurchaseTemplate;
