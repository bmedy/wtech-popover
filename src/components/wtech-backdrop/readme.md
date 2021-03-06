# wtech-backdrop



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                             | Type      | Default |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------- | --------- | ------- |
| `animated`        | `animated`         | If `true`, the backdrop will be animated.                                               | `boolean` | `true`  |
| `stopPropagation` | `stop-propagation` | If `true`, the backdrop will stop propagation on tap.                                   | `boolean` | `true`  |
| `tappable`        | `tappable`         | If `true`, the backdrop will can be clicked and will emit the `wtechBackdropTap` event. | `boolean` | `true`  |
| `visible`         | `visible`          | If `true`, the backdrop will be visible.                                                | `boolean` | `true`  |


## Events

| Event              | Description                          | Type                |
| ------------------ | ------------------------------------ | ------------------- |
| `wtechBackdropTap` | Emitted when the backdrop is tapped. | `CustomEvent<void>` |


## CSS Custom Properties

| Name        | Description                      |
| ----------- | -------------------------------- |
| `--color`   | background color of the backdrop |
| `--opacity` | opacity of the backdrop          |
| `--z-index` | z-index of the backdrop          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
