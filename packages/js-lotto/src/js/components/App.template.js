import { $elements } from '../helper/index.js';

const AppTemplate = () =>
  $elements(/*html*/ `
    <div id="app" class="p-3">
      <div class="d-flex justify-center mt-5" data-props="amount-info-form">
        <div class="w-100">
          <h1 class="text-center">๐ฑ ํ์ด์ ๋ก๋</h1>
          <form class="mt-5" data-props="amount-form">
            <label class="mb-2 d-inline-block">๊ตฌ์ํ  ๊ธ์ก์ ์๋ ฅํด์ฃผ์ธ์.
            </label>
            <div class="d-flex">
              <input type="text" class="w-100 mr-2 pl-2" name="amount-input" data-props="amount-input" placeholder="๊ตฌ์ ๊ธ์ก" />
              <button type="submit" data-props="confirm-button" class="open-purchase-modal-button btn btn-cyan">๊ตฌ๋งค</button>
            </div>
          </form>
          <div class="lotto-section hidden"></div>
        </div>
      </div>
      <div class="modal"></div>
    </div>
    `);

export default AppTemplate;
