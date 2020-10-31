<template>
  <div>
    <Navbar/>
    <!-- Modal Add-->
    <div class="modal fade" id="ModalAdd" tabindex="-1" role="dialog" aria-labelledby="ModalAdd" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalAddLabel">Input Polygon</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <AddPolygon/>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Update-->
    <div class="modal fade" id="ModalUpdate" tabindex="-1" role="dialog" aria-labelledby="ModalUpdate" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalUpdateLabel">Update Polygon</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <UpdatePolygon/>
          </div>
        </div>
      </div>
    </div>
    <!-- Tabel List Polygon -->
    <div class="container">
      <button type="button" class="btn btn-primary add" data-toggle="modal" data-target="#ModalAdd">
        Add Polygon
      </button>
      <div id="list">
        <table class="table" id="table-polygon">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="row-ip">ID Polygon</th>
              <th scope="col" class="row-np">Nama Polygon</th>
              <th scope="col" class="row-g">Geom</th>
              <th scope="col" class="row-la">Luas Area (Meter<sup>2</sup>)</th>
              <th scope="col">Deskripsi</th>
              <th scope="col" class="row-la">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in polygon" :key="item.id_polygon">
              <th scope="row">{{item.id_polygon}}</th>
              <td>{{item.nama_polygon}}</td>
              <td>{{item.geom}}</td>
              <td>{{item.luas_area}}</td>
              <td>{{item.deskripsi}}</td>
              <td class="aksi">
                <div class="update">
                  <img class="img-update" src="../assets/update.png" alt="update" data-toggle="modal" data-target="#ModalUpdate">
                </div>
                <div class="delete">
                  <img class="img-delete" src="../assets/delete.png" alt="delete" @click="deletePolygon(item.id_polygon)">
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import AddPolygon from '../components/polygon/AddPolygon'
import UpdatePolygon from '../components/polygon/UpdatePolygon'
import axios from 'axios'
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Polygon',
  components: {
    Navbar,
    AddPolygon,
    UpdatePolygon
  },
  methods: {
    ...mapMutations(['setPolygon']),
    ...mapActions(['getPolygon']),
    deletePolygon (id) {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          axios.delete(process.env.VUE_APP_BASE_URL + '/polygon/' + id)
            .then(res => {
              this.$swal.fire('Delete Success', 'Polygon Successfully Deleted', 'success')
              this.getPolygon()
            })
            .catch((res) => {
              this.$swal('Error!', 'Polygon Failed to Delete', 'error')
            })
        }
      })
    }
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

.add {
  margin-bottom: 50px;
}

.aksi {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.img-update, .img-delete {
  height: 30px;
  width: 30px;
}
</style>
