import chai from 'chai';
import chaifs from 'chai-fs';
import chaiFiles from 'chai-files';
import chaiExecAsync from '@jsdevtools/chai-exec';
import { SOURCE, SOLUTION, ERROR_MSG } from './config.mjs';

import * as african from '../../../me/kmom02/african.mjs'
import * as european from '../../../me/kmom02/european.mjs'
import * as american from '../../../me/kmom02/american.mjs'
import * as report from '../../../me/kmom02/report.mjs'
// import * as european from `${SOURCE}/${KMOM}/europe.mjs`
// import * as american from `${SOURCE}/${KMOM}/american.mjs`
// const EXERCISE = 'glacier'

chai.use(chaiExecAsync);
chai.use(chaiFiles);

// chai.config.showDiff = false;
// chai.config.includeStack = false;
// chai.config.truncateThreshold = 0;

const file = chaiFiles.file;
const expect = chai.expect;

describe('Testsuite for extra optional assignments KMOM02', () => {
    let americanAnimals;
    let africanAnimals;
    let europeanAnimals;

    before(function () {
        chai.config.includeStack = false;
    });

    beforeEach(function() {
        americanAnimals = american.getAllAnimals()
        africanAnimals = african.getAllAnimals()
        europeanAnimals = european.getAllAnimals()
    })


    describe("sortAnimalsExtra", () => {
        it('should sort animals regardless upper/lowercase', (done) => {
            european.addAnimal('bengt')
            european.addAnimal('t-rex')
            report.sortAnimalsExtra(europeanAnimals)
            
            expect(europeanAnimals).to.have.ordered.members([
                'Amazon ant',
                'bengt',
                'Blue whale',
                'Crayfish',
                'European mink',
                'Gerfalcon',
                'Golden eagle',
                'Hooded seal',
                'Long-fingered bat',
                'Lynx',
                'Polar bear',
                't-rex'
                ]
            );
            done();
        });
    });



// { prettyPrint, fixFirstLetter, sortAnimals, sortAnimalsExtra, filterAnimals }


});
