/** @format */
"use client";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import { useState } from "react";
import { Nav } from "./ui/nav";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Icon from "../../public/Icon - Favorite.png"
import { Divider } from '@chakra-ui/react'

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  Star
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-9 ">
      {/* {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )} */}
      <div className="pb-5 ">
        <img src="logo.png"></img>
      </div>
      <Flex alignItems="center" className='mx-1'>
      {/* Image Section */}
      <Box mr={2}>
        <Image 
          src="Avatar.png" 
          alt="Profile Image" 
          boxSize="40px" 
          borderRadius="full" 
        />
      </Box>

      {/* Text Section */}
      <Box className='px-3'>
        <Text fontSize="lg" fontWeight="bold">
          Haseena Jameela
        </Text>
        <Text fontSize="sm" color="gray.500">
          haseenajameela@.com
        </Text>
      </Box>
    </Flex>


    <Tabs variant='soft-rounded' colorScheme='green' className='pt-3'>
  <TabList>
    <Tab color={'blue'} className='px-2 mx-3 bg-blue-200 ' style={{borderRadius: '6%'}} mb={2}>Personal</Tab>
    <Tab>Invited</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      {/* <p>one!</p> */}
    </TabPanel>
    <TabPanel>
      {/* <p>two!</p> */}
    </TabPanel>
  </TabPanels>
</Tabs>

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: Star,
            variant: "default"
          },
          {
            title: "Project History",
            href: "",
            icon: Star,
            variant: "ghost"
          },
          {
            title: "Client History",
            href: "",
            icon: Star,
            variant: "ghost"
          },
          {
            title: "Emails",
            href: "",
            icon: Star,
            variant: "ghost"
          }
        ]}
      />
      <Divider/>
     
      <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              WORKSPACES
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          {/* Nested Accordion */}
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                  Work Space Name 1
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                "Content for WorkSpace 1"
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                  Work Space Name 2
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                "Content for WorkSpace 2"
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </AccordionPanel>
        <button >See all</button>
      </AccordionItem>
    </Accordion>


    <Divider className='pt-2'/>
     
     <Accordion allowToggle>
     <AccordionItem>
       <h2>
         <AccordionButton>
           <Box as='span' flex='1' textAlign='left'>
             LAUNCHPAD
           </Box>
           <AccordionIcon />
         </AccordionButton>
       </h2>
       <AccordionPanel>
         {/* Nested Accordion */}
         <Accordion allowToggle>
           <AccordionItem>
             <h2>
               <AccordionButton>
                 <Box as='span' flex='1' textAlign='left'>
                 Business Name 1
                 </Box>
                 <AccordionIcon />
               </AccordionButton>
             </h2>
             <AccordionPanel>
               Content for Business Name 1
             </AccordionPanel>
           </AccordionItem>
           <AccordionItem>
             <h2>
               <AccordionButton>
                 <Box as='span' flex='1' textAlign='left'>
                 Business Name 2
                 </Box>
                 <AccordionIcon />
               </AccordionButton>
             </h2>
             <AccordionPanel>
               Content for Business Name 2
             </AccordionPanel>
           </AccordionItem>
           <AccordionItem>
             <h2>
               <AccordionButton>
                 <Box as='span' flex='1' textAlign='left'>
                 Business Name 3
                 </Box>
                 <AccordionIcon />
               </AccordionButton>
             </h2>
             <AccordionPanel>
               Content for Business Name 3
             </AccordionPanel>
           </AccordionItem>
         </Accordion>
       </AccordionPanel>
       <button style={{ textAlign: 'center' }}>See all</button>

     </AccordionItem>
   </Accordion>


        <Divider className='pt-2'/>
        
        <Accordion allowToggle>
     <AccordionItem>
       <h2>
         <AccordionButton>
           <Box as='span' flex='1' textAlign='left'>
             LAUNCHPAD
           </Box>
           <AccordionIcon />
         </AccordionButton>
       </h2>
       <AccordionPanel>
   <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Project Name 1",
            href: "",
            icon: Star,
            variant: "default"
          },
          {
            title: "Project Name 2",
            href: "",
            icon: Star,
            variant: "ghost"
          },
          {
            title: "Project Name 3",
            href: "",
            icon: Star,
            variant: "ghost"
          },
          
        ]}
      />

</AccordionPanel>
       </AccordionItem>
       </Accordion>

       <Divider className='pt-5'/>
       <br/>

       <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Account Settings",
            href: "",
            icon: Star,
            variant: "default"
          },
          {
            title: "Logout",
            href: "",
            icon: Star,
            variant: "ghost"
          },
          
          
        ]}
      />

    </div>
  );
}
