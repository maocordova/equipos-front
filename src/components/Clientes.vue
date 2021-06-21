<template>
    <div>
        <h1>Clientes Registrados</h1>
        <ul>
            <li v-for="cliente in clientes" :key="cliente.id">
                {{ cliente.nombre }}
            </li>
        </ul>
    </div>
</template>
<script>
import clientesService from '../services/ClientesService'

export default {
    name: 'Clientes',
    data () {
        return {
            clientes: []
        }
    },
    mounted () {
        clientesService.get().then((data) => this.clientes = data)
    }
}
</script>
<style scoped>
    body {
        background-color: darkblue;
    }
    
	h1 {
    	color: lavender;
	}
</style>