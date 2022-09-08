# authentification with jwt 

 we’re gonna JWT Authentication system example with LocalStorage, React Router, Axios and Bootstrap (without Redux). I will show you:
 - JWT Authentication for User Signup & User Login
 - Project Structure for React JWT Authentication (without Redux) with LocalStorage, React Router & Axios
 - Creating protect route in react components (requires a token for open)
 - for accessing protected Resources in react component (Authorization) :

 ```
 const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(async (config) => {
          const Token = JSON.parse(localStorage.getItem("token"));
          config.headers.Authorization = `Bearer ${Token}`;
      return config;
  }, (error) => {
      return Promise.reject(error);
  });

  const GetResources= async () => {
      const response = await axiosJWT.get('server Resources routes', {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
 ```


# Technologies
- React
- Node
- Express
- mysql
- sequelize

# Author
- Thamer Hamdi