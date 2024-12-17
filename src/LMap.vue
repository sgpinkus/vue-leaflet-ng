<script lang='ts'>
import { defineComponent, h, onMounted, onUnmounted, provide, shallowRef } from 'vue';
import L from 'leaflet';
import {
  mapProps as propDefs,
  mapPropSetters as propSetters,
  filterLeafletProps,
  watchersFromPropSetters,
  remapEvents,
  eventablePromise,
} from './props';

export default defineComponent({
  props: propDefs,
  data(): Record<any, any> {
    return {};
  },
  setup(props, { attrs, expose, emit }) {
    let map: L.Map;
    const mapRef = shallowRef({});
    const { promise, ready } = eventablePromise<L.Map>();
    provide('mapMountedPromise', promise); // Don't use this.
    provide('map', mapRef); // Use this.

    onMounted(async () => {
      map = L.map('map', filterLeafletProps(props, propDefs));
      watchersFromPropSetters(props, propSetters, map);
      remapEvents(attrs, map);
      mapRef.value = map;
      expose({ map });
      ready(map);
      emit('ready', map);
    });

    onUnmounted(() => {
      map?.off();
      map?.remove();
    });
  },
  render() {
    return h('div', { ref: 'root', id: 'map' }, this.$slots.default && this.$slots.default());
  },
});
</script>