<template>
  <div>
    <Navbar/>
    <!-- Tabel List Line -->
    <div class="container">
      <div id="list">
        <table class="table" id="table-line">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID Line</th>
              <th scope="col">Nama Line</th>
              <th scope="col">Geom</th>
              <th scope="col">Panjang Garis (Meter)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in line" :key="item.id_line">
              <th scope="row">{{item.id_line}}</th>
              <td>{{item.nama_line}}</td>
              <td>{{item.geom}}</td>
              <td>{{item.panjang_garis}}</td>
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
  name: 'Line',
  components: {
    Navbar
  },
  methods: {
    ...mapMutations(['setLine']),
    ...mapActions(['getLine'])
  },
  computed: {
    ...mapGetters(['line'])
  },
  mounted () {
    this.getLine()
  }
}
</script>

<style scoped>
#table-line {
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
