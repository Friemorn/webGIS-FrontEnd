<template>
  <div>
    <form>
      <div class="form-group">
        <label for="nama-line">Nama Line</label>
        <input type="text" class="form-control" placeholder="Enter Line Name" v-model="line">
      </div>
      <div class="form-group">
        <label for="geom">Geom</label>
        <input type="text" class="form-control" placeholder="Enter Geom" v-model="geom">
      </div>
      <div class="form-group">
        <label for="desc">Deskripsi</label>
        <input type="text" class="form-control" placeholder="Enter Description" v-model="desc">
      </div>
      <button type="submit" class="btn btn-primary" @click="addLine">Save</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddLine',
  data () {
    return {
      line: '',
      geom: '',
      desc: ''
    }
  },
  methods: {
    addLine () {
      axios.post(process.env.VUE_APP_BASE_URL + '/line', {
        nama_line: this.line,
        geom: 'LINESTRING(' + this.geom + ')',
        deskripsi: this.desc
      })
        .then((res) => {
          this.$swal('Input Success', 'Line Added Successfully', 'success')
          this.clearData()
        })
        .catch((res) => {
          this.$swal('Error!', 'Line Failed to Add', 'error')
        })
    },
    clearData () {
      this.line = ''
      this.geom = ''
      this.desc = ''
    }
  }
}
</script>

<style scoped>

</style>
