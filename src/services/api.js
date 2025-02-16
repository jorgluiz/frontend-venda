import axios from "axios";

export const api = axios.create({
   baseURL: import.meta.env.VITE_API_URL
});

// Lidar com erros de forma centralizada
// Ao adicionar um interceptor de resposta, você pode capturar erros em um único lugar e decidir como tratá-los
//  (por exemplo, redirecionar o usuário ao login em caso de erro 401):
api.interceptors.response.use((response) => response,
   (error) => {
      if (error.response && error.response.status === 401) {
         // Redireciona ao login ou realiza outras ações
      }
      return Promise.reject(error);
   }
);

// interceptores do Axios para adicionar o token automaticamente em todas as requisições.
api.interceptors.request.use((config) => {
   const token = localStorage.getItem('token');
   if (token) {
      config.headers.Authorization = `Bearer ${token}`;
   }
   return config;
},
   (error) => {
      return Promise.reject(error);
   }
);

// registerUser #
export const registerUser = async (dataParameters) => {
   try {
      const response = await api.post("/users/register", dataParameters);
      console.log(response.data, "registerUser registerUser registerUser");
      return response.data; // Retorna os dados de sucesso diretamente
   } catch (error) {
      console.error(error, "error registerUser error registerUser");
      return { error: error.response.data.message };
   }
};

//   loginUser #
export const loginUser = async (dataParameters) => {
   try {
      const response = await api.post("/users/login", dataParameters);
      console.log(response.data, "api loginUser api loginUser api loginUser");
      return response.data;
   } catch (error) {
      console.log(error, "error loginUser error loginUser error loginUser");
      return { error: error.message };
   }
};

export const getPaymentStatusFromDatabaseCheckPayment = async (userToken) => {
   console.log("getPaymentStatusFromDatabaseCheckPayment");
   const response = await api.post("/check/check-payment", userToken);
   return response.data;
};

export const createPixTransaction = async (dataParameters) => {
   const response = await api.post("/order/payments-pix", dataParameters);
   console.log(response);
   return response.data;
};

// // O interceptor já adiciona o token
// export const createPost = async (postData) => {
//    return api.post("/posts", postData); // body req ( sendPosts )
// };

// // O interceptor já adiciona o token
// export const getPostByCPF = async (cpf) => {
//    return api.get(`/posts/buscas/${cpf}`);
// };
// // O interceptor já adiciona o token
// export const getPDFByCPF = async (cpf) => {
//    return api.get(`/posts/buscas/${cpf}`);
// };
// // O interceptor já adiciona o token
// export const updatePostByCPF = async (cpf, updatedData) => {
//    return api.put(`/posts/buscas/${cpf}`, updatedData);
// };