import { ROUTES } from "../constans/apis";
import Teachers from "./../pages/Teachers";
export const teacherRoutes = [
  {
    path: ROUTES.TEACHERS,
    loader: async () => {
      return fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => res.products);
    },
    element: <Teachers />,
  },
];
