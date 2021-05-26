import {SOURCE, KMOM, SOLUTION, ERROR_MSG} from './../config.mjs';
const fs = require('fs')
// const base = require('path').resolve(__dirname, './../..')
console.log("ASLDHASLDLKASDLKSAKD");
const fileExistsSync = (file) => {
    try {
        fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
        return true;
      } catch (err) {
        return false;
      }
}

test('adds 1 + 2 to equal 3', () => {
  expect(fileExistsSync(`${SOURCE}/${KMOM}/glacier.js`)).toBeTruthy()
});


// describe("Glacier", () => {
//
//     let sourceFile1;
//     let solutionFile1;
//
//     sourceFile1 = `${SOURCE}/${KMOM}/glacier.js`;
//     solutionFile1 = `${SOLUTION}/${KMOM}/glacier.js`;
//
//     /**
//     * Check that the file(s) are there.
//     */
//     it('The file is present', (done) => {
//         expect(file(sourceFile1), ERROR_MSG).to.exist
//         // expect(sourceFile1, ERROR_MSG).to.be.a.file("No such file.");
//         done();
//     });
//
//     /**
//     * Compare the output.
//     */
//     it("should match output", async () => {
//         let srcExec = await chaiExecAsync(`node ${sourceFile1}`);
//         let solutionExec = await chaiExecAsync(`node ${solutionFile1}`);
//         expect(srcExec.stdout, ERROR_MSG).to.equal(solutionExec.stdout);
//     });
// });
