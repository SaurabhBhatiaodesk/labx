"use client";

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";
import BuildIcon from "@mui/icons-material/Build"; // Icon for Service
import DescriptionIcon from "@mui/icons-material/Description"; // Icon for B2B Repair
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";

interface LeftSidebarProps {
  toogleActive?: () => void;
}

const drawerWidth = 240;

const navigationItems = [
  {
    title: "Service",
    icon: <BuildIcon />,
    children: [
      { title: "B2B Repair", path: "/adminDeshboard/b2brepair", icon: <DescriptionIcon /> },
    ],
  },
];

const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (index: number) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [index]: !prevOpenItems[index],
    }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Typography variant="h6" sx={{ padding: 2, textAlign: "center" }}>
        Admin Menu
      </Typography>
      <List>
        {navigationItems.map((item, index) => (
          <div key={index}>
            {item.children ? (
              <>
                <ListItem onClick={() => handleToggle(index)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                  {openItems[index] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child, childIndex) => (
                      <Link key={childIndex} href={child.path} passHref>
                        <ListItem component="a" sx={{ pl: 4 }}>
                          <ListItemIcon>{child.icon}</ListItemIcon>
                          <ListItemText primary={child.title} />
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : null}
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default LeftSidebar;
