<template>
  <div class="home">
    <Navbar/>
    <div class="container">
      <l-map
        :zoom="zoom"
        :center="center"
        style="height: 500px; width: 100%"
      >
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div>
            I am a popup
          </div>
        </l-popup>
      </l-marker>
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        />
        <l-polygon
          :lat-lngs="polygon.latlngs"
          :color="polygon.color"
        >
          <l-popup content="Polygon" />
        </l-polygon>
        <l-polyline
          :lat-lngs="polyline.latlngs"
          :color="polyline.color"
        >
          <l-popup content="polyline" />
        </l-polyline>
      </l-map>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import Navbar from '../components/Navbar'
import {
  LMap,
  LTileLayer,
  LPolygon,
  LPolyline,
  LPopup,
  LMarker
} from 'vue2-leaflet'
import { latLng, Icon } from 'leaflet'

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'Home',
  components: {
    Navbar,
    LMap,
    LTileLayer,
    LPolygon,
    LPolyline,
    LPopup,
    LMarker
  },
  data () {
    return {
      zoom: 11,
      center: [-6.232626, 106.821666],
      withPopup: latLng(-6.232626, 106.821666),
      polygon: {
        latlngs: [
          [106.797924042, -6.214495208],
          [106.798052788, -6.220596004],
          [106.802988052, -6.222430495],
          [106.804833412, -6.224904915],
          [106.812429428, -6.219444111],
          [106.807150841, -6.212362045],
          [106.797924042, -6.214495208]
        ],
        color: '#ff00ff'
      },
      polyline: {
        type: 'polyline',
        latlngs: [
          [106.798095703, -6.214409881],
          [106.807837486, -6.212020739]
        ],
        color: 'green'
      },
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  methods: {
    ...mapMutations(['setPoint', 'setLine', 'setPolygon']),
    ...mapActions(['getPoint', 'getLine', 'getPolygon'])
  },
  computed: {
    ...mapGetters(['point', 'line', 'polygon'])
  },
  mounted () {
    this.getPoint()
  }
}
</script>
