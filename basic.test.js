import { Selector } from "testcafe";

fixture`testing`.page(`https://devexpress.github.io/testcafe/example/`);

test("click populate", async (t) => {
  await t
    .setNativeDialogHandler(() => true)
    .click(Selector("#populate"))
    .expect(Selector("#developer-name").value)
    .eql("Peter Parker");
});

test("select radio button", async (t) => {
  await t
    .setTestSpeed(0.3)
    .click(Selector("#macos"))
    .expect(Selector("#macos").checked)
    .ok()
    .expect(Selector("#windows").checked)
    .notOk()
    .expect(Selector("#linux").checked)
    .notOk();
});

test("click multiple checkbox", async (t) => {
  await t
    .setTestSpeed(0.3)
    .click(Selector("#remote-testing"))
    .expect(Selector("#remote-testing").checked)
    .ok()
    .click(Selector("#reusing-js-code"))
    .expect(Selector("#reusing-js-code").checked)
    .ok()
    .click(Selector("#tried-test-cafe"))
    .expect(Selector("#tried-test-cafe").checked)
    .ok()
    .expect(Selector("#traffic-markup-analysis").checked)
    .notOk();
});

const slider = Selector(".ui-slider-handle");
test("geser slider", async (t) => {
  await t
    .setTestSpeed(0.3)
    .click(Selector("#tried-test-cafe"))
    .drag(slider, 80, 0, { offsetX: 10, offsetY: 10 });
});

// const select = Selector('#preferred-interface');
// const option = Select.find('option');
// test("dropdown", async (t) => {
//   await t
//     .click(select).click(option.withText('JavaScript API'))
//     .expect(select.innerText).contains('JavaScript API')
// });

// test("N to N", async (t) => {
//   await t
//     .setTestSpeed(0.3)
//     .setNativeDialogHandler(() => true)
//     .click(Selector("#populate"))
//     .expect(Selector("#developer-name").value)
//     .eql("Peter Parker")
//     .click(Selector("#macos"))
//     .expect(Selector("#macos").checked)
//     .ok()
//     .click(Selector("#remote-testing"))
//     .expect(Selector("#remote-testing").checked)
//     .ok()
//     .click(Selector("#tried-test-cafe"))
//     .drag(slider, 80, 0, { offsetX: 10, offsetY: 10 })
//     .click(select)
//     .click(option.withText("JavaScript API"))
//     .expect(select.innerText)
//     .contains("JavaScript API");
// });
