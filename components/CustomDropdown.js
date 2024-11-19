import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const productsMenu = [
    { id: uuidv4(), name: "Matafuegos", link: "/matafuegos" },
    { id: uuidv4(), name: "Sifones", link: "/sifones" },
    { id: uuidv4(), name: "Cartelería y señalización", link: "/carteleria" },
  ];

  const handleDropdownClick = (link) => {
    router.push(link);
  };

  const handleButtonClick = () => {
    router.push("/productos");
  };

  return (
    <Dropdown isOpen={isOpen}>
      <DropdownTrigger
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Button
          variant="light"
          className="inline-block text-lg font-normal text-black no-underline rounded-md dark:text-gray-200 hover:text-bg-black/70 focus:text-bg-black/70 focus:bg-red-100 focus:outline-none dark:focus:bg-black/70"
          onClick={handleButtonClick}
        >
          Productos
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {productsMenu.map((item) => (
          <DropdownItem onClick={() => handleDropdownClick(item.link)}>
            {item.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CustomDropdown;
