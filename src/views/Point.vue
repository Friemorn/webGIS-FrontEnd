<template>
  <div>
    <Navbar/>
    <!-- Tabel List Point -->
    <div class="container">
      <div id="list">
        <table class="table" id="table-point">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID Point</th>
              <th scope="col">Nama Point</th>
              <th scope="col">Geom</th>
              <th scope="col">Koordinat</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in point" :key="item.id_point">
              <th scope="row">{{item.id_point}}</th>
              <td>{{item.nama_point}}</td>
              <td>{{item.geom}}</td>
              <td>{{item.koordinat}}</td>
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
  name: 'Point',
  components: {
    Navbar
  },
  methods: {
    ...mapMutations(['setPoint']),
    ...mapActions(['getPoint'])
  },
  computed: {
    ...mapGetters(['point'])
  },
  mounted () {
    this.getPoint()
  }
}
</script>

<style scoped>
#table-point {
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
