var app = new Vue({
"el": '#app',
"data": {
    "ip":"loading....",
    "message": 'Hello World!',
    "todos": [
      { "text": 'Learn JavaScript' },
      { "text": 'Learn Vue' },
      { "text": 'Build something awesome' }
    ]
    },
    mounted() {
        axios({ method: "GET", "url": "https://httpbin.org/ip" }).then(result => {
            this.ip = result.data.origin;
        }, error => {
            console.error(error);
        });
    },
})