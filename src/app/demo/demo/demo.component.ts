import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() data: string = 'Tayyab';
  constructor() {
    // console.log('Constructor Called');
    // console.log(this.data);
  }

  //ngOnChanges() is the only hook which takes argument and this hook is called when an input binding value changes..
  //If no change occur it won't get called
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called');
    console.log(changes);
  }

  //ngOnInit() hook is called after the first ngOnChanges call and it is a good place to put any initialization logic
  ngOnInit() {
    // console.log('ngOnInit Called');
    // console.log(this.data);
  }

  //ngDoCheck called everytime when change detection cycle runs. If an event occour ngDoCheck will get called.
  //It can be used to implement custom change detection.
  //Even if there's no change in ngOnChanges
  ngDoCheck() {
    console.log('ngDoCheck Called');
  }

  //ngAfterContentInit will get called when the projected content of the component is fully initialized
  //It will called only onetime
  ngAfterContentInit() {
    console.log('ngAfterContentInit Called');
  }

  //ngAfterContentChecked whenever change in detection cycle occour and also called when ever change in projected content
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called');
  }

  //It will called when component views and all its chlid views are fully initialzed
  //It will only called once
  ngAfterViewInit() {
    console.log('ngAfterViewInit Called');
  }

  //This hook is called after the component's views have been checked.
  //It will called everytime whenever there's some change in view and child view
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called');
  }

  //ngOnDestroy hook will get called just before component or directive destroyed
  //It will use in cleaning up resources.
  ngOnDestroy() {
    console.log('ngOnDestroy Called');
  }
}
