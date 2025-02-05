import Navbar from '@/components/home/Navbar';
import EditProfile1 from '@/components/style1/Editprofile';
import { prisma } from '@/lib/prisma';
import React from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function page({ params }: PageProps) {
  const { slug } = await params; // Await params to access slug

  const data = await prisma.profile.findUnique({
    where: {
      slug,
    },
    select: {
      name: true,
      image: true,
      message: true,
      link: true,
      slug: true,
    },
  });

  return (
    <div>
      <Navbar />
      <EditProfile1 data={data} />
    </div>
  );
}

export default page;
