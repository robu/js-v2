import chai from 'chai';
import chaifs from 'chai-fs';
import chaiFiles from 'chai-files';
import chaiExecAsync from '@jsdevtools/chai-exec';
import {SOURCE, SOLUTION, ERROR_MSG} from './config.mjs';
const EXERCISE = 'glacier'
const KMOM = 'kmom01'
import * as fs from 'fs'
chai.use(chaiExecAsync);
chai.use(chaiFiles);
// chai.use(chaifs);

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

        let sourceFile1 = `${SOURCE}/${KMOM}/glacier.js`;
        let solutionFile1 = `${SOLUTION}/${KMOM}/glacier.js`;

        /**
        * Check that the file(s) are there.
        */
        it('should be a file present', (done) => {
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
            // srcExec.should.equal(solutionExec, "YEEEAHHHHHH")

            expect(srcExec.stdout, ERROR_MSG).to.eql(solutionExec.stdout);
        });
    });

    describe("(OPTIONAL) Glacier_extra", () => {
        let sourceFile2 = `${SOURCE}/${KMOM}/glacier_extra.js`;
        let solutionFile2 = `${SOLUTION}/${KMOM}/glacier_extra.js`;

        /**
        * Check that the file(s) are there.
        */
        it('should be a file present', (done) => {
            // let there = fs.existsSync(sourceFile2)
            // if (there){
            //     chai.assert.isOk()
            //
            // }
            // else chai.assert.fail("No file there...")
            expect(file(sourceFile2), "Random error message").to.exist
            done();
        });

        /**
        * Compare the output.
        */
        if (fs.existsSync(sourceFile2)) {
            it("should match output", async () => {

                let srcExec = await chaiExecAsync(`node ${sourceFile2}`);
                let solutionExec = await chaiExecAsync(`node ${solutionFile2}`);
                expect(srcExec.stdout, ERROR_MSG).to.eql(solutionExec.stdout);
            });
        }
    });


});
