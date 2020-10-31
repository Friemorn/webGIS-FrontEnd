<template>
  <div>
    <Navbar/>
    <!-- Modal Add-->
    <div class="modal fade" id="ModalAdd" tabindex="-1" role="dialog" aria-labelledby="ModalAdd" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalAddLabel">Input Point</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <AddPoint/>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Update-->
    <div class="modal fade" id="ModalUpdate" tabindex="-1" role="dialog" aria-labelledby="ModalUpdate" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalUpdateLabel">Update Point</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <UpdatePoint/>
          </div>
        </div>
      </div>
    </div>
    <!-- Tabel List Point -->
    <div class="container">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary add" data-toggle="modal" data-target="#ModalAdd">
        Add Point
      </button>
      <div id="list">
        <table class="table" id="table-point">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID Point</th>
              <th scope="col">Nama Point</th>
              <th scope="col">Geom</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in point" :key="item.id_point">
              <th scope="row">{{item.id_point}}</th>
              <td>{{item.nama_point}}</td>
              <td>{{item.geom}}</td>
              <td class="aksi">
                <div class="update">
                  <img class="img-update" src="../assets/update.png" alt="update" data-toggle="modal" data-target="#ModalUpdate">
                </div>
                <div class="delete">
                  <img class="img-delete" src="../assets/delete.png" alt="delete" @click="deletePoint(item.id_point)">
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
import AddPoint from '../components/point/AddPoint'
import UpdatePoint from '../components/point/UpdatePoint'
import axios from 'axios'
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Point',
  components: {
    Navbar,
    AddPoint,
    UpdatePoint
  },
  methods: {
    ...mapMutations(['setPoint']),
    ...mapActions(['getPoint']),
    deletePoint (id) {
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
          axios.delete(process.env.VUE_APP_BASE_URL + '/point/' + id)
            .then(res => {
              this.$swal.fire('Delete Success', 'Point Successfully Deleted', 'success')
              this.getPoint()
            })
            .catch((res) => {
              this.$swal('Error!', 'Point Failed to Delete', 'error')
            })
        }
      })
    }
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
