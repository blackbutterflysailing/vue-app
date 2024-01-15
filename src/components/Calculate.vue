<template>
    <form @submit.prevent="submit">
      <input type="number" v-model="form.numa" />

  
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          email: '',
        }
      }
    },
    methods: {
        async submit() {

            const payload = {
                    "numa" : this.form.numa,
                }

            const requestOptions = {
                method: "POST",
                body: JSON.stringify(payload),
            }

            console.log("Save to database requestOptions.body=" + requestOptions.body);

            fetch("http://localhost:8081/calc", requestOptions)
            .then ((response) => response.json())
            .then ((data) => {
                if (data.error) {
                    console.log("Error:", data.message);
                } else {
                    console.log("Success:", data);
                }
            })
            .then (() => {
                setTimeout(() => {
                    console.log("Current this.form.numa=" + this.form.numa);
                    this.form.numa = this.form.numa * 2;
                    console.log("Updated this.form.numa=" + this.form.numa);
                }, 5000);
            })
            .then (() => {
                setTimeout(() => {
                     console.log('10 second passed');
                     console.log("Ready to update this.form.numa=" + this.form.numa);
                    const temp1 = this.form.numa ** 2;
                    const payload = {
                        "numa" : temp1,
                    }

                    const requestOptions = {
                        method: "POST",
                        body: JSON.stringify(payload),
                    }

                    console.log("Save to database again, requestOptions.body=" + requestOptions.body);

                    fetch("http://localhost:8081/calc", requestOptions)
                    .then ((response) => response.json())
                    .then ((data) => {
                        if (data.error) {
                            console.log("Error:", data.message);
                        } else {
                            console.log("Success:", data);
                            this.form.numa = this.form.numa ** 2;
                            console.log("Updated value for this.form.numa=" + this.form.numa);
                        }
                    })
                }, 10000);
            })
      }
    }
  }
  </script>