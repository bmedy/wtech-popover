import { Component, State, Prop, Event, EventEmitter, Listen, Method } from '@stencil/core';


@Component({
    tag: 'wtech-popover',
    styleUrl: 'wtech-popover.css'
})
export class WtechPopover {

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

    getContainerClasses() {
        let classes = ["popover-content"]
        if(this.presented) {
            classes = [...classes, "active"]
        }
        if(this.animated) {
            classes = [ ...classes, "animated" ]
        }
        return classes.join(" ");
    }

    render() {
        console.log(`tappable=${this.backdropDismiss} visible=${this.showBackdrop} `)
        return [
            (this.presented && <wtech-backdrop tappable={this.backdropDismiss} visible={this.showBackdrop}></wtech-backdrop>),
            <div class="popover-wrapper">
                <div class="popover-title" onClick={() => this.present()}>
                    <slot name="title"></slot>
                </div>
                <div class={this.getContainerClasses()}>
                    <slot name="content"></slot>
                </div>
            </div>
        ];
    }
}
