import EjercicioOverview from "@/components/EjercicioOverview";
import ListaEjercicio from "@/components/ListaEjercicio";
import { Button } from "@/components/ui/button";
import { sampleWorkouts } from "@/constants";
import Image from "next/image";

const Home = () => (

  <>

    <EjercicioOverview {...sampleWorkouts[0]}/>

    <ListaEjercicio 
    title="Ultimos ejercicios" 
    ejercicio={sampleWorkouts}
    containerClassName="mt-28"
    />
  </>

);

export default Home;