function App() {

    const [storage , setStorage ] = useState(localStorage.getItem('monStorage'))
   
   
     return (
       <main className="main">
         <Switch>
           /*Je passe le setter au formulaire pour qu'il mette à jour le storage à l'ajout d'un user*/
           <Route exact path="/" render={(setStorage) => <Home {...setStorage} />} /> 
            /*Je passe le storage à la page employee pour la lecture du state*/
           <Route exact path="/employee" render={(storage) => <Employee {...storage} />} />
         </Switch>
       </main>
     );
   }