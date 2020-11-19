let app = new Vue({
    el:"#app",
    data:{
        weatherList:[],
        city:""
    },
    methods: {
        searchWeather:function(){
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city).then((data)=>{
                console.log(data.data.data.forecast);
                // 将数据保存到数组中
                this.weatherList = data.data.data.forecast;
            })
        },
        changeCity: function(city){
            this.city = city;
            this.searchWeather();
        }
    }
})