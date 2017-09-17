<template>
    <div class="employees container">
        <Alert v-if="alert" v-bind:message="alert"/>
        <h1 class="page-header">Manage Employees</h1>
        <input class="form-control" placeholder="Enter Last Name" v-model="filterInput"> <br/>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Department</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="employee in filterBy(employees, filterInput)">
                <td>{{employee.first_name}}</td>
                <td>{{employee.last_name}}</td>
                <td>{{employee.email}}</td>
                <td>
                    <router-link class="btn btn-default" v-bind:to="'/employee/'+employee.id">View</router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
	import Alert from './Alert';
	export default {
		name:       'employees',
		data() {
			return {
				employees:   [],
				alert:       '',
				filterInput: ''
			}
		},
		methods:    {
			fetchEmployees() {
				this.$http.get('localhost:4000/api/employees')
					.then(function (response) {
						this.employees = response.body;
					});
			},
			filterBy(list, value) {
				value = value.charAt(0).toUpperCase() + value.slice(1);
				return list.filter(function (employee) {
					return employee.last_name.indexOf(value) > -1;
				});
			}
		},
		created:    function () {
			if(this.$route.query.alert) {
				this.alert = this.$route.query.alert;
			}
			this.fetchEmployees();
		},
		updated:    function () {
			this.fetchEmployees();
		},
		components: {
			Alert
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
