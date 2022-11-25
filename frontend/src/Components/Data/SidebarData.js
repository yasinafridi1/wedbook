// import {
//   AiOutlineHome,
//   FaBeer,
//   BiTrendingUp,
//   AiOutlineUser,
//   GrBusinessService,
//   MdOutlineFeedback,
// } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdBorderColor } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { GrBusinessService } from "react-icons/gr";
import { MdOutlineFeedback } from "react-icons/md";
export const SidebarData = [
  {
    title: "Dashbord",
    path: "/",
    // icon: <BsFillGridFill />,
    icon: <AiOutlineHome />,
  },
  {
    title: "Order",
    path: "/order",
    icon: <MdBorderColor />,

    // icon: <FaBeer />,
  },
  {
    title: "Revenue",
    path: "/revenue",
    // icon: <BsFillGridFill />,
    icon: <BiTrendingUp />,
  },
  {
    title: "Profile",
    path: "/profile",
    // icon: <BsFillGridFill />,
    icon: <AiOutlineUser />,
  },
  {
    title: "Services",
    path: "/services",
    // icon: <BsFillGridFill />,
    icon: <GrBusinessService />,
  },
  {
    title: "Feedbacks",
    path: "/feedbacks",
    // icon: <BsFillGridFill />,
    icon: <MdOutlineFeedback />,
  },
];
