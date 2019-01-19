import { Component, Prop, Event, EventEmitter, Listen } from '@stencil/core';


@Component({
    tag: 'wtech-backdrop',
    styleUrl: 'wtech-backdrop.css',
    shadow: true
})
export class WtechBackdrop {

    private lastClick = -10000;

    @Prop({ context: 'document' }) doc!: Document;

    /**
     * If `true`, the backdrop will be visible.
     */
    @Prop() visible = true;

    /**
     * If `true`, the backdrop will can be clicked and will emit the `wtechBackdropTap` event.
     */
    @Prop() tappable = true;

    /**
     * If `true`, the backdrop will stop propagation on tap.
     */
    @Prop() stopPropagation = true;

    /**
     * Emitted when the backdrop is tapped.
     */
    @Event() wtechBackdropTap!: EventEmitter<void>;

    @Listen('touchstart', { passive: false, capture: true })
    protected onTouchStart(ev: TouchEvent) {
        this.lastClick = ev.timeStamp || Date.now();
        this.emitTap(ev);
    }

    @Listen('click', { passive: false, capture: true })
    @Listen('mousedown', { passive: false, capture: true })
    protected onMouseDown(ev: TouchEvent) {
        if (this.lastClick < (ev.timeStamp || Date.now()) - 2500) {
            this.emitTap(ev);
        }
    }

    private emitTap(ev: Event) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.wtechBackdropTap.emit();
        }
    }

    hostData() {
        return {
            tabindex: '-1',
            class: {
                'backdrop-hide': !this.visible,
                'backdrop-no-tappable': !this.tappable
            }
        };
    }

}
