const app = new Vue({
    el: '#app',
    data: {
        title: 'Todo List',
        newTodo: '',
        desc: '',
        number: 1,
        capacidade_maxima : 13,
        todos: [],
        valor: [],
        ordem: []
    },
    methods: {
        addTodo(){
            
            this.todos.push({
                title: this.newTodo,
                desc: this.desc,
                val: this.number,
                done: false,
            });
            this.valor.push(this.number);
            
            this.newTodo = '';
            this.desc = '';
        },
        removeTodo(i,j,k){
            const iIndex = this.todos.indexOf(i);
            this.todos.splice(iIndex, 1);
            const jIndex = this.descricao.indexOf(j);
            this.descricao.splice(jIndex, 1);
            const kIndex = this.valor.indexOf(k);
            this.valor.splice(kIndex, 1);
            
        },
        allDone(){
        this.todos.forEach(todo => {
            todo.done = true;
          });
          this.knapSack();
        },

        compare( a, b ) {
            if ( a < b){
                return 1;
            } else {
                return -1;
            }
        },
          
        knapSack(){
            var valor1 = this.valor;
            var valor2 = this.valor;
            var capacidade_maxima = 13
            id_valor = valor1.map( (el, id) => { return id; } )

            var rows = []
            rows.push(valor1)
            rows.push(id_valor)
            zip = (...rows) => [...rows[0]].map((_,c) => rows.map(row => row[c]))
            zip(rows)
            valor1.sort( function(a,b){
                if ( a > b){
                    return 1;
                } else {
                    return -1;
                }
            } );
            this.todos.sort(function(a,b){
                if ( a.val > b.val){
                    return 1;
                } else {
                    return -1;
                }
            } );

            var dia = 1
            var id_valor = rows[1]
            while (valor1.length != 0){

                var capacidade_dia = 0
                var index = 0
                console.log("Dia: ", dia)
                var items = [];
                while((valor1.length) > 0  && capacidade_dia + valor1[index] <= capacidade_maxima){
                    
                    capacidade_dia += valor1[index]
                    console.log("item: " + id_valor[index] + " Peso: ", valor1[index])
                    items.push(
                        {
                            item: id_valor[index],
                            peso:valor1[index],
                            desc: this.todos[id_valor[index]].title
                        }
                    )
                    valor1.splice(0,1)
                    id_valor.splice(0,1)

                }
                this.ordem.push(
                    {
                        dia: dia,
                        items:items
                    }
                )
                dia += 1
            }

        }
          
        
    }  
    

});
