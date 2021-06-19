<template>
  <section class="equipos">
    <h1>Equipos</h1>

    <DataTable
            :value="equipos"
            :paginator="true"
            :rows="10"
            selection-mode="single"
            data-key="id"
            :selection.sync="equipoSeleccionado"
            @row-select="onRowSelect"
    >
      <template #header>
        <Button label="Agregar" icon="pi pi-plus" />
        <Button label="Editar" icon="pi pi-pencil" class="p-button-warning" style=""/>
        <Button label="Borrar" icon="pi pi-trash" class="p-button-danger" style=""/>
      </template>
      <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
      <template #paginatorRight>
        <Button type="button" icon="pi pi-refresh" />
      </template>
      <template #footer>
        Existen {{equipos ? equipos.length : 0 }} equipos registrados en total.
      </template>

    </DataTable>

  </section>
</template>
<script>
import EquiposService from "../services/EquiposService";
import ClientesService from "../services/ClientesService";

export default {
  name: 'equipos',
  components: {},
  props: [],
  data () {
    return {
      equipos: null,
      columns: null,
      equipoSeleccionado: null
    }
  },
  equiposService: null,
  created () {
    this.equiposService = new EquiposService();

    this.columns = [
      {field: 'cliente.nombre', header: 'Cliente'},
      {field: 'sistemaOperativo', header: 'S.O.'},
      {field: 'nombreUsuario', header: 'Usuario'},
      {field: 'clave', header: 'Password'},
      {field: 'nombreRed', header: 'Red'},
      {field: 'nombreEquipo', header: 'Equipo'},
      {field: 'direccionIp', header: 'Direccion IP'}
    ]
  },
  computed: {

  },
  mounted () {
    this.equiposService.getEquipos().then(data => this.equipos = data)
  },
  methods: {
    onRowSelect() {
      console.log(this.equipoSeleccionado.id)
    }
  }
}
</script>
<style lang="scss">

</style>>

