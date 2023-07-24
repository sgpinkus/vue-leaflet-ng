<script lang='ts'>
import L from 'leaflet';
import { defineComponent, inject, onUnmounted, h, ref, watch, nextTick } from 'vue';
import {
  markerProps as propDefs,
  markerPropsSetters as propSetters,
  filterLeafletProps,
  watchersFromPropSetters,
  remapEvents,
} from './props';

export default defineComponent({
  props: propDefs,
  setup(props, { attrs, expose }) {
    const mapRef = ref(inject('map'));
    let map: L.Map;
    let leafletObject: L.Marker;

    watch(mapRef, (newMap) => {
      if(!newMap) return;
      if(!(newMap instanceof L.Map)) return;
      nextTick(() => _setup(map));
      map = newMap;
    }, { immediate: true });

    const _setup = (map: L.Map) => {
      leafletObject = L.marker(props.latLng, filterLeafletProps(props, propDefs))
        .addTo(map);
      remapEvents(attrs, leafletObject);
      watchersFromPropSetters(props, propSetters, leafletObject);
      expose({ leafletObject });
    };

    onUnmounted(() => {
      leafletObject?.off();
      leafletObject?.remove();
    });

    return { mapRef };
  },
  render() {
    return h('div', {}, this.$slots.default && this.$slots.default());
  },
});
</script>