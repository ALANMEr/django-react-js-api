import { Link } from "react-router-dom"
export const NavBar = () => {
    return (
        <div className="flex justify-between py-3">
         
       {/* This is creating a navigation bar component in a React application using the `Link` component
       from the `react-router-dom` library. The navigation bar has three links: "Home", "Create
       Blog", and "Ver Moneda". Clicking on each link will take the user to a different page in the
       application based on the specified route path.  */}

       
            <Link to="/blogs">
                <h1 className="font-bold bg-yellow-500 text-3xl mb-4"> Home</h1>
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg ">
                <Link to="/blogs-create">
                    Create Blog
                </Link>
                
            </button>

            <Link to="/crea">
                <h1 className="font-bold bg-yellow-500 text-3xl mb-4"> Ver Moneda</h1>
            </Link>
{/*          
            <Link to="/crear">
                <h1 className="font-bold text-3xl mb-4"> Crear App</h1>
            </Link> */}
         
        </div>
    )
}
