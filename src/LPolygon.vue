<script lang='ts'>
import L from 'leaflet';
import { defineComponent, onUnmounted, inject, h, watch, nextTick, ref } from 'vue';
import {
  polygonProps as propDefs,
  polygonPropSetters as propSetters,
  filterLeafletProps,
  watchersFromPropSetters,
  remapEvents,
} from './props';

export default defineComponent({
  props: propDefs,
  setup(props, { attrs, expose }) {
    let map: L.Map;
    let leafletObject: L.Polygon;
    const mapRef = ref(inject('map'));

    watch(mapRef, (newMap) => {
      if(!newMap) return;
      if(!(newMap instanceof L.Map)) return;
      nextTick(() => _setup(map));
      map = newMap;
    }, { immediate: true });

    const _setup = (map: L.Map) => {
      leafletObject = L.polygon(props.latLngs, filterLeafletProps(props, propDefs))
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