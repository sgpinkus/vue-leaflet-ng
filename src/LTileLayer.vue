<script lang='ts'>
import L from 'leaflet';
import { defineComponent, inject, ref, watch, nextTick } from 'vue';
import {
  tileLayerProps as propDefs,
  tileLayerPropSetters as propSetters,
  filterLeafletProps,
  watchersFromPropSetters,
  remapEvents
} from './props';

export default defineComponent({
  props: propDefs,
  setup(props, { attrs, expose }) {
    let map: L.Map;
    let leafletObject: L.TileLayer;
    const mapRef = ref(inject('map'));

    watch(mapRef, (newMap, oldMap) => {
      if(!newMap) return;
      if(!(newMap instanceof L.Map)) return;
      nextTick(() => _setup(map));
      map = newMap;
    }, { immediate: true });

    const _setup = (map: L.Map) => {
      leafletObject = L.tileLayer(props.url, filterLeafletProps(props, propDefs))
        .addTo(map);
      remapEvents(attrs, leafletObject);
      watchersFromPropSetters(props, propSetters, leafletObject);
      expose({ leafletObject });
    };

    return { mapRef };
  },
  render() { return null; },
});
</script>