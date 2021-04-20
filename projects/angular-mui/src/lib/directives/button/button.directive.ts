import { Directive, HostBinding,ElementRef,Renderer2,Attribute,HostListener ,AfterViewInit} from '@angular/core';

import { ButtonService } from '../../services/buttonService/button.service';

@Directive({
  selector: '[mui-btn]'
})
export class ButtonDirective{

  backgroundColor:string=null;
  textColor:string=null;
  @HostBinding("style.padding") basic_padding;
  @HostBinding("style.backgroundColor") basic_backgroundColor;
  @HostBinding("style.border") basic_border;
  @HostBinding("style.borderRadius") basic_borderRadius;
  @HostBinding("style.boxShadow") basic_boxShadow;
  @HostBinding("style.outline") basic_outline;
  @HostBinding("style.letterSpacing") basic_letterSpacing;
  @HostBinding("style.textTransform") basic_textTransform;
  @HostBinding("style.lineHeight") basic_lineHeight;
  @HostBinding("style.userSelect") basic_userSelect;
  @HostBinding("style.fontWeight") basic_fontWeight;
  
  constructor(private el:ElementRef, private render:Renderer2,@Attribute('color') public color: string,@Attribute('variant') public variant: string,private services:ButtonService) {

    if(this.variant=='contained'){
      this.containedVariant();
    }
    else if(this.variant=='outline'){
      this.outlineVariant();
    }
    else if(this.variant=='text' || this.variant==null){
      this.textVariant()
    }    
  }

  //color attribute
  
  @HostListener('mouseover') onMouseOver() {
    this.render.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.render.setStyle(this.el.nativeElement, 'transform', 'scale(0.98)');
  }

  @HostListener('mouseout') onMouseOut() {
    this.render.setStyle(this._getHostElement(), 'transform', 'none');
  }  
  
  containedVariant(){

    this.basic_padding=this.services.buttonCSS.padding;
    this.basic_border=this.services.buttonCSS.borderStyle;
    this.basic_borderRadius=this.services.buttonCSS.borderRadius;
    this.basic_boxShadow=this.services.buttonCSS.boxShadow;
    this.basic_outline=this.services.buttonCSS.outline;
    this.basic_letterSpacing=this.services.buttonCSS.letterSpacing;
    this.basic_lineHeight=this.services.buttonCSS.lineHeight;
    this.basic_textTransform=this.services.buttonCSS.textTransform;
    this.basic_userSelect = this.services.buttonCSS.userSelect;
    // this.basic_fontWeight = this.services.buttonCSS.fontWeight;
    
    (this.color=='primary')?this.color='#1976d2':(this.color=='secondary')?this.color='#E10050':(this.color=='success')?this.color="#00A959":this.color=this.color;
    
    if(this.color == null || this.color.trim()==''){
      this.basic_backgroundColor = 'white';
      this.render.setStyle(this._getHostElement(),'color','black');
    }
    else{
      this.basic_backgroundColor = this.color;
      this.render.setStyle(this._getHostElement(),'color','white');
    }
  }

  outlineVariant(){
    this.basic_padding=this.services.buttonCSS.padding;
    this.basic_borderRadius=this.services.buttonCSS.borderRadius;
    this.basic_border=this.services.buttonCSS.borderStyle;
    this.basic_border = this.services.buttonCSS.border;
    this.basic_outline=this.services.buttonCSS.outline;
    this.basic_letterSpacing=this.services.buttonCSS.letterSpacing;
    this.basic_lineHeight=this.services.buttonCSS.lineHeight;
    this.basic_textTransform=this.services.buttonCSS.textTransform;
    this.basic_userSelect = this.services.buttonCSS.userSelect;
    //this.basic_fontWeight = this.services.buttonCSS.fontWeight;
    this.basic_backgroundColor= this.services.buttonCSS.backgroundColor;
    (this.color=='primary')?this.color='#1976d2':(this.color=='secondary')?this.color='#E10050':(this.color=='success')?this.color="#00A959":this.color=this.color;
    this.render.setStyle(this._getHostElement(),'color',this.color);
    
  }

  textVariant(){
    this.basic_padding=this.services.buttonCSS.padding;
    this.basic_border=this.services.buttonCSS.borderStyle;
    this.basic_borderRadius=this.services.buttonCSS.borderRadius;
    this.basic_outline=this.services.buttonCSS.outline;
    this.basic_letterSpacing=this.services.buttonCSS.letterSpacing;
    this.basic_lineHeight=this.services.buttonCSS.lineHeight;
    this.basic_textTransform=this.services.buttonCSS.textTransform;
    this.basic_userSelect = this.services.buttonCSS.userSelect;
    //this.basic_fontWeight = this.services.buttonCSS.fontWeight;
    this.basic_backgroundColor= this.services.buttonCSS.backgroundColor;
    (this.color=='primary')?this.color='#1976d2':(this.color=='secondary')?this.color='#E10050':(this.color=='success')?this.color="#00A959":this.color=this.color;
    
    this.render.setStyle(this._getHostElement(),'color',this.color);
  }
  _getHostElement(){
    return this.el.nativeElement;
  }
}
