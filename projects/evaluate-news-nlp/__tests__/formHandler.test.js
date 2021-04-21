import {handleSubmit} from '../src/client/js/formHandler'
import { fireEvent, getByText } from '@testing-library/dom'
import  '../node_modules/@testing-library/dom'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'


const html = fs.readFileSync(path.resolve('dist/index.html'), 'utf8');

let dom
let container

describe("Testing the submit functionality",()=>{
    beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
    })

    test("Testing the handleSubmit function",()=>{
        
        expect(handleSubmit).toBeDefined();
        
    })
   

})