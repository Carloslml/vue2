Vue.filter('mayusculas',(value)=>value.toUpperCase());
new Vue({
	el: 'main',
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((respuesta)=>{
			this.posts=respuesta.data;
		});
	},
	data: {
		posts:null,
		texto:'Hola mundo desde VUE2',
        nombre:'Carlos',
		apellido:'Gonzalez',
        nota:5,
        peliculas:['Los Simpsons','Llamas bajo el  agua','Ola k ase, la llama loca','La pelicula anterior es buena xd'],
        frutas:[
            {nombre:'Manzana',color:'Rojo','precio':1400},
            {nombre:'Banano',color:'Amarillo','precio':900},            {nombre:'Sandia',color:'Verde','precio':2300}
        ],
        superfruta:	{nombre:'Mandarina',color:'Naranja','precio':500},
		peliculaNueva:null,
		busqueda:'',
		confirmado:null
	},
	methods: {
		crearPelicula(){
			//alert(this.peliculaNueva);
			this.peliculas.unshift(this.peliculaNueva);
			this.peliculaNueva=null;
		},
		borrarPelicula(indice){
			//alert(indice);
			this.peliculas.splice(indice,1);
		},
		marcar(index){
			this.confirmado=index;
		}
	},
	computed:{
		nombreYapellidos(){
			var date = new Date();
			var year = date.getFullYear();
			return this.nombre+" "+this.apellido+" Nota:"+this.nota+" - "+year;
		},
		peliculasOrdernadas(){
			return this.peliculas.sort();
		},
		buscarFruta(){
			return this.frutas.filter((fruta)=>fruta.nombre.includes(this.busqueda));
		}
	}
});


const vue2 = new Vue({
	el:'#app',
	data:{
		texto:'Segunda instancia vue'
	}
});

const vue3 = new Vue({
	el:'#tercera',
	data:{
		otrainstancia:'Tercera instancia vue'
	}
});


