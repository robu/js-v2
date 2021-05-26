import chai from 'chai';
import chaifs from 'chai-fs';
import chaiFiles from 'chai-files';
import chaiExecAsync from '@jsdevtools/chai-exec';
import {OUTPUT, SOURCE, KMOM, SOLUTION, ERROR_MSG} from './config.mjs';
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
    let sourceFile1,
        solutionFile1,
        sourceFile2,
        solutionFile2,
        output1,
        output2

    before(function () {
        sourceFile1 = `${SOURCE}/${KMOM}/glacier.js`
        solutionFile1 = `${SOLUTION}/${KMOM}/glacier.js`
        sourceFile2 = `${SOURCE}/${KMOM}/glacier_extra.js`
        solutionFile2 = `${SOLUTION}/${KMOM}/glacier_extra.js`

        chai.config.includeStack = false;
    });






    /**
    * Check that the file(s) are there.
    */
    it('"glacier.js" is present', (done) => {
        expect(file(sourceFile1), ERROR_MSG).to.exist
        done();
    });

    /**
    * Compare the output.
    */
    it('"glacier.js" matches solution', async () => {
        let srcExec = await chaiExecAsync(`node ${sourceFile1}`);
        let solutionExec = await chaiExecAsync(`node ${solutionFile1}`);

        expect(srcExec.stdout, ERROR_MSG).to.equal(solutionExec.stdout);
    });



    /**
    * Check that the file(s) are there.
    */
    it('"glacier_extra.js" is present', (done) => {
        expect(file(sourceFile2)).to.exist
        done();
    });


    /**
    * Compare the output.
    */
    it('"glacier_extra.js" matches solution', async () => {

        let srcExec = await chaiExecAsync(`node ${sourceFile2}`);
        let solutionExec2 = await chaiExecAsync(`node ${solutionFile2}`);
        // output1 = await chaiExecAsync(`node ${solutionFile1}`);
        expect(srcExec.stdout, ERROR_MSG).to.equal(solutionExec2.stdout);

    });


});
