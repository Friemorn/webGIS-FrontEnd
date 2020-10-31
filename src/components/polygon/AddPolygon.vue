<template>
  <div>
    <form>
      <div class="form-group">
        <label for="nama-polygon">Nama Polygon</label>
        <input type="text" class="form-control" placeholder="Enter Polygon Name" v-model="polygon">
      </div>
      <div class="form-group">
        <label for="geom">Geom</label>
        <input type="text" class="form-control" placeholder="Enter Geom" v-model="geom">
      </div>
      <div class="form-group">
        <label for="desc">Deskripsi</label>
        <input type="text" class="form-control" placeholder="Enter Description" v-model="desc">
      </div>
      <button type="submit" class="btn btn-primary" @click="addPolygon">Save</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'addPolygon',
  data () {
    return {
      polygon: '',
      geom: '',
      desc: ''
    }
  },
  methods: {
    addPolygon () {
      axios.post(process.env.VUE_APP_BASE_URL + '/polygon', {
        nama_polygon: this.polygon,
        geom: 'POLYGON((' + this.geom + '))',
        deskripsi: this.desc
      })
        .then((res) => {
          this.$swal('Input Success', 'Polygon Added Successfully', 'success')
          this.clearData()
        })
        .catch((res) => {
          this.$swal('Error!', 'Polygon Failed to Add', 'error')
        })
    },
    clearData () {
      this.polygon = ''
      this.geom = ''
      this.desc = ''
    }
  }
}
</script>

<style scoped>

</style>
