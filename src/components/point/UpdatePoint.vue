<template>
  <div>
    <form>
      <div class="form-group">
        <label for="nama-point">Nama Point</label>
        <input type="text" class="form-control" placeholder="Enter Point Name" v-model="point">
      </div>
      <div class="form-group">
        <label for="latitude">Latitude</label>
        <input type="text" class="form-control" placeholder="Enter Latitude" v-model="lat">
      </div>
      <div class="form-group">
        <label for="longitude">Longitude</label>
        <input type="text" class="form-control" placeholder="Enter Longitude" v-model="long">
      </div>
      <button type="submit" class="btn btn-primary" @click="addPoint">Save</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UpdatePoint',
  data () {
    return {
      point: '',
      lat: '',
      long: ''
    }
  },
  methods: {
    addPoint () {
      axios.post(process.env.VUE_APP_BASE_URL + '/point', {
        nama_point: this.point,
        lat: this.lat,
        long: this.long
      })
        .then((res) => {
          this.$swal('Input Success', 'Point Added Successfully', 'success')
          this.clearData()
        })
        .catch((res) => {
          this.$swal('Error!', 'Point Failed to Add', 'error')
        })
    },
    clearData () {
      this.point = ''
      this.lat = ''
      this.long = ''
    }
  }
}
</script>

<style scoped>

</style>
