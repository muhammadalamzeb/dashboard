/** @format */

import PageTitle from "@/components/PageTitle";
// import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { span } from "framer-motion/client";
import { Flex } from "@chakra-ui/react";
import { Box, Image } from '@chakra-ui/react';

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    discription: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity
  }
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Welcome Back, Haseena!" />
      <span style={{ color: '#888', fontSize: '0.9em' }}>
  You have accomplished a lot today. Let us handle the rest.
</span>

      {/* <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section> */}


      <Flex alignItems="center" className='mx-1'>
      {/* Image Section */}
      <Box>
        <Image 
          src="Group.png" 
          alt="Profile Image" 
          boxSize="40px" 
          borderRadius="full" 
        />
      </Box>

      {/* Text Section */}
      <Box className='px-3'>
        <span >
          30
        </span><br/>
        <span >
          Completed
        </span>
      </Box>


      <Flex alignItems="center" className='mx-1'>
      {/* Image Section */}
      <Box>
        <Image 
          src="Folder.png" 
          alt="Profile Image" 
          boxSize="40px" 
          borderRadius="full" 
        />
      </Box>

      {/* Text Section */}
      <Box className='px-3'>
        <span >
          02
        </span><br/>
        <span >
          Ongoing
        </span>
      </Box>
    </Flex>


    <Flex alignItems="center" className='mx-1'>
      {/* Image Section */}
      <Box>
        <Image 
          src="Folder_2.png" 
          alt="Profile Image" 
          boxSize="40px" 
          borderRadius="full" 
        />
      </Box>

      {/* Text Section */}
      <Box className='px-3'>
        <span >
          04
        </span><br/>
        <span >
          Draft
        </span>
      </Box>
    </Flex>

    <Flex alignItems="center" className='mx-1'>
      {/* Image Section */}
      <Box>
        <Image 
          src="Group_2.png" 
          alt="Profile Image" 
          boxSize="40px" 
          borderRadius="full" 
        />
      </Box>

      {/* Text Section */}
      <Box className='px-3'>
        <span>
          02
        </span><br/>
        <span >
          Cancelled
        </span>
      </Box>
    </Flex>
    </Flex>

    


          </div>
  );
}
