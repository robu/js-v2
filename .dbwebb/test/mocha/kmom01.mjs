import chai from 'chai';
import chaifs from 'chai-fs';
import chaiFiles from 'chai-files';
import chaiExecAsync from '@jsdevtools/chai-exec';
import {SOURCE, KMOM, SOLUTION, ERROR_MSG} from './config.mjs';
const EXERCISE = 'glacier'
// var myArgs = process.argv.slice(2);
// console.log("KMOM: " + myArgs[1]);
// chai.use(chaifs);
chai.use(chaiExecAsync);
chai.use(chaiFiles);

// chai.config.showDiff = false;
// chai.config.includeStack = false;
// chai.config.truncateThreshold = 0;

const file = chaiFiles.file;
const expect = chai.expect;

describe('Testsuite for KMOM01', () => {
    before(function () {
        chai.config.includeStack = false;
    });


    describe("Glacier", () => {

        let sourceFile1 = `${SOURCE}/${KMOM}/${EXERCISE}/glacier.js`;
        let solutionFile1 = `${SOLUTION}/${KMOM}/${EXERCISE}/glacier.js`;

        /**
        * Check that the file(s) are there.
        */
        it('The file is present', (done) => {
            expect(file(sourceFile1), ERROR_MSG).to.exist
            // expect(sourceFile1, ERROR_MSG).to.be.a.file("No such file.");
            done();
        });

        /**
        * Compare the output.
        */
        it("should match output", async () => {
            let srcExec = await chaiExecAsync(`node ${sourceFile1}`);
            let solutionExec = await chaiExecAsync(`node ${solutionFile1}`);
            expect(srcExec.stdout, ERROR_MSG).to.equal(solutionExec.stdout);
        });
    });

    describe("Glacier EXTRA", () => {
        let sourceFile2 = `${SOURCE}/${KMOM}/${EXERCISE}/glacier_extra.js`;
        let solutionFile2 = `${SOLUTION}/${KMOM}/${EXERCISE}/glacier_extra.js`;

        /**
        * Check that the file(s) are there.
        */
        it('The file is present', (done) => {
            expect(file(sourceFile2), "Random error message").to.exist
            done();
        });

        /**
        * Compare the output.
        */
        it("should match output", async () => {
            let srcExec = await chaiExecAsync(`node ${sourceFile2}`);
            let solutionExec = await chaiExecAsync(`node ${solutionFile2}`);
            expect(srcExec.stdout, ERROR_MSG).to.equal(solutionExec.stdout);
        });
    });


});
