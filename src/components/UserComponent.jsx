import { useFetch } from "../hooks/useFetch";
import "./UserComponent.css";

export const UserComponent = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";

  const { data, isLoading, errors } = useFetch(URL);
  return (
    <section className='container-md rounded bg-light'>
      <h1 className='text-center text-primary'>Lista de Usuarios</h1>
      <p className='text-black-50 text-center'>Consumo Api JsonPlaceHolder</p>
      {isLoading ? (
        <h4>Cargando Wey!...</h4>
      ) : errors ? (
        <h4>Ha ocurrido un error!</h4>
      ) : (
        <table className='table table-striped fs-8 fw-lighter'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Username</th>
              <th scope='col'>Email</th>
              <th scope='col'>Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              return (
                <tr key={e.id}>
                  <th scope='row'>{e.name}</th>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                  <td>{e.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
};
