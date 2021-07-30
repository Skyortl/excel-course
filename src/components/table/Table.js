import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
    static className = 'excel__table'

    toHTML() {
        return `<div class="row">
                <div class="row-info"></div>
                <div class="row-data">
                    <div class="column">A</div>
                    <div class="column">B</div>
                    <div class="column">C</div>
                    <div class="column">D</div>
                    <div class="column">E</div>
                </div>
            </div>
            <div class="row">
                <div class="row-info"></div>
                <div class="row-data">
                    <div class="cell" contenteditable>1</div>
                    <div class="cell" contenteditable>2</div>
                    <div class="cell" contenteditable>3</div>
                    <div class="cell">4</div>
                    <div class="cell">5</div>
                </div>
            </div>
            <div class="row">
                <div class="row-info"></div>
                <div class="row-data">
                    <div class="cell selected">1</div>
                    <div class="cell">2</div>
                    <div class="cell">3</div>
                    <div class="cell">4</div>
                    <div class="cell">5</div>
                </div>
            </div>`
    }
}
