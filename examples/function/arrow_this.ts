interface UIElement {
  addClickListener(onclick: (this: void, e: Event)=> void):void
}

class Handler {
  type: string

  onClickBad(this: Handler, e: Event){
    this.type = e.type
  }
}

let h = new Handler();
let uiElement: UIElement = {
  addClickListener(){

  }
}

uiElement.addClickListener(h.onClickBad);