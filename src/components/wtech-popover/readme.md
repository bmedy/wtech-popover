# wtech-popover



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                            | Type      | Default |
| ----------------- | ------------------ | ---------------------------------------------------------------------- | --------- | ------- |
| `animated`        | `animated`         | If `true`, the popover will animate.                                   | `boolean` | `true`  |
| `backdropDismiss` | `backdrop-dismiss` | If `true`, the popover will be dismissed when the backdrop is clicked. | `boolean` | `true`  |
| `showBackdrop`    | `show-backdrop`    | If `true`, a backdrop will be displayed behind the popover.            | `boolean` | `true`  |


## Events

| Event                    | Description                              | Type                |
| ------------------------ | ---------------------------------------- | ------------------- |
| `wtechPopoverDidDismiss` | Emitted after the popover has dismissed. | `CustomEvent<void>` |
| `wtechPopoverDidPresent` | Emitted after the popover has presented. | `CustomEvent<void>` |


## Methods

### `dismiss() => void`



#### Returns

Type: `void`



### `present() => void`



#### Returns

Type: `void`




## CSS Custom Properties

| Name           | Description                       |
| -------------- | --------------------------------- |
| `--arrow-size` | size of the arrow                 |
| `--background` | Background of the popover content |
| `--color`      | Color of the popover content      |
| `--z-index`    | z-index of popover content        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
