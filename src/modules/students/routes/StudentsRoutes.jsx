import { ROUTES } from "../constans/apis";
import Student from "./../pages/Student";

export const StudentRoutes = [
  {
    path: ROUTES.STUDENTS,

    loader: async () => {
      return fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((res) => res.users);
    },
    element: <Student />,
  },
];
