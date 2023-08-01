// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
// You can also destructure your props directly from the parameter list
export default function  MovieDisplay ({ movie }){
    //function to return loaded JSX
    const loaded = () => {
      return (
        <>
          <h1>{movie}</h1>
          <h2>{movie}</h2>
          <img src={movie} alt={movie} />
          <h2>{movie}</h2>
        </>
      );
    };
  
   
    const loading = () => {
      return <h1>No Movie to Display</h1>;
    };
  

    return movie ? loaded() : loading();
  };
  

 