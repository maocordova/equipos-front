<template>
	<section class="clientes">
		<h1>Clientes Registrados</h1>
		<DataTable
				:value="clientes"
				:paginator="true"
				:rows="10"
				selection-mode="single"
				data-key="id"
				:selection.sync="clienteSeleccionado"
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
			Existen {{clientes ? clientes.length : 0 }} clientes registrados en total.
			</template>
			
		</DataTable>

	</section>

</template>
<script>
import ClientesService from "../services/ClientesService.js";

export default {
  name: 'clientes',
  components: {},
  props: [],
  data () {
    return {
      clientes: null,
      columns: null,
      clienteSeleccionado: null
    }
  },
  clientesService: null,
  created () {
    this.clientesService = new ClientesService();

    this.columns = [
      {field: 'nombre', header: 'Nombres'},
      {field: 'ciudad', header: 'Ciudad'},
      {field: 'telefono', header: 'Telefono'}
    ]

  },
  computed: {

  },
  mounted () {
    this.clientesService.getClientes().then(data => this.clientes = data)
  },
  methods: {
    onRowSelect() {
      console.log(this.clienteSeleccionado.id)
    }
  }
}
</script>
<style scoped>
	h1{
	color: lavender;
	}
</style>