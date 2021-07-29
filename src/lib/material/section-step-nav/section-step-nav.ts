import { Component, Input } from '@angular/core'

@Component({
  selector:    'ngx-section-step-nav',
  templateUrl: './section-step-nav.html',
})
export class SectionStepNavComponent {

  @Input() step:          number   = 1
  @Input() stepTitle:     string[] = []
  @Input() stepSideSpace: number   = 30
  @Input() stepWidth:     number   = 100
  @Input() fontSize:      number   = 11

  width:            number
  height:           number
  stepMax:          number
  stepCircleHeight: number = 30

  constructor() {}

  get getAttrForLine() {
    return [...Array(this.stepMax - 1).keys()].map(pos => {
      const step = pos + 1
      return {
        x1:          this.stepWidth * (step - 1),
        x2:          this.stepWidth * step,
        y1:          this.stepCircleHeight / 2,
        y2:          this.stepCircleHeight / 2,
        stroke:      this.step <= step ? '#4AB4C7' : '#E0E0E0',
        strokeWidth: this.step <= step ? 1 : 2
      }
    })
  }

  get getAttrForCircle() {
    return [...Array(this.stepMax).keys()].map(pos => {
      const step = pos + 1
      const cmp  = this.step === this.stepMax + 1 ? 1 : this.step - step
      return {
        cx:          this.stepWidth * pos,
        cy:          this.stepCircleHeight / 2,
        r:           cmp === 0 ? 5         : (cmp < 0 ? 5 : 5),
        fill:        cmp === 0 ? '#FFFFFF' : (cmp < 0 ? '#FFFFFF' : '#EFFFFF'),
        stroke:      cmp <   1 ? '#4AB4C7' : '#E0E0E0',
        strokeWidth: cmp === 0 ? 2         : 2,
        text:        this.stepTitle[pos],
        textFill:    cmp < 1 ? '#4AB4C7' : '#E0E0E0'
      }
    })
  }

  ngOnInit(): void {
    this.stepMax = this.stepTitle.length
    this.width   = this.stepWidth * (this.stepMax - 1) * this.stepSideSpace * 2
    this.height  = this.stepCircleHeight * this.fontSize
  }
}
