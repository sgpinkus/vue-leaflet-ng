# VUE LEAFLET NG
Port of [@vue-leaflet/vue-leaflet](https://www.npmjs.com/package/@vue-leaflet/vue-leaflet) to *try* and stop it or Vue or both blowing up (seems to work). Only ported components I needed:

```
$ ls src/*.vue -1
src/LControl.vue
src/LMap.vue
src/LMarker.vue
src/LPolygon.vue
src/LPolyline.vue
src/LRectangle.vue
src/LTileLayer.vue
```

Implementing LPopup or any container components where parent/child interaction is required turns out to be hard to do AFAICT. Currently it's too flaky and a wont-fix. As a work around you can set `popup-text` prop of any layer.
