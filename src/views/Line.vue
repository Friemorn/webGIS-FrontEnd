<template>
  <div>
    <Navbar/>
    <!-- Modal Add-->
    <div class="modal fade" id="ModalAdd" tabindex="-1" role="dialog" aria-labelledby="ModalAdd" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalAddLabel">Input Line</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <AddLine/>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Update-->
    <div class="modal fade" id="ModalUpdate" tabindex="-1" role="dialog" aria-labelledby="ModalUpdate" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalUpdateLabel">Update Line</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <UpdateLine/>
          </div>
        </div>
      </div>
    </div>
    <!-- Tabel List Line -->
    <div class="container">
      <button type="button" class="btn btn-primary add" data-toggle="modal" data-target="#ModalAdd">
        Add Line
      </button>
      <div id="list">
        <table class="table" id="table-line">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID Line</th>
              <th scope="col">Nama Line</th>
              <th scope="col">Geom</th>
              <th scope="col">Panjang Garis (Meter)</th>
              <th scope="col">Deskripsi</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in line" :key="item.id_line">
              <th scope="row">{{item.id_line}}</th>
              <td>{{item.nama_line}}</td>
              <td>{{item.geom}}</td>
              <td>{{item.panjang_garis}}</td>
              <td>{{item.deskripsi}}</td>
              <td class="aksi">
                <div class="update">
                  <img class="img-update" src="../assets/update.png" alt="update" data-toggle="modal" data-target="#ModalUpdate">
                </div>
                <div class="delete">
                  <img class="img-delete" src="../assets/delete.png" alt="delete" @click="deleteLine(item.id_line)">
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
import AddLine from '../components/line/AddLine'
import UpdateLine from '../components/line/UpdateLine'
import axios from 'axios'
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Line',
  components: {
    Navbar,
    AddLine,
    UpdateLine
  },
  methods: {
    ...mapMutations(['setLine']),
    ...mapActions(['getLine']),
    deleteLine (id) {
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
          axios.delete(process.env.VUE_APP_BASE_URL + '/line/' + id)
            .then(res => {
              this.$swal.fire('Delete Success', 'Line Successfully Deleted', 'success')
              this.getLine()
            })
            .catch((res) => {
              this.$swal('Error!', 'Line Failed to Delete', 'error')
            })
        }
      })
    }
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
