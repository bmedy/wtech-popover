import { Component, State, Prop, Event, EventEmitter, Listen, Method, Element } from '@stencil/core';
import { offset, getAxis } from '../../utils/dom';


@Component({
    tag: 'wtech-popover',
    styleUrl: 'wtech-popover.css'
})
export class WtechPopover {

    @Element() el!: HTMLElement;

    @State() presented = false;

    /**
     * If `true`, the popover will be dismissed when the backdrop is clicked.
     */
    @Prop() backdropDismiss = true;

    /**
     * If `true`, a backdrop will be displayed behind the popover.
     */
    @Prop() showBackdrop = true;

    /**
     * If `true`, the popover will animate.
     */
    @Prop() animated = true;

    /**
     * Emitted after the popover has presented.
     */
    @Event({ eventName: 'wtechPopoverDidPresent' }) didPresent!: EventEmitter<void>;

    /**
     * Emitted after the popover has dismissed.
     */
    @Event({ eventName: 'wtechPopoverDidDismiss' }) didDismiss!: EventEmitter<void>;

    @Listen('wtechDismiss')
    protected onDismiss(ev: UIEvent) {
        ev.stopPropagation();
        ev.preventDefault();

        this.dismiss();
    }

    @Method()
    @Listen('wtechBackdropTap')
    dismiss() {
        this.presented = false;
        this.didDismiss.emit()
    }

    /**
     * @public
     * @method toggleComponent
     *
     * This will manage the popover component event and state changes
     */
    @Method()
    present(): void {
        if (this.presented) {
            return;
        }
        this.presented = true;
        this.didPresent.emit();
    }

    getContentClasses() {
        const componentOffset = offset(this.el);
        
        const axis = getAxis();
        let classes = ["popover-content"]
        if(this.presented) {
            classes = [...classes, "active"]
        }
        if(this.animated) {
            classes = [ ...classes, "animated" ]
        }
        if(componentOffset.left < axis.x) {
            classes = [ ...classes, "left" ]
        } else {
            classes = [ ...classes, "right" ]
        }
        return classes.join(" ");
    }

    render() {
        return [
            (this.presented && <wtech-backdrop animated={this.animated} tappable={this.backdropDismiss} visible={this.showBackdrop}></wtech-backdrop>),
            <div class="popover-wrapper">
                <div class="popover-title" onClick={() => this.present()}>
                    <slot name="title"></slot>
                </div>
                <div class={this.getContentClasses()}>
                    <slot name="content"></slot>
                </div>
            </div>
        ];
    }
}
