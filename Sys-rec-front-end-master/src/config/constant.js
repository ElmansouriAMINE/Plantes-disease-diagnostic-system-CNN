let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = "http://127.0.0.1:8000/api/";
}

export const API_SERVER = BACKEND_SERVER;
export const ADMIN = 1;
export const USER = 2;
