<template>
    <div class="details container">
        <router-link to="/">Back</router-link>
        <h1 class="page-header">{{employee.first_name}} {{employee.last_name}} <span class="pull-right">
            <router-link class="btn btn-primary" v-bind:to="'/edit/'+employee.id">Edit</router-link>
            <button class="btn btn-danger" v-on:click="fetchEmployee(employee.id)">Delete</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone"
                aria-hidden="true"></span> {{employee.phone}}
            </li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope"
                aria-hidden="true"></span> {{employee.email}}
            </li>
        </ul>

        <ul class="list-group">
            <li class="list-group-item"> {{employee.address}}</li>
            <li class="list-group-item">{{employee.city}}</li>
            <li class="list-group-item">{{employee.state}}</li>
        </ul>
    </div>
</template>

<script>

	export default {
		name:    'employeedetails',
		data() {
			return {
				employee: ''
			}
		},
		methods: {
			fetchEmployee(id) {
				this.$http.get(`localhost:4000/api/employees/+${id}`)
					.then(function (response) {
						this.employee = response.body;
					});
			},
			deleteEmployee(id) {
				this.$http.delete(`localhost:4000/api/employees/delete/+${id}`)
					.then(function (response) {
						this.$router.push({ path: '/', query: { alert: 'Employee Deleted' } });
					});
			}
		},
		created: function () {
			this.fetchEmployee(this.$route.params.id);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
