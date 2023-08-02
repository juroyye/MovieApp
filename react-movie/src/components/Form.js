
export default function  MovieDisplay ({ movie }){

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
  

 