import {
  FiHeart,
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

export default function NavIcons() {
  return (
    <div className="flex items-center gap-5 text-2xl">
      <FiSearch className="cursor-pointer hover:text-orange-500" />
      <FiHeart className="cursor-pointer hover:text-orange-500" />
      <FiShoppingCart className="cursor-pointer hover:text-orange-500" />
      <FiUser className="cursor-pointer hover:text-orange-500" />
    </div>
  );
}