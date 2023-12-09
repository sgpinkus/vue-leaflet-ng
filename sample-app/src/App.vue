<script lang='ts'>
import { defineComponent } from 'vue';
import 'leaflet/dist/leaflet.css';
import type { Map } from 'leaflet';
import {
  LCircle,
  LCircleMarker,
  LControl,
  LMap,
  LMarker,
  LPolygon,
  LPolyline,
  LRectangle,
  LTileLayer,
} from 'vue-leaflet-ng';

type Data = {
  map?: Map,
  [x: string]: any,
}

export default defineComponent({
  components: {
    LCircle,
    LCircleMarker,
    LControl,
    LMap,
    LMarker,
    LPolygon,
    LPolyline,
    LRectangle,
    LTileLayer,
},
  data(): Data {
    return {
      map: undefined, // Actual map object.
      tool: 'marker',
      mapStyle: {
        height: '100vh',
      },
      mapOptions: {
        zoom: 5,
        center: { lat: 0, lng: 0 },
      },
      tileLayers: [
        {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          maxZoom: 19,
          attribution: '© OpenStreetMap',
          name: 'street map',
          updateWhenIdle: true,
          keepBuffer: 3,
        },
        {
          url: 'https://{s}.google.com/vt/lyrs=s@221097413,traffic&x={x}&y={y}&z={z}',
          maxZoom: 20,
          minZoom: 2,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          name: 'satellite',
          updateWhenIdle: true,
          keepBuffer: 3,
        }
      ],
      activeTileLayerIndex: 0,
    }
  },
  computed: {
    activeTileLayer() {
      console.log( this.tileLayers[this.activeTileLayerIndex])
      return this.tileLayers[this.activeTileLayerIndex];
    },
  },
  methods: {
    mapReady(mapObject: Map) {
      console.log('map ready');
      this.map = mapObject;
    },
    mapClick(e: any) {
      console.log('map click', e);
    },
    myRichText() {
      return '<h1>Here</h1><p>is good</p></h1>';
    }
  }
});
</script>

<template>
  <div>
    <LMap
      :style="mapStyle"
      :=mapOptions
      @ready='mapReady'
      @click='mapClick'
    >
      <!-- Trying to dynamically change single tile layer causes error -->
      <LTileLayer v-if='activeTileLayerIndex === 0' :="tileLayers[0]"></LTileLayer>
      <LTileLayer v-if='activeTileLayerIndex === 1' :="tileLayers[1]"></LTileLayer>
      <LControl
        position='topright'
        :title="activeTileLayer.name"
      >
        <button @click='(activeTileLayerIndex = (activeTileLayerIndex + 1) % 2)' density='compact'>Layer</button>
      </LControl>
      <LMarker :lat-lng='[0,0]' :popup-text='myRichText()' :draggable='true'></LMarker>
      <LCircleMarker :lat-lng='[0,-3]' :radius=10 fill-color='yellow'></LCircleMarker>
      <LCircle :lat-lng='[3,0]' :radius=100000></LCircle>
      <LRectangle :bounds='[[-1,-1], [1,1]]' fill-color='red'></LRectangle>
      <LPolyline :lat-lngs='[[-2,2], [0,3], [2,2]]'></LPolyline>
      <LPolygon :lat-lngs='[[-2,-2], [-3,0], [-2,2]]'></LPolygon>
    </LMap>
  </div>
</template>

<style scoped>
</style>
