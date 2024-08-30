import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  Barbell,
  CaretDown,
  Globe,
  Phone,
  Square,
  Sun,
  TagChevron,
  UserList,
  X,
  SquaresFour,
  BookOpen,
  GlobeHemisphereWest,
  Users,
  House,
} from "@phosphor-icons/react";

const navListMenuItems = [
  {
    title: "History",
    description: "Discover the rich history of our culture.",
    icon: SquaresFour,
  },
  {
    title: "Learn Igala",
    description: "Learn the Igala language and communicate better.",
    icon: BookOpen,
  },
  {
    title: "Chat",
    description: "Communicate with diverse people across the world.",
    icon: GlobeHemisphereWest,
  },
  {
    title: "Fun and Entertainment",
    description: "Enjoy fun activities and entertainment.",
    icon: Sun,
  },
  {
    title: "About Us",
    description: "Learn more about our organization.",
    icon: Users,
  },
  {
    title: "Contact",
    description: "Get in touch with us for more information.",
    icon: Phone,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <CaretDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block  ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <CaretDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-2">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:mb-8 mb-4 rounded-none lg:rounded-lg">
      <div className="flex items-center justify-between text-blue-gray-900 ">
        <Typography
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 self-center
          text-xl w-[30%] ml-[35%] font-bold text-cyan-800
          hover:text-cyan-300 transition-colors duration-300 uppercase
          tracking-wide"
        >
          {" "}
          Ibegwu
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <X className="h-6 w-6" strokeWidth={2} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#403f3f"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
