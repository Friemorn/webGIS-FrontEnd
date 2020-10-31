<template>
  <div>
    <Navbar/>
    <!-- Tabel List Polygon -->
    <div class="container">
      <div id="list">
        <table class="table" id="table-polygon">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="row-ip">ID Polygon</th>
              <th scope="col" class="row-np">Nama Polygon</th>
              <th scope="col" class="row-g">Geom</th>
              <th scope="col" class="row-la">Luas Area (Meter<sup>2</sup>)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in polygon" :key="item.id_polygon">
              <th scope="row">{{item.id_polygon}}</th>
              <td>{{item.nama_polygon}}</td>
              <td>{{item.geom}}</td>
              <td>{{item.luas_area}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Polygon',
  components: {
    Navbar
  },
  methods: {
    ...mapMutations(['setPolygon']),
    ...mapActions(['getPolygon'])
  },
  computed: {
    ...mapGetters(['polygon'])
  },
  mounted () {
    this.getPolygon()
  }
}
</script>

<style scoped>
#table-polygon {
  table-layout: fixed;
}

#list {
  height: 500px;
  overflow: auto;
}

td {
  word-wrap: break-word;
}
</style>
