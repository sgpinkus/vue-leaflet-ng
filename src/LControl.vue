<script lang='ts'>
import L from 'leaflet';
import { defineComponent, inject, ref, h, watch, nextTick } from 'vue';
import {
  controlProps as propDefs,
  controlPropSetters as propSetters,
  filterLeafletProps,
  watchersFromPropSetters,
} from './props';

export default defineComponent({
  props: propDefs,
  data(): Record<any, any> {
    return {};
  },
  setup(props, { expose }) {
    const root = ref<HTMLInputElement>();
    const mapRef = ref(inject('map'));
    let map: L.Map;
    let leafletObject: L.Control;

    watch(mapRef, (newMap) => {
      if(!newMap) return;
      if(!(newMap instanceof L.Map)) return;
      nextTick(() => _setup(map));
      map = newMap;
    }, { immediate: true });

    const _setup = (map: L.Map) => {
      const LControl = L.Control.extend({
        onAdd() {
          return root.value;
        },
      });
      leafletObject = new LControl(filterLeafletProps(props, propDefs));
      map.addControl(leafletObject);
      if (props.disableClickPropagation && root.value) {
        L.DomEvent.disableClickPropagation(root.value);
      }
      if (props.disableScrollPropagation && root.value) {
        L.DomEvent.disableScrollPropagation(root.value);
      }
      watchersFromPropSetters(props, propSetters, leafletObject);
      expose({ leafletObject });
    };

    return  { root, mapRef };
  },
  render() {
    return h('div', { ref: 'root' }, this.$slots.default && this.$slots.default());
  },
});
</script>